import { SpendingChart } from '@/components/SpendingChart'
import { TableTransaction } from '@/components/TableTransaction'
import { ClockArrowDown, LaptopMinimalCheck, Wallet } from 'lucide-react'
import React from 'react'

export default function page() {
    return (
        <main className='w-full p-5 space-y-5'>
            <section className='grid grid-cols-3 gap-5'>
                <div className='bg-[#2B6460] text-white p-5 rounded shadow space-y-5'>
                    <Wallet size={30} />
                    <div>
                        <h1 className='text-xl font-semibold'>Rp 17.232.000,00</h1>
                        <h2 className='text-sm opacity-50'>Total Transaction</h2>
                    </div>
                </div>
                <div className='bg-[#2B6460] text-white p-5 rounded shadow space-y-5'>
                    <LaptopMinimalCheck size={30} color='#00ff2a' />
                    <div>
                        <h1 className='text-xl font-semibold'>Rp 3.500.000,00</h1>
                        <h2 className='text-sm opacity-50'>Amount Paid</h2>
                    </div>
                </div>
                <div className='bg-[#2B6460] text-white p-5 rounded shadow space-y-5'>
                    <ClockArrowDown size={30} color='#ff0000' />
                    <div>
                        <h1 className='text-xl font-semibold'>Rp 1.732.000,00</h1>
                        <h2 className='text-sm opacity-50'>Pending Amount</h2>
                    </div>
                </div>
            </section>

            <section className='p-5 rounded border-2'>
                <h1 className='text-2xl font-semibold'>Transaction History</h1>
                <TableTransaction />
            </section>
            <section className='grid grid-cols-3 gap-5'>
                <SpendingChart />
                <div className='bg-[#2B6460] text-white p-5 rounded shadow space-y-5'>
                    <h1 className='text-xl font-semibold'>Product Recomendation</h1>
                    <ul className='list-disc pl-5'>
                        <li>
                            Organic Fertilizer A
                            500 kg for Rp5.000.000,00
                        </li>
                        <li>
                            Rice Seeds Variety X
                            300 kg for Rp3.000.000,00
                        </li>
                        <li>
                            Automatic Sprinklers
                            50 unit for Rp2,500,000,00
                        </li>
                        <li>
                            Environmentally Friendly Pesticides 200 liter for Rp1.000.000,00
                        </li>
                        <li>
                            Traktor Mini
                            10 unit for Rp50.000.000,00
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}
