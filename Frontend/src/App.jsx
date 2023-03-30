import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SingleProduct from "./pages/SingleProduct";
import Register from "./pages/Register"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import ProductList from "./pages/ProductList"
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div>
        <Routes>
          <Route exact path="/" element={<SingleProduct/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/Cart" element={<Cart/>}/>
        </Routes>
    </div>
  );
};

export default App;