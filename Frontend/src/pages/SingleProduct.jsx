import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'
import {Container,ImgContainer,Wrapper,Image, 
        InfoContainer, Title, Desc, Price, FilterContainer, 
        Filter, FilterTitle, FilterSize, FilterSizeOption, 
        AddContainer, AmountContainer, Amount, Button} from '../styles/SingleProduct-Styles'
import { Add, Remove } from '@material-ui/icons'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  
  const [quantity, setQuantity] = useState(1);


  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/getProductById?productId=1');
      setProduct(response.data);
    };
    fetchData();
  }, []);
  const navigate = useNavigate();
  const handleAddToCart = async () => {
    const customerId = 1;
    const data = { productId: product.id, quantity };
    try {
      const response = await axios.post(`/addToCart/${customerId}`, data);
      console.log(response.data);
      navigate('Cart');
    } catch (error) {
      console.log(error);
    }
  };


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
            <AmountContainer>
              <Remove onClick={() => setQuantity(quantity - 1)} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => setQuantity(quantity + 1)} />
            </AmountContainer>
            <Button onClick={handleAddToCart}>Add To Cart</Button>
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
