import { ChartDashboard } from '@/components/Chart'
import StatisticChart from '@/components/StatisticChart'
import { Boxes, Cloudy, HandCoins, ShoppingCart } from 'lucide-react'
import React from 'react'

export default function page() {
    return (
        <main className='w-full p-5'>
            <section className='grid grid-cols-3 xl:grid-cols-4 gap-5'>
                <div className='bg-[#2B6460] p-5 rounded text-white flex flex-col justify-between'>
                    <Boxes size={30} strokeWidth={2} />
                    <div>
                        <h1 className='text-xl font-semibold'>5 unit</h1>
                        <h2 className='text-xs opacity-50'>Total Registered Land</h2>
                    </div>
                </div>
                <div className='bg-[#2B6460] p-5 rounded text-white flex flex-col justify-between'>
                    <Cloudy size={30} strokeWidth={3} />
                    <div>
                        <h1 className='text-xl font-semibold'>Cloudy</h1>
                        <h2 className='text-xs opacity-50'>Weather</h2>
                    </div>
                </div>
                <div className='bg-[#2B6460] p-5 rounded text-white flex flex-col justify-between'>
                    <div className='flex gap-5'>
                        <h1 className='text-xl font-semibold'>Sales</h1>
                        <p className='text-sm text-green-400'>+23.98%</p>
                    </div>
                    <div>
                        <h2 className='font-medium'>Rp 12.000.000</h2>
                        <p className='text-xs opacity-50'>Compared to <br /> (Rp 9.760.000,00 last year) </p>
                    </div>
                </div>
                <div className='bg-[#2B6460] p-5 rounded text-white flex flex-col justify-between'>
                    <div className='flex gap-5'>
                        <h1 className='text-xl font-semibold'>Purchase</h1>
                        <p className='text-sm text-destructive'>-67.69%</p>
                    </div>
                    <div>
                        <h2 className='font-medium'>Rp 5.232.000</h2>
                        <p className='text-xs opacity-50'>Compared to <br />(Rp 3.120.000,00 last year) </p>
                    </div>
                </div>
            </section>

            <section>
                <div className='grid grid-cols-2 gap-5 mt-5'>
                    <div className='bg-[#2B6460] p-5 rounded text-white space-y-5'>
                        <h1 className='text-xl font-semibold'>Recomendation
                            from System
                        </h1>
                        <ul className='list-disc pl-5 text-lg'>
                            <li>
                                use organic fertilizer type X
                            </li>
                            <li>
                                The next watering is recommended after 2 days
                            </li>
                            <li>
                                Watch out for caterpillar attacks on vegetable plants
                            </li>
                            <li>
                                Light rain predicted in 3 days
                            </li>
                        </ul>
                    </div>

                    <div className='bg-[#2B6460] p-5 rounded text-white flex flex-col justify-between'>
                        <ChartDashboard />
                    </div>

                    <div className='border-2 p-5 rounded flex flex-col justify-between col-span-2'>
                        <StatisticChart />
                    </div>
                </div>
            </section>
        </main>
    )
}
