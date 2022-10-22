import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../general/components/footer'
import Header from '../../general/components/header'

const GeneralPagesLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default GeneralPagesLayout