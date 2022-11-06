import React from 'react'
import Banner from './Banner'
import Calendar from './Calendar'
import Contact from './Contact'
import Gallery from './Gallery'
import Join from './Join'

const Home = () => {
  return (
    <div >
      <Banner />
      <Calendar />
      <Join />
      <Gallery />
      <Contact />
    </div>
  )
}

export default Home;