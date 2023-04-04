import CartImage from '../images/white-maxi.jpg'
import CartImage2 from '../images/white-jumpsuit.jpeg'
import {Container,Wrapper,Title,Top,TopButton,TopTexts,TopText,Bottom,Info,Product,
        PriceDetail,Image,Details,ProductName,ProductId,ProductSize,ProductDetail,
        ProductAmountContainer,ProductPrice,ProductAmount,Hr,Summary,SummaryTitle,
        SummaryItem,SummaryItemText,SummaryItemPrice,Button} from '../styles/Cart-Styles.jsx'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Copyright from '../components/Copyright'
import { Add, Remove } from '@material-ui/icons'
import { BrowserRouter as Router, Route,Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Checkout from "../pages/Checkout";
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/cart/1`
        );
        setCartItems(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCartItems();
  }, []);

  useEffect(() => {
      const getProductDetails = async () => {
      try {
        const productIds = [...new Set(cartItems.map(item => item.productId))]; // Get unique product IDs from cart items
        const newProductDetails = await Promise.all(
        productIds.map(async (productId) => {
        const response = await axios.get(
        `http://localhost:8080/api/v1/product/getProductById?productId=${productId}`
      );
        const quantity = cartItems.filter(item => item.productId === productId)
        .reduce((total, item) => total + item.quantity, 0); // Calculate total quantity for the product
      return {
            productId,
            quantity,
            picture: response.data.picture,
            price: response.data.price,
            name: response.data.name,
            size: response.data.size
      };
      })
      );
      setProductDetails(newProductDetails);
      if (newProductDetails.length > 0) {
        setIsEmpty(false);
      }
    } catch (error) {
      console.log(error);
    }
    };
      if (cartItems.length > 0) {
      getProductDetails();
      }
    }, [cartItems]);


  const totalCartAmount = cartItems.reduce((total, item) => total + item.amount, 0);

  console.log(totalCartAmount);



  if (isEmpty) {
    return (
      <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <Link to="/">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping cart({cartItems.reduce((total, item) => total + item.quantity, 0)})</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
        </Top>
        <Bottom>
          <Info>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src="https://i.pinimg.com/564x/81/c4/fc/81c4fc9a4c06cf57abf23606689f7426.jpg" alt="cart is empty" />
        <p>Your cart is empty</p>
        </div>
          
          </Info>
        </Bottom>
      </Wrapper>
      <Footer />
      <Copyright />
    </Container>
      

    );
  }
  
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <Link to="/">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping cart({cartItems.reduce((total, item) => total + item.quantity, 0)})</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <Link to="../pages/Checkout">
            <TopButton type="filled">CHECKOUT NOW</TopButton>
          </Link>
        </Top>
        <Bottom>
          <Info>
            {productDetails.map((item, index) => (
              <Product key={index}>
                <ProductDetail>
                  <Image src={item.picture} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {item.name}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {item.productId}
                    </ProductId>
                    <ProductSize>
                      <b>Size:</b> {item.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{item.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    Rs. {item.price * item.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>
                Rs.{totalCartAmount}
              </SummaryItemPrice>
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
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>
                Rs.{totalCartAmount+350-220}
              </SummaryItemPrice>
            </SummaryItem>
            <Link
              to={{
              pathname: "../pages/Checkout",
              state: {
                cartItems: JSON.stringify(cartItems),
                totalAmount: totalCartAmount,
              },
            }}
            style={{ textDecoration: "none" }}
>
              <Button>CHECKOUT NOW</Button>
            </Link>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
      <Copyright />
    </Container>
  );
}

export default Cart
