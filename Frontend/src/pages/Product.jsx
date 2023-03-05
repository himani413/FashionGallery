import Navbar from "../components/Navbar";
import { Add, Remove } from "@material-ui/icons";
import {Container,Wrapper,ImgContainer,Image,InfoContainer,Title,Desc,Price,FilterContainer,Filter,
        FilterTitle,FilterSize,FilterSizeOption,AddContainer,AmountContainer,Amount,Button} 
        from "../styles/Product-Styles.jsx";
import Newsletter from "../components/Newsletter";


export const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://www.lulus.com/images/product/xlarge/7748701_1575776.jpg?w=375&hdpi=1"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Black Off-Shoulder Wide-Leg Jumpsuit</Title>
                <Desc>This jumpsuit is composed of stretchy crepe knit that shapes 
                    an off-the-shoulder neckline (with hidden no-slip strips) and short sleeves. 
                    An overlapping panel at the princess-seamed bodice gives a little bit of flair and 
                    features supportive boning throughout. High, fitted waist continues to breezy wide 
                    pant legs that end at the ankle. Hidden back zipper/clasp.
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
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
    </Container>
  )
}
