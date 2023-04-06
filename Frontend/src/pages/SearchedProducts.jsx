import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"
import {Container,FilterContainer,FilterText,
        Filter,Select,Option} from "../styles/ProductList-Styles"
import { BrowserRouter as Router, Route} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";


export const SearchedProducts = () => {
    const [SearchItems, setSearchItems] = useState([]);
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get("searchQuery");


    useEffect(() => {
        if (searchQuery !== "") {

          fetch(`http://localhost:8080/api/v1/product/search?searchValue=${searchQuery}`)
            .then((response) => response.json())
            .then((data) => setSearchItems(data))
            .catch((error) => console.error(error));
            //console.log(data);
        }
      }, [searchQuery]);

    


  return (
    <Container>
        <Navbar searchQuery={searchQuery} />
        <Announcement/>
        {searchQuery !== "" ? `Search Results for ${searchQuery}` : "Search Results"}
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
        <Products items={SearchItems} />
        <Newsletter/>
        <Footer/>
        <Copyright/>
    </Container>
  )
}

export default SearchedProducts