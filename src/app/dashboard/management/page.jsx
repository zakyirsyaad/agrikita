import MonthlyPhChart from '@/components/MontlyPhChart'
import { TemperatureChart } from '@/components/TemperatureChart'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <main className='p-5 w-full space-y-5'>
            <section className='grid grid-cols-3 gap-5'>
                <Image
                    src={'/images/image 4.png'}
                    alt="Foto Login Agrikita"
                    width={500}
                    height={500}
                    priority={true}
                    className='col-span-2 w-full h-full rounded object-cover'
                />
                <div className='grid gap-5'>
                    <div className='bg-[#2B6460] p-5 rounded text-white grid'>
                        <h1 className='text-lg 2xl:text-2xl font-semibold'>
                            Land List
                        </h1>
                        <ul className='list-disc pl-5 2xl:text-lg'>
                            <li>
                                Sawah
                            </li>
                            <li>
                                perkebunan Teh
                            </li>
                            <li>
                                Kebun Jagung
                            </li>
                            <li>
                                Kebun Durian
                            </li>
                        </ul>
                        <p className='self-end opacity-50'>Show More</p>
                    </div>

                    <div className='bg-[#2B6460] p-5 rounded text-white space-y-5 grid'>
                        <h1 className='text-lg font-semibold'>
                            Soil Health Indicators
                        </h1>
                        <div className='grid grid-cols-3 gap-5'>
                            <div className=' flex flex-col items-center text-center gap-5'>
                                <Image
                                    src={'/images/Vector.png'}
                                    alt="Foto Login Agrikita"
                                    width={25}
                                    height={25}
                                    priority={true}
                                />
                                <p className='text-xs 2xl:text-sm'>potential of Hydrogen(92%)</p>
                            </div>
                            <div className=' flex flex-col items-center text-center gap-5'>
                                <Image
                                    src={'/images/Vector (1).png'}
                                    alt="Foto Login Agrikita"
                                    width={25}
                                    height={25}
                                    priority={true}
                                />
                                <p className='text-xs 2xl:text-sm'>Humidity(97%)</p>
                            </div>
                            <div className=' flex flex-col items-center text-center gap-5'>
                                <Image
                                    src={'/images/group.png'}
                                    alt="Foto Login Agrikita"
                                    width={25}
                                    height={25}
                                    priority={true}
                                />
                                <p className='text-xs 2xl:text-sm'>Temperature (85%)</p>
                            </div>
                        </div>
                        <div className='place-self-center'>
                            <TemperatureChart />
                        </div>
                    </div>
                </div>
            </section>

            <section className='grid grid-cols-3 gap-5'>
                <MonthlyPhChart />
                <div className='space-y-5 bg-[#2B6460] p-5 rounded text-white relative'>
                    <h1 className='text-lg font-semibold'>Soil Nutrient Levels</h1>

                    <div className='flex items-center gap-5'>
                        <Image
                            src={'/images/iconoir_nitrogen.png'}
                            alt="Foto Login Agrikita"
                            width={60}
                            height={60}
                            priority={true}
                        />
                        <div>
                            <p className='font-semibold 2xl:text-xl'>Nitrogen</p>
                            <p className='text-sm'>(80% - 90%)</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <Image
                            src={'/images/Vector (2).png'}
                            alt="Foto Login Agrikita"
                            width={60}
                            height={60}
                            priority={true}
                        />
                        <div>
                            <p className='font-semibold 2xl:text-xl'>Phospor</p>
                            <p className='text-sm'>(60% - 75%)</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <Image
                            src={'/images/arcticons_kalium.png'}
                            alt="Foto Login Agrikita"
                            width={60}
                            height={60}
                            priority={true}
                        />
                        <div>
                            <p className='font-semibold 2xl:text-xl'>Kalium</p>
                            <p className='text-sm'>(70% - 85%)</p>
                        </div>
                    </div>
                    <Image
                        src={'/images/image-removebg-preview (1) 1.png'}
                        alt="Foto Login Agrikita"
                        width={250}
                        height={250}
                        priority={true}
                        className='absolute -top-32 -right-20'
                    />
                </div>
            </section>
        </main>
    )
}
