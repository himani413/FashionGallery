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
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
          <Title>Your Cart</Title>
          <Top>
          <Link to="/" ><TopButton>CONTINUE SHOPPING</TopButton></Link>
            <TopTexts>
                <TopText>Shopping cart(2)</TopText>
                <TopText>Your Wishlist(0)</TopText>
            </TopTexts>
            <Link to="../pages/Checkout" ><TopButton type="filled">CHECKOUT NOW</TopButton></Link>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetail>
                  <Image src={CartImage}/>
                  <Details>
                    <ProductName><b>Product:</b> White-Maxi Dress</ProductName>
                    <ProductId><b>ID:</b> 946543766</ProductId>
                    <ProductSize><b>Size:</b> M</ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add/>
                    <ProductAmount>2</ProductAmount>
                    <Remove/>
                  </ProductAmountContainer>
                  <ProductPrice>Rs. 3599</ProductPrice>
                </PriceDetail>
              </Product>
              <Hr/>
              <Product>
                <ProductDetail>
                  <Image src={CartImage2}/>
                  <Details>
                    <ProductName><b>Product:</b> White Jumpsuit</ProductName>
                    <ProductId><b>ID:</b> 946543768</ProductId>
                    <ProductSize><b>Size:</b> S</ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add/>
                    <ProductAmount>1</ProductAmount>
                    <Remove/>
                  </ProductAmountContainer>
                  <ProductPrice>Rs. 4690</ProductPrice>
                </PriceDetail>
              </Product>
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>Rs. 8289</SummaryItemPrice>
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
                <SummaryItemPrice>Rs. 8419</SummaryItemPrice>
              </SummaryItem>
              <Link to="../pages/Checkout" ><Button>CHECKOUT NOW</Button></Link>
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer/>
        <Copyright/>
    </Container>
  )
}

export default Cart
