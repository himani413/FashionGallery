import React from 'react'
import Copyright from '../components/Copyright'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Newsletter from '../components/Newsletter'
import Categories from '../components/Categories'
import Products from '../components/Products'

function Home(){
//can access the user's name from the location state and pass it to the navigation bar component

  return (
    <div> 
        <Announcement />
        <Navbar />
        <Slider />
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
        <Copyright/>
    </div>
  );
}

export default Home
