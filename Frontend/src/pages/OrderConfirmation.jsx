import React from "react";
import companyLogo from "../images/orderconfirmation.png";
import {Container,Wrapper,Title,Info,Button,Image} from "../styles/OrderConfirmation-Styles.jsx";

const OrderConfirmation = () => {
  return (
    <Container>
        <Wrapper>
            <Image src={companyLogo}/><Title>Your Order is Confirmed!</Title>
            <Info>Thanks for Shopping with Fasion Gallery! Please allow 5-10 
                working days to process and get your order delivered to your doorstep. 
                Our Courier Partners will contact you prior to the delivery.
            </Info> 
            <Button>Back To Home</Button>
            
        </Wrapper>
    </Container>
    
    
  )
}

export default OrderConfirmation