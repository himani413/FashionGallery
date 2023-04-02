import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
  import { useNavigate } from 'react-router-dom';
  import {mobile} from "../responsive"
  import axios from 'axios';
  import React, { useEffect, useState } from 'react';

  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
  
  const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
  
    &:hover ${Info}{
      opacity: 1;
    }
  `;
  
  const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
  `;
  
  const Image = styled.img`
    height: 75%;
    z-index: 2;
  `;
  
  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #c2efef;
      transform: scale(1.2);
    }
  `;
  
  const Product = ({ item }) => {
    const navigate = useNavigate();

    const handleItem = () => {
      navigate(`/pages/SingleProduct/?productId=${item.id}`);
    }

    const handleAddToCart = async () => {
      const customerId = 1;
      const data = { productId: item.id, quantity:1 };
      try {
        const response = await axios.post(`http://localhost:8080/api/v1/cart/addToCart/${customerId}`, data);
        console.log(response.data);
        navigate('../pages/Cart');
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <Container>
        <Circle />
        <Image src={item.picture} />
        <Info>
          <Icon>
            <ShoppingCartOutlined onClick={handleAddToCart}/>
          </Icon>
          <Icon>
            <SearchOutlined onClick={handleItem} />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Container>
    );
  };
  
  export default Product;