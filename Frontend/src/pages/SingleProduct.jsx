import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'
import {Container,ImgContainer,Wrapper,Image, 
        InfoContainer, Title, Desc, Price, FilterContainer, 
        Filter, FilterTitle, FilterSize, FilterSizeOption, 
        AddContainer, AmountContainer, Amount, Button} from '../styles/SingleProduct-Styles'
import productimg from '../images/black-jumpsuit.jpg'
import { Add, Remove } from '@material-ui/icons'

const SingleProduct = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
          <ImgContainer>
              <Image src={productimg}/>
          </ImgContainer>
          <InfoContainer>
            <Title>Black Off-Shoulder Wide-Leg Jumpsuit</Title>
            <Desc>This jumpsuit is composed of stretchy crepe knit 
                  that shapes an off-the-shoulder neckline (with hidden no-slip strips) 
                  and short sleeves. An overlapping panel at the princess-seamed bodice 
                  gives a little bit of flair and features supportive boning throughout. 
                  High, fitted waist continues to breezy wide pant legs that end at the ankle. 
                  Hidden back zipper/clasp.
            </Desc>
            <Price>Rs.4590/=</Price>
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
                <Remove/>
                <Amount>1</Amount>
                <Add/>
              </AmountContainer>
              <Button>Add To Cart</Button>
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
