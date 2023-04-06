import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'
import {Container,ImgContainer,Wrapper,Image, 
        InfoContainer, Title, Desc, Price, FilterContainer, 
        Filter, FilterTitle, FilterSize, FilterSizeOption, 
        AddContainer, AmountContainer, Amount, Button, Message} from '../styles/SingleProduct-Styles'
import { Add, Remove } from '@material-ui/icons'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";



const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const location = useLocation();
  const productId = new URLSearchParams(location.search).get("productId");

  
  const [quantity, setQuantity] = useState(1);
  const [isQuantityValid, setIsQuantityValid] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:8080/api/v1/product/getProductById?productId=${productId}`);
      setProduct(response.data);
      console.log(response.data);
    };
    fetchData();
  }, []);
  const navigate = useNavigate();
  const handleAddToCart = async () => {

    const customerId = localStorage.getItem("id");
    const data = { productId: product.id, quantity };
    try {
      const response = await axios.post(`http://localhost:8080/api/v1/cart/addToCart/${customerId}`, data);
      navigate('../pages/Cart');
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
      navigate(`/pages/checkout?productId=${productId}&quantity=${quantity}`);
  };

  useEffect(() => {
    if (product && quantity > product.availableQuantity) {
      setIsQuantityValid(false);
    } else if (product && product.availableQuantity === 0) {
      setIsQuantityValid(false);
    } else {
      setIsQuantityValid(true);
    }
  }, [product, quantity]);

  if (!product) {
    return <Container>
    <Navbar />
   <Announcement />
   <Wrapper>
     <InfoContainer>
       <Title>No Details to display</Title>
       </InfoContainer>
   </Wrapper>
   <Newsletter/>
   <Footer/>
   <Copyright/>

 </Container>;
  }
  return (
    <Container>
       <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.picture} />
        </ImgContainer> 
        <InfoContainer>
          <Title>{product.name}</Title>
            <Desc>{product.description }
            </Desc>
            <Price>Rs.{product.price}/=</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
            {product && product.availableQuantity === 0 && (
                  <h1>This product is currently out of stock</h1>
                )}
                {product && product.availableQuantity !== 0 && (
                  <>
                    <AmountContainer>
                      <Remove onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)} />
                      <Amount>{quantity}</Amount>
                      <Add onClick={() => setQuantity(quantity + 1)} />
                    </AmountContainer>
                    <Button disabled={!isQuantityValid} onClick={handleAddToCart}>Add To Cart</Button>

                    <Button disabled={!isQuantityValid} onClick={handleBuy}>Buy Now</Button>             
                    {!isQuantityValid && <Message>The selected quantity is greater than the available quantity!</Message>}

                  </>
                )}
            </AddContainer>
          </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
      <Copyright/>

    </Container>
  )
}

export default SingleProduct
