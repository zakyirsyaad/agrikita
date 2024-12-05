'use client'
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'
export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const onSubmit = async (event) => {
        event.preventDefault();
        setError(null);

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            // Check if the response is OK (status code 2xx)
            if (!response.ok) {
                const errorData = await response.text(); // Try to get raw error response text
                throw new Error(errorData || 'Registration failed');
            }

            // Try to parse the JSON response
            const data = await response.json();

            // Handle success
            console.log('User Login', data);
            router.push('/dashboard'); // Navigate to the login page

        } catch (error) {
            setError(error.message || 'An unexpected error occurred');
        } finally {
            setLoading(false);
        }

    };

    return (
        <section className='bg-white text-black p-10 2xl:p-20 rounded-tl-3xl rounded-bl-3xl  space-y-5'>
            <h1 className='text-2xl 2xl:text-4xl font-semibold'>Login account</h1>
            <form className='space-y-5' onSubmit={onSubmit}>
                {error && <p className="text-red-500">{error}</p>}
                <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant='secondary' className='w-full' disabled={loading}>{loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}Logins</Button>
            </form>
            <p className='text-center'>Don&apos;t have an account?
                <Link href={'/register'} className='text-[#009257]'>
                    <strong> Create an account</strong>
                </Link>
            </p>
            <div className='grid grid-cols-7 items-center'>
                <Separator className='col-span-3' />
                <p className='text-center'>or</p>
                <Separator className='col-span-3' />
            </div>
            <Button variant='outline' className='w-full'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                    <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                </svg>
                Login with Google</Button>
        </section>
    )
}
