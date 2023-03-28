import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"
import {Container,Title,FilterContainer,FilterText,
        Filter,Select,Option} from "../styles/ProductList-Styles"
import React from "react"

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
        <Products/>
        <Newsletter/>
        <Footer/>
        <Copyright/>
    </Container>
  )
}

export default ProductList