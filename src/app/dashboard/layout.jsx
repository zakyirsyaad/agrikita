import Sidebar from '@/components/Sidebar'
import React from 'react'

export default function layout({ children }) {
    return (
        <div className='flex 2xl:mx-40'>
            <Sidebar />
            {children}
        </div>
    )
}
