import React, { useEffect, useState } from 'react';
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
import axios from 'axios';


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/getOrderByCustomer/1'
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
          cartItems.map(async (order) => {
            const orderDetails = await Promise.all(
              order.cartItems.map(async (item) => {
                const response = await axios.get(
                  `http://localhost:8080/getProductById?productId=${item.productId}`
                );
                console.log(response);
                return {
                  productId: item.productId,
                  size: response.data.size,
                  picture: response.data.picture,
                  price: response.data.price,
                };
              })
            );
            return orderDetails;
          })
        );
        setProductDetails(newProductDetails.flat());
      } catch (error) {
        console.log(error);
      }
    };
    if (cartItems.length > 0) {
      getProductDetails();
    }
  }, [cartItems]);

  const getProductInfo = (productId) => {
    const product = productDetails.find(
      (product) => product.productId === productId
    );
    if (product) {
      return product;
    } else {
      return { size: 'N/A', picture: CartImage };
    }
  };

  const totalAmount = cartItems.reduce((total, order) => {
    return total + order.cartItems.reduce((subtotal, item) => {
      return subtotal + item.quantity * item.price; // updated computation
    }, 0);
  }, 0);

  

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping cart({cartItems.length})</TopText>
            <TopText>Your Wishlist(5)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cartItems.length > 0 && (
              <>
                {cartItems
                  .reduce((groups, order) => {
                    order.cartItems.forEach((item) => {
                      const index = groups.findIndex(
                        (group) => group.productId === item.productId
                      );
                      if (index === -1) {
                        groups.push({
                          productId: item.productId,
                          productName: item.productName,
                          quantity: item.quantity,
                        });
                      } else {
                        groups[index].quantity += item.quantity;
                      }
                    });
                    return groups;
                  }, [])
                  .map((group) => (
                    <Product key={group.productId}>
                      <ProductDetail>
                        <Image src={getProductInfo(group.productId).picture} />
                        <Details>
                          <ProductName>
                            <b>Product:</b> {group.productName}
                          </ProductName>
                          <ProductId>
                            <b>ID:</b> {group.productId}
                          </ProductId>
                          <ProductSize>
                            <b>Size:</b> {getProductInfo(group.productId).size}
                          </ProductSize>
                        </Details>
                      </ProductDetail>
                      <PriceDetail>
                        <ProductAmountContainer>
                          <Add />
                          <ProductAmount>{group.quantity}</ProductAmount>
                          <Remove />
                        </ProductAmountContainer>
                        <ProductPrice>Rs. {getProductInfo(group.productId).price * group.quantity }{console.log(getProductInfo(group.productId).price)}</ProductPrice>
                      </PriceDetail>
                    </Product>
                  ))}
              </>
            )}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>
                Rs.{" "}
                {cartItems.reduce((total, order) => {
                  return (
                    total +
                    order.cartItems.reduce((subtotal, item) => {
                      return subtotal + getProductInfo(item.productId).price * item.quantity;
                    }, 0)
                  );
                }, 0)}
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
                Rs.{" "}
                {cartItems.reduce((total, order) => {
                  return (
                    total +
                    order.cartItems.reduce((subtotal, item) => {
                      return subtotal + getProductInfo(item.productId).price * item.quantity;
                    }, 0)
                  );
                }, 0) + 350 - 220}
              </SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
        </Wrapper>
        <Footer/>
        <Copyright/>
    </Container>
  )
}

export default Cart
