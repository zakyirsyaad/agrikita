import Sidebar from '@/components/Sidebar'
import { cookies } from 'next/headers'
import React from 'react'

export default async function layout({ children }) {
    const cookiesStore = await cookies()
    const accessToken = cookiesStore.get('accessToken')?.value

    return (
        <div className='flex 2xl:mx-40'>
            <Sidebar accessToken={accessToken} />
            {children}
        </div>
    )
}
