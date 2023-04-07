import {Container,Wrapper,Title,Top,TopButton,TopTexts,TopText,Bottom,Info,Product,
        PriceDetail,Image,Details,ProductName,ProductId,ProductSize,ProductDetail,
        ProductAmountContainer,ProductPrice,ProductAmount,Summary,SummaryTitle,
        SummaryItem,SummaryItemText,SummaryItemPrice,Button} from '../styles/Cart-Styles.jsx'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Copyright from '../components/Copyright'
import { Add, HighlightOff, Remove } from '@material-ui/icons'
import { BrowserRouter as Router, Route,Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Checkout from "../pages/Checkout";
import { useNavigate } from 'react-router-dom';





const Cart = (customerId) => {
  const [cartItems, setCartItems] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  const id = localStorage.getItem('id');
  const navigate = useNavigate();
  const [totalCartAmount, setTotalCartAmount] = useState(0);
 
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/cart/${id}`
        );
        setCartItems(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCartItems();
  }, []);

  useEffect(() => {
      const getProductDetails = async () => {
      try {
        const newProductDetails = await Promise.all(
          cartItems.map(async (cartItem) => {
            const response = await axios.get(
              `http://localhost:8080/api/v1/product/getProductById?productId=${cartItem.productId}`
            );
           //console.log(cartItem);
            return {
              productId: cartItem.productId,
              quantity: cartItem.quantity,
              picture: response.data.picture,
              price: response.data.price,
              name: response.data.name,
              size: response.data.size,
              cartId: cartItem.id
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


    //const tempTotalCartAmount = cartItems.reduce((total, item) => total + item.amount, 0);
    

  //console.log(totalCartAmount);
  const updateShoppingCartQuantity = async (shoppingCartId, quantity) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/v1/cart/updateShoppingCart?shoppingCartId=${shoppingCartId}&quantity=${quantity}`
        );
      //return response.data;
    } catch (error) {
      console.log(error);
    }
  };


  const deleteCartItem = async (shoppingCartId) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/v1/cart/deleteCartItem?shoppingCartId=${shoppingCartId}`
        );
      //return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddClick = async (productId,cartId) => {
    const updatedCartItems = [...cartItems];
    const cartItemIndex = updatedCartItems.findIndex(
      (item) => item.productId === productId
    );
    updatedCartItems[cartItemIndex].quantity++;
    await updateShoppingCartQuantity(cartId, updatedCartItems[cartItemIndex].quantity);
    updatedCartItems[cartItemIndex].amount = updatedCartItems[cartItemIndex].quantity * productDetails[cartItemIndex].price;
    setCartItems(updatedCartItems);
  };
  
  const handleRemoveClick = async (productId,cartId) => {
    const updatedCartItems = [...cartItems];
    const cartItemIndex = updatedCartItems.findIndex(
      (item) => item.productId === productId
    );
    if (updatedCartItems[cartItemIndex].quantity > 1) {
      updatedCartItems[cartItemIndex].quantity--;
      await updateShoppingCartQuantity(cartId, updatedCartItems[cartItemIndex].quantity);
      updatedCartItems[cartItemIndex].amount = updatedCartItems[cartItemIndex].quantity * productDetails[cartItemIndex].price;
      setCartItems(updatedCartItems);
    }
  };

  useEffect(() => {
    const newCartItems = cartItems.map((cartItem, index) => {
      const productDetail = productDetails[index];
      return {
        ...cartItem,
        amount: cartItem.quantity * productDetail.price
      };
    });
    const newTotalCartAmount = newCartItems.reduce((total, item) => total + item.amount, 0);
    setCartItems(newCartItems);
    setTotalCartAmount(newTotalCartAmount);
  }, [productDetails]);

  const handleCheckout =()=>{

    localStorage.setItem("totalAmount", totalCartAmount);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log(totalCartAmount);
    console.log(cartItems);
    navigate('/pages/checkout');
  }


  const handleDeleteClick = (item) => {
    if(window.confirm("Are you sure! Do you want to delete this item.")){
      deleteItem(item.cartId);
      window.location.reload()
    }
  };


  const deleteItem = async (shoppingCartId) => {
   
      try {
            const updatedCartItems = [...cartItems];
            await deleteCartItem(shoppingCartId);
            updatedCartItems[shoppingCartId].amount = 0;
            setCartItems(updatedCartItems);
            

          } catch (error) {
            console.log(error);
          }

  };
  if (!id) {
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
            <TopText>Shopping cart(0)</TopText>
          </TopTexts>
        </Top>
        <Bottom>
          <Info>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src="https://i.pinimg.com/564x/81/c4/fc/81c4fc9a4c06cf57abf23606689f7426.jpg" alt="cart is empty" />
        <h3>Your cart is empty! Regiter or Login to buy products</h3>
        
        </div>
        <Link to = "/pages/Register" style={{ textDecoration: "none" }} ><Button>Register</Button></Link>
        <Link to = "/pages/Login" style={{ textDecoration: "none" }} ><Button>Login</Button></Link>
          
          </Info>
        </Bottom>
      </Wrapper>
      <Footer />
      <Copyright />
    </Container>

      

    );
  }

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
            <TopText>Shopping cart(0)</TopText>
          </TopTexts>
        </Top>
        <Bottom>
          <Info>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src="https://i.pinimg.com/564x/81/c4/fc/81c4fc9a4c06cf57abf23606689f7426.jpg" alt="cart is empty" />
        <h3>Your cart is empty</h3>
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
                    <HighlightOff onClick={() => handleDeleteClick(item)}  />
                  
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add onClick={() => handleAddClick(item.productId,item.cartId)} />
                    <ProductAmount>{item.quantity}</ProductAmount>
                    <Remove onClick={() => handleRemoveClick(item.productId,item.cartId)} />
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
            <Link to="../pages/Checkout"
            style={{ textDecoration: "none" }}
            >
              <Button  onClick={handleCheckout} >CHECKOUT NOW</Button>
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
