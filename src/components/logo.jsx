import Image from 'next/image'
import React from 'react'

export default function Logo() {
    return (
        <div className='flex items-center gap-2'>
            <Image
                src={"/logo/pixelcut-export 1.png"}
                alt="logo"
                width={100}
                height={100}
                priority={true}
                className='bg-white/95 w-10 h-10 rounded-full object-cover'
            />
            <p className='text-white font-semibold'>AgriKita</p>
        </div>
    )
}
