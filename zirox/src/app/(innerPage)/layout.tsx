import React, { ReactNode } from 'react'
import Footer from '@/components/home1/Footer'
import Header from '@/components/home1/Header'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default layout