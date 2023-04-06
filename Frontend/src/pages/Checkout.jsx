import {Container,Wrapper,Title,Bottom,Info,FORM,Input,Agreement,Summary,SummaryTitle,
        SummaryItem,SummaryItemText,SummaryItemPrice,Button,Hr} from '../styles/Checkout-Styles.jsx'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Copyright from '../components/Copyright'
import { Checkbox } from '@material-ui/core'
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import '../styles/Errors.css';



const Checkout = () => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  const location = useLocation();
  const singleProductId = new URLSearchParams(location.search).get("productId");
  const [singleProductQuantity,setSingleProductQuantity] =useState(new URLSearchParams(location.search).get("quantity"));
  console.log(singleProductId);
  const [amount, setAmount] = useState(localStorage.getItem('totalAmount'));
  const customerId = localStorage.getItem('id');
  useEffect(() => {
    if (singleProductId) {
      const fetchData = async () => {
        const response =  await axios.get(`http://localhost:8080/api/v1/product/getProductById?productId=${singleProductId}`);
        console.log(response.data.price);
        if(singleProductQuantity){
          setAmount(response.data.price * singleProductQuantity)
        }
        else{
          setAmount(response.data.price);
          setSingleProductQuantity(1);
        }
      };
      fetchData();
 
     
      
    }
  }, [singleProductId]);

 

  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobile] = useState('');
  const [addressLine1, setAddressline1] = useState('');
  const [addressLine2, setAddressline2] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [zipcode, setCode] = useState('');
  const [fieldError,setFieldError] = useState("");
  const [response, setResponse] = useState("");
  const [errorResponse, setErrorResponse] = useState("")
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (firstName==="") {
      setFieldError("Firstname is Required");
    }
    else if (lastName==="") {
      setFieldError("Lastname is Required");
    }
    else if (email==="") {
      setFieldError("Email is Required");
    }
    else{
      try {
        const cusemail=localStorage.getItem('email');
        const response = await axios.post('http://localhost:8080/api/v1/customer/delivery?username='+cusemail, JSON.stringify({
          firstName,
          lastName,
          mobileNumber,
          addressLine1,
          addressLine2,
          city,
          province,
          zipcode,
          amount
          
        }), {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        );
        const orderId = response.data.id; 
        console.log(orderId);
        if(singleProductId){
          const response = await axios.post(`http://localhost:8080/api/v1/order/addOrderItems?orderId=${orderId}&productId=${singleProductId}&quantity=${singleProductQuantity}`);
          console.log(response);
          const response2 = await axios.post(`http://localhost:8080/api/v1/product/updateQuantity?productId=${singleProductId}&buyingQuantity=${singleProductQuantity}`);
          console.log(response2);
        }
         
        else{
           
          for (let i = 0; i < cartItems.length; i++) {
            const cartItem = cartItems[i];
            const productId = cartItem.productId;
            const productQuantity = cartItem.quantity;
            const response = await axios.post(`http://localhost:8080/api/v1/order/addOrderItems?orderId=${orderId}&productId=${productId}&quantity=${productQuantity}`);
            console.log(response);
          }
          const response2 = await axios.post(`http://localhost:8080/api/v1/cart/deleteCart?customerId=${customerId}`);
          console.log(response2);
        
          
        }

        localStorage.removeItem('price');
        localStorage.removeItem('quantity');
        localStorage.removeItem("totalCartAmount");
        localStorage.removeItem("cartItems");
        setResponse("Payment Successfull!");
        navigate('orderconfirmation');

      } catch (e) {
          setErrorResponse("Failed!");
      }
    }
  };





 

    return (
      <Container>
          <Navbar/>
          <Announcement/>
          <Wrapper>
            <Title>Shipping Information</Title>
            
            <Bottom>
              <Info>
              {errorResponse && <div className="errorResponse">{errorResponse}</div>}
              {response && <div className="response">{response}</div>}
              {fieldError && <div className="error">{fieldError}</div>}
              <FORM>
                <Input id="firstName"
                      name="firstName"
                      onChange={(e) =>{
                      setFirstname(e.target.value);
                      setFieldError("");}}
                      placeholder='First Name' required/>
                <Input id="lastName"
                      name="lastName"
                      onChange={(e) => {setLastname(e.target.value);
                      setFieldError("");}}
                      placeholder='Last Name'required/>
                <Input id="mobileNumber"
                       name="mobileNumber"
                       onChange={(e) => {setMobile(e.target.value);
                       setFieldError("");}}
                       placeholder='Mobile Number' required/>
                <Input id="email"
                       name="email"
                       onChange={(e) => {setEmail(e.target.value);
                       setFieldError("");}}
                       placeholder='Email' required/>
                <Input id="addressLine1"
                      name="addressLine1"
                      onChange={(e) => {setAddressline1(e.target.value);
                      setFieldError("");}}
                      placeholder='Addressline 1' required/>
                <Input id="addressLine2"
                    name="addressLine2"
                    onChange={(e) => {setAddressline2(e.target.value);
                    setFieldError("");}}
                    placeholder='Adressline 2' required/>
                <Input id="city"
                    name="city"
                    onChange={(e) => {setCity(e.target.value);
                    setFieldError("");}}
                    placeholder='City' required/>
                <Input id="province"
                    name="province"
                    onChange={(e) => {setProvince(e.target.value);
                    setFieldError("");}}
                    placeholder='Province' required/>
                <Input id="zipcode"
                    name="zipcode"
                    onChange={(e) => {setCode(e.target.value);
                    setFieldError("");}}
                    placeholder='Zip Code' required/>   
            </FORM>
                 
              </Info>
              
              <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>Subtotal</SummaryItemText>
                  <SummaryItemPrice>Rs. {amount}</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Estimated Shipping</SummaryItemText>
                  <SummaryItemPrice>Rs. 350</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Shipping Discount</SummaryItemText>
                  <SummaryItemPrice>Rs. -220</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                  <SummaryItemText >Total</SummaryItemText>
                  <SummaryItemPrice>Rs. {parseInt(amount, 10)+350-220}</SummaryItemPrice>
                </SummaryItem>
                <Button onClick={handleClick}>Place Order</Button>
              </Summary>
            </Bottom>
            <Agreement>
                   <Checkbox/>I have read and agree to the website <b>TERMS AND CONDITIONS</b>.
                </Agreement>
            <Hr/>
          </Wrapper>
          <Footer/>
          <Copyright/>
      </Container>
    )
  }
  
  export default Checkout
