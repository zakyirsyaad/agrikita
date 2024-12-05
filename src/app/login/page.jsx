import Logo from '@/components/logo'
import Image from 'next/image'
import React from 'react'
import LoginForm from '@/components/LoginForm'


export default function page() {
    return (
        <main className='min-h-screen pl-20 2xl:pl-40 text-white bg-gradient-to-b grid grid-cols-2 from-[#00452A] to-[#00985B]'>
            <section className='py-10'>
                <Logo />
                <div className='space-y-5 my-10 2xl:mr-20 grid'>
                    <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-semibold'>Solusi Cerdas untuk Petani Modern</h1>
                    <Image
                        src={'/images/pexels-makara-eam-3416687-8232660.jpg'}
                        alt="Foto Login Agrikita"
                        width={400}
                        height={300}
                        priority={true}
                        className='xl:w-[500px] h-[550px] 2xl:w-[650px] 2xl:h-[600px] object-cover rounded-2xl shadow-xl'
                    />
                </div>
            </section>
            <LoginForm />
        </main>
    )
}
