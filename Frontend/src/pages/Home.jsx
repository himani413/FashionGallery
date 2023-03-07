import React from 'react'
import Copyright from '../components/Copyright'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Newsletter/>
        <Footer/>
        <Copyright/>
    </div>
  )
}

export default Home
