
import { Add, Remove } from '@material-ui/icons'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import CartImage from '../images/white-maxi.jpg'
import CartImage2 from '../images/white-jumpsuit.jpeg'

const Container = styled.div`
    
`;

const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 15px;;
  border: ${(props) =>props.type === "filled" && "none"};
  background-color: ${(props)=>
    props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};

    &:hover{
        background-color: ${(props) =>props.type === "filled" ? "teal" : "black"};
        color: ${(props) =>props.type === "filled" ? "white" : "white"};
  }
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;

`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 25%;
  height: auto;
`;
const Details = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid teal;
    text-align: center;
    justify-content: center;
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;

`;

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
          <Title>Your Cart</Title>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
                <TopText>Shopping cart(2)</TopText>
                <TopText>Your Wishlist(0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
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
            <Summary>summary</Summary>
          </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart
