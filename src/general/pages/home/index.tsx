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
                <title>NUST Choice Champions | Home</title>
                <meta
                    name="description"
                    content="Promoting positive change in the lives of our fellow peers"
                />
                <meta name="keywords" content="Nust Choice Champions, Peer Educators, Zimbabwe, NUST, health, Choice Champions"/>
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
