'use client'
import React from 'react'
import Logo from './logo'
import { Button } from './ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
    const pathname = usePathname();
    return (
        <header className='flex items-center justify-between'>
            <Logo />
            <nav>
                <ul className='text-white flex gap-5 2xl:text-lg'>
                    <li>
                        <Link href={'/'} className={pathname === '/' ? 'font-semibold' : ''}>Beranda</Link>
                    </li>
                    <li>
                        <Link href={'/layanan'}>Layanan</Link>
                    </li>
                    <li>
                        <Link href={'/kontak'}>kontak</Link>
                    </li>
                    <li>
                        <Link href={'/about'}>About</Link>
                    </li>
                </ul>
            </nav>
            <div className='flex gap-2'>
                <Button variant='ghost' asChild>
                    <Link href={'/login'}>Login</Link>
                </Button>
                <Button asChild>
                    <Link href={'/register'}>Register</Link>
                </Button>
            </div>
        </header>
    )
}
