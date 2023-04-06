import React from "react";
import companyLogo from "../images/orderconfirmation.png";
import {Container,Wrapper,Title,Info,Button,Image} from "../styles/OrderConfirmation-Styles.jsx";
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';

const OrderConfirmation = () => {
  return (
    <Container>
        <Wrapper>
            <Image src={companyLogo}/><Title>Your Order is Confirmed!</Title>
            <Info>Thanks for Shopping with Fasion Gallery! Please allow 5-10 
                working days to process and get your order delivered to your doorstep. 
                Our Courier Partners will contact you prior to the delivery.
            </Info> 
            <Link to="/" style={{ textDecoration: 'none' }}><Button>Back To Home</Button></Link>
            <Link to="../pages/OrderDetails" style={{ textDecoration: 'none' }}><Button>My Orders</Button></Link>
            
        </Wrapper>
    </Container>
    
    
  )
}

export default OrderConfirmation