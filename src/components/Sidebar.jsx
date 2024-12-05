'use client';
import React, { useEffect, useState } from 'react';
import Logo from './logo';
import Link from 'next/link';
import { ArrowRightLeft, LayoutDashboard, Network, Recycle } from 'lucide-react';
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
    const [file, setFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');

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
                    setAvatarUrl(data.foto);
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

    // Handle file upload
    const handleUpload = async (e) => {
        e.preventDefault();

        if (!file) {
            setUploadStatus('Please select a file to upload.');
            return;
        }

        try {
            setUploadStatus('Uploading...');
            const formData = new FormData();
            formData.append('file', file);
            formData.append('userId', userData.id);

            const response = await fetch('/api/user/update-avatar', {
                method: 'POST',
                body: formData,
            });

            console.log(response);

            const data = await response.json();

            if (response.ok) {
                setUploadStatus('Upload successful!');
                setAvatarUrl(data.avatarUrl); // Set the new avatar URL
                setFile(null); // Reset file input
            } else {
                setUploadStatus(`Upload failed: ${data.message}`);
            }
        } catch (err) {
            setUploadStatus(`An error occurred: ${err.message}`);
        }
    };

    return (
        <aside className="bg-[#00452A] w-1/4 space-y-5">
            <div className="text-white bg-gradient-to-br from-[#00452A] to-[#00985B] p-5 rounded-bl-[40px] space-y-5">
                <Logo />
                <div className="flex flex-col items-center text-center gap-5">
                    <div className="flex flex-col items-center space-y-4">
                        <Avatar className="w-24 h-24 border-2">
                            <AvatarImage src={avatarUrl} alt="User Avatar" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Input
                            type="file"
                            id="file"
                            accept="image/jpeg, image/png"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                        <Button onClick={handleUpload} disabled={!file || loading}>
                            Upload Avatar
                        </Button>
                        {uploadStatus && <p className="text-sm">{uploadStatus}</p>}
                    </div>

                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <div>
                            <p>{userData?.nama}</p>
                            <p>{userData?.email}</p>
                        </div>
                    )}
                    <Button>Logout</Button>
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
