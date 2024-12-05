import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className='grid grid-cols-2 h-[calc(100vh-80px)]'>
            <div className='text-white space-y-5 place-content-center'>
                <h1 className='text-6xl 2xl:text-7xl font-bold'>
                    Solusi Cerdas untuk Petani Modern
                </h1>
                <h2 className='2xl:text-xl'>
                    <strong>AgriKita</strong> hadir untuk mendukung petani menemukan strategi terbaik, dari pengelolaan lahan hingga pemasaran hasil panen dengan data terpercaya.
                </h2>
                <Button className='text-[#009257] bg-white hover:bg-#009257' asChild>
                    <Link href={'/register'}>Coba Sekarang!</Link>
                </Button>
            </div>

            <div className='place-content-end place-items-end'>
                <Image
                    src={'/images/coba 1.png'}
                    alt="logo"
                    width={500}
                    height={500}
                    priority={true}
                    className='2xl:w-[700px] 2xl:h-[700px]'
                />
            </div>
        </section>
    )
}
