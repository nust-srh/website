import React from 'react'
import { Helmet } from 'react-helmet-async'
import Banner from './Banner'
import Calendar from './Calendar'
import Contact from './Contact'
import Gallery from './Gallery'
import Join from './Join'

const Home = () => {
    return (
        <>
        <Helmet>
            <title>Asekuru</title>
        </Helmet>
            <Banner />
            <Join />
            <Calendar />
            <Gallery />
            <Contact />
        </>
    )
}

export default Home
