'use client'
import React from 'react'
import Logo from './logo'
import Link from 'next/link'
import { ArrowRightLeft, LayoutDashboard, Network, Recycle } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from './ui/button'

const avatar = "https://s3-alpha-sig.figma.com/img/c337/49eb/782e41d906352f703e7e5bc1bf08d221?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F8Xws7q7xEmGE3gxnrVdeXKCSiwRwo0gCZhtPaytO1rdXzmtl9PVAw8zWIDkz12FRmwVnnHUNs2R9eQAcBCYVmI6rleR6Kx5tsmG5QTbHiRvRnehaL96nttN6Tz9KAfy0SzIkx4NhP-FxkzHr7CU5LCC2A7j1nBGsQr5wZqokojxNTfKwmdrJ835PPnaZV-VG5w7QFwc7OfzhwIMWeJz~PQAOktHVgnBGZrASLxnbdULFltATzRnuVFraS-xRO51f1OIEFnBxRENcmv3urcyrxlLKOZRfdNLKzWl~KaKasc5LPW27SGDHFINC~jD9i0kRzJI12ioczkQ~jw4uX~0Cg__"

export default function Sidebar() {
    const pathname = usePathname();

    const activeMenu = {
        beranda: '/dashboard' === pathname,
        management: '/dashboard/management' === pathname,
        proses: '/dashboard/proses' === pathname,
        transaksi: '/dashboard/transaksi' === pathname
    }

    return (
        <aside className='bg-[#00452A] w-1/4 space-y-5'>
            <div className='text-white bg-gradient-to-br from-[#00452A] to-[#00985B] p-5 rounded-bl-[40px] space-y-5'>
                <Logo />
                <div className='flex flex-col items-center text-center gap-5'>
                    <Avatar className="w-24 h-24 border-2">
                        <AvatarImage src={avatar} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                        <p>Tomie Kawakami</p>
                        <p>kawakamitomie@gmail.com</p>
                    </div>
                    <Button>Logout</Button>
                </div>
            </div>
            <nav className='p-10'>
                <ul className='text-white space-y-10'>
                    <li>
                        <Link
                            href={'/dashboard'}
                            className={activeMenu.beranda
                                ? 'flex items-center gap-2 bg-white p-3 text-green-500 rounded'
                                : 'flex items-center gap-2 hover:bg-white/80 p-3 rounded duration-300 hover:text-black'}
                        >
                            <LayoutDashboard /> Beranda
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'/dashboard/management'}
                            className={activeMenu.management
                                ? 'flex items-center gap-2 bg-white p-3 text-green-500 rounded'
                                : 'flex items-center gap-2 hover:bg-white/80 p-3 rounded duration-300 hover:text-black'}
                        >
                            <Network />
                            Management Lahan
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'/dashboard/proses'}
                            className={activeMenu.proses
                                ? 'flex items-center gap-2 bg-white p-3 text-green-500 rounded'
                                : 'flex items-center gap-2 hover:bg-white/80 p-3 rounded duration-300 hover:text-black'}
                        >
                            <Recycle />
                            Proses
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'/dashboard/transaksi'}
                            className={activeMenu.transaksi
                                ? 'flex items-center gap-2 bg-white p-3 text-green-500 rounded'
                                : 'flex items-center gap-2 hover:bg-white/80 p-3 rounded duration-300 hover:text-black'}
                        >
                            <ArrowRightLeft />
                            Transaksi
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}
