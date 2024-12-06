'use client'
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import GoogleLoginButton from './GoogleLoginButton'
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
            <GoogleLoginButton />
        </section>
    )
}
