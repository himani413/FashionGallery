import SingleProduct from "./pages/SingleProduct";
import Register from "./pages/Register"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import ProductList from "./pages/ProductList"
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import EmailVerification from "./pages/EmailVerification.jsx";
import React from 'react';
import {BrowserRouter as Router,Route,Routes } from "react-router-dom";


const App = () => {

  return (
    
      <Router>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/pages/register" element={<Register/>} />
        <Route path="/pages/login" element={<Login/>} />
        <Route path="/pages/cart" element={<Cart/>} />
        <Route path="/pages/productlist" element={<ProductList/>} />
        <Route path="/pages/singleproduct" element={<SingleProduct/>} />
        <Route path="/pages/checkout" element={<Checkout />} />
        <Route path="/pages/orderconfirmation" element={<OrderConfirmation />} />
        <Route path="/pages/emailverification" element={<EmailVerification />} />
        
      </Routes>
      </Router>
    
  );

};

export default App;