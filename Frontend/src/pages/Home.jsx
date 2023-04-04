import Copyright from '../components/Copyright'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Newsletter from '../components/Newsletter'
import Categories from '../components/Categories'
import Products from '../components/Products'
import axios from 'axios';
import React, { useEffect, useState } from 'react';


function Home(){
//can access the user's name from the location state and pass it to the navigation bar component
  const [Items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/product/getAllProducts`
        );
        const randomItems = response.data.sort(() => Math.random() - 0.5).slice(0, 10);
        setItems(randomItems);
        //console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchItems();
  }, []);

  return (
    <div> 
        <Announcement />
        <Navbar />
        <Slider />
        <Categories/>
        <Products items={Items}/>
        <Newsletter/>
        <Footer/>
        <Copyright/>
    </div>
  );
}

export default Home
