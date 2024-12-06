'use client';
import React, { useEffect, useState } from 'react';
import Logo from './logo';
import Link from 'next/link';
import { ArrowRightLeft, LayoutDashboard, Network, Pencil, Recycle } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from './ui/button';
import { Input } from './ui/input';

export default function Sidebar({ accessToken }) {
    const pathname = usePathname();

    const activeMenu = {
        beranda: '/dashboard' === pathname,
        management: '/dashboard/management' === pathname,
        proses: '/dashboard/proses' === pathname,
        transaksi: '/dashboard/transaksi' === pathname,
    };

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fetch user data
    useEffect(() => {
        const fetchUserData = async () => {
            setLoading(true);
            try {
                const response = await fetch('/api/user', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                const data = await response.json();

                if (response.ok) {
                    setUserData(data);
                } else {
                    setError(data.message || 'Failed to fetch user data.');
                }
            } catch (err) {
                setError('Failed to fetch user data.');
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [accessToken]);

    const [file, setFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    }

    const handleUpload = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("userId", userData?.id);

            const res = await fetch("/api/user/update-avatar", {
                method: "POST",
                body: formData,
            });

            if (res.ok) {
                const data = await res.json();
                setUploadStatus(`Success! File URL: ${data.publicUrl}`);
                console.log(data);
            } else {
                const errorData = await res.json();
                setUploadStatus(`Error: ${errorData.error}`);
                console.error(errorData);
            }
        } catch (error) {
            console.error(error);
            setUploadStatus("An error occurred while uploading the file.");
        }
    };

    async function logout() {
        try {
            const res = await fetch('/api/auth/logout', { method: 'POST' });

            if (res.ok) {
                console.log('Logout successful');
                // Redirect user or clear frontend state here
                window.location.href = '/login';
            } else {
                const errorData = await res.json();
                console.error('Logout failed:', errorData.error);
            }
        } catch (error) {
            console.error('An error occurred while logging out:', error);
        }
    }





    return (
        <aside className="bg-[#00452A] w-1/4 space-y-5">
            <div className="text-white bg-gradient-to-br from-[#00452A] to-[#00985B] p-5 rounded-bl-[40px] space-y-5">
                <Logo />
                <div className="flex flex-col items-center text-center gap-5">
                    <form className="flex flex-col items-center space-y-4 relative">
                        <Avatar className="w-24 h-24 border-2">
                            <AvatarImage src={userData?.foto || '/images/blank-profile-picture-973460_1280.png'} alt="User Avatar" />
                            <AvatarFallback>{userData?.nama?.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <label className='absolute -top-5 -right-0 hover:scale-105 duration-300'>
                            <Pencil className='' size={30} fill='black' />
                            <Input type="file" onChange={handleFileChange} accept="image/*" className="hidden" />
                        </label>
                        <Button onClick={handleUpload} className={file ? "block " : "hidden"}>Upload</Button>
                    </form>
                    {error && <p>{error}</p>}
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <div>
                            <h1 className='text-lg font-semibold'>{userData?.nama}</h1>
                            <h2 className='text-sm'>{userData?.email}</h2>
                        </div>
                    )}
                    <Button onClick={logout}>Logout</Button>
                </div>
            </div>
            <nav className="p-10">
                <ul className="text-white space-y-10">
                    <li>
                        <Link
                            href={'/dashboard'}
                            className={`flex items-center gap-2 p-3 rounded ${activeMenu.beranda
                                ? 'bg-white text-green-500'
                                : 'hover:bg-white/80 duration-300 hover:text-black'
                                }`}
                        >
                            <LayoutDashboard /> Beranda
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'/dashboard/management'}
                            className={`flex items-center gap-2 p-3 rounded ${activeMenu.management
                                ? 'bg-white text-green-500'
                                : 'hover:bg-white/80 duration-300 hover:text-black'
                                }`}
                        >
                            <Network /> Management Lahan
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'/dashboard/proses'}
                            className={`flex items-center gap-2 p-3 rounded ${activeMenu.proses
                                ? 'bg-white text-green-500'
                                : 'hover:bg-white/80 duration-300 hover:text-black'
                                }`}
                        >
                            <Recycle /> Proses
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'/dashboard/transaksi'}
                            className={`flex items-center gap-2 p-3 rounded ${activeMenu.transaksi
                                ? 'bg-white text-green-500'
                                : 'hover:bg-white/80 duration-300 hover:text-black'
                                }`}
                        >
                            <ArrowRightLeft /> Transaksi
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}
