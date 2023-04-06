import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"
import {Container,Title,FilterContainer,FilterText,
        Filter,Select,Option} from "../styles/ProductList-Styles"
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { categories } from "../data";
import { sliderItems } from "../data";

export const ProductList = () => {
    const [ProductList, setProductList] = useState([]);
    const location = useLocation();
    const categoryId = new URLSearchParams(location.search).get("categoryId");
    const [title,setTitle] = useState("");
    useEffect(() => {
        if (categoryId !== null) {

            const category = categories.find(c => c.id === parseInt(categoryId, 10));
            const slider = sliderItems.find(s=>s.id=== parseInt(categoryId, 10));
            console.log(category)
            if (category) {
                setTitle(category.title);
            }
            else if(slider){
                setTitle(slider.title);
            }
            console.log(categoryId)
            console.log(`http://localhost:8080/api/v1/product/getProductByCategory?categoryId=${categoryId}`)
          fetch(`http://localhost:8080/api/v1/product/getProductByCategory?categoryId=${categoryId}`)
            .then((response) => response.json())
            .then((data) => setProductList(data))
            .catch((error) => console.error(error));
        }
      }, [categoryId]);


  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>{title}</Title>
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
        <Products items={ProductList}/>
        <Newsletter/>
        <Footer/>
        <Copyright/>
    </Container>
  )
}

export default ProductList