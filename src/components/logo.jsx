import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
    return (
        <Link href={'/'} className='flex items-center gap-2 z-20'>
            <Image
                src={"/logo/pixelcut-export 1.png"}
                alt="logo"
                width={100}
                height={100}
                priority={true}
                className='bg-white/95 w-10 h-10 rounded-full object-cover'
            />
            <p className='text-white font-semibold'>AgriKita</p>
        </Link>
    )
}
