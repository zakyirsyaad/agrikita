'use client'
import { TableHistory } from '@/components/TableHistory';
import { TableProduction } from '@/components/TableProduction';
import { Calendar, Table } from 'lucide-react';
import moment from 'moment';
import Image from 'next/image';
import React from 'react'

export default function Page() {
    const [date, setDate] = React.useState(moment().format('MMMM Do YYYY'));

    React.useEffect(() => {
        const interval = setInterval(() => {
            setDate(moment().format('MMMM Do YYYY, h:mm:ss a'));
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    const d = date

    return (
        <main className='w-full p-5 space-y-5'>
            <section className='grid grid-cols-5 gap-5'>
                <div className='border-2 p-5 rounded col-span-3 flex items-center justify-center gap-5 shadow'>
                    <Calendar size={50} />
                    <p className='text-4xl font-semibold '>{d}</p>
                </div>
                <div className='bg-[#2B6460] p-5 rounded text-white col-span-2 grid grid-cols-3 gap-5 shadow'>
                    <div className='flex items-center gap-2'>
                        <Image
                            src={'/images/tabler_seeding-filled.png'}
                            alt="Foto Agrikita"
                            width={20}
                            height={20}
                            priority={true}
                        />
                        <p>Seeding</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Image
                            src={'/images/game-icons_plant-roots.png'}
                            alt="Foto Agrikita"
                            width={20}
                            height={20}
                            priority={true}
                        />
                        <p>Planting</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Image
                            src={'/images/game-icons_fertilizer-bag.png'}
                            alt="Foto Agrikita"
                            width={20}
                            height={20}
                            priority={true}
                        />
                        <p>Fertilizing</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Image
                            src={'/images/cbi_garden-irrigation.png'}
                            alt="Foto Agrikita"
                            width={20}
                            height={20}
                            priority={true}
                        />
                        <p>Irrigation</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Image
                            src={'/images/devicon_harvester.png'}
                            alt="Foto Agrikita"
                            width={20}
                            height={20}
                            priority={true}
                        />
                        <p>Harvesting</p>
                    </div>
                </div>
            </section>
            <TableProduction />
            <section className='grid grid-cols-3 gap-5'>
                <section className="col-span-2 border p-5 shadow">
                    <h1 className='text-2xl font-semibold'>User History</h1>
                    <TableHistory />
                </section>

                <div className='col-span-1 border p-5 shadow'>
                    <h1 className='text-2xl font-semibold'>Video Tutorial</h1>
                    <iframe
                        src="https://www.youtube.com/embed/mYdt6CAwKAY?si=3up2v4q_df86iypi"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className='w-full aspect-square rounded mt-5'
                    />
                </div>
            </section>
        </main>
    )
}
