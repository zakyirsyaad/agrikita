'use client'
import { SessionContext, SessionProvider } from 'next-auth/react'
import React from 'react'

export default function NextProvider({ children }) {
    return (
        <SessionProvider session={SessionContext}>
            {children}
        </SessionProvider>
    )
}
