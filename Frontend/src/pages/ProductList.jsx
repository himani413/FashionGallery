import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"

import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"

const Container = styled.div``

const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 500;
    margin-right: 20px;
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
   
`

const Option = styled.option`

`

export const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (Asc)</Option>
                    <Option>Price (Desc)</Option>
                </Select>
            </Filter>
            
        </FilterContainer>
        
        <Newsletter/>
        <Footer/>
        <Copyright/>
    </Container>
  )
}

export default ProductList