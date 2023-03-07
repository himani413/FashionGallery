import React from 'react'
import Copyright from '../components/Copyright'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div> 
        <Announcement />
        <Navbar />
        <Slider />
        <Newsletter/>
        <Footer/>
        <Copyright/>
    </div>
  )
}

export default Home
