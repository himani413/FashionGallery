import React from 'react'
import Copyright from '../components/Copyright'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Newsletter from '../components/Newsletter'
import Categories from '../components/Categories'
import Products from '../components/Products'
import { useLocation } from 'react-router-dom';

function Home(){
//can access the user's name from the location state and pass it to the navigation bar component
  const location = useLocation();
  const name = location.state ? location.state.name : '';

  return (
    <div> 
        <Announcement />
        <Navbar name={name} />
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
