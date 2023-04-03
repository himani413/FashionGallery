import { Badge, Button } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';

import styled from 'styled-components'
import Navlogo from "../images/Navlogo.png";
import { useNavigate } from 'react-router-dom';

import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import {mobile} from "../responsive"
import axios from 'axios';
import React, { useEffect, useState } from 'react';



const Container = styled.div`
  height: 95px;
  ${mobile({height:"50px"})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({padding:"10px 0px"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 16px;
  cursor: pointer;
  &:hover {
        color: teal;
        
      }
      ${mobile({display:"none"})}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({width:"50px"})}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Image = styled.img`
  width: 40%;
  height: auto;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex:2,justifyContent:"center"})}
`;

const Menu = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
  &:hover {
        color: teal;
        
      }
  ${mobile({fontSize:"12px",marginLeft:"10px"})}
`;

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: teal;
    
  }
`;

const Navbar = (props) =>{

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    navigate('/pages/login');
  };

  const token = localStorage.getItem('jwtToken');
  const [searchValue, setSearchValue] = useState("");


  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/cart/1`
        );
        setCartItems(response.data);
        //console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCartItems();
  }, []);

  const handleSearch = () => {
    const searchQuery = searchValue;
    navigate(`/pages/searchedProducts/?searchQuery=${searchQuery}`);
  }

  const totaQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Container>
        <Wrapper>
            <Left>
              <Language>EN</Language>
              <SearchContainer>
              <Input placeholder='Search' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                <Search style={{color:"gray", fontSize: 16}} onClick={handleSearch}/>
              </SearchContainer>
            </Left>
            <Center>
              <Image src={Navlogo} />
            </Center>
            <Right>

              {token ? (
              <>
                  <Menu><NavLink className="name">Welcome, {props.name}</NavLink></Menu>
                  <Menu><NavLink><Button onClick={handleLogout}>LOGOUT</Button></NavLink></Menu>
              </>
              ) : (
              <>
                  <Menu><NavLink to="../pages/Register" >REGISTER</NavLink></Menu>
                  <Menu><NavLink to="../pages/Login">SIGN IN</NavLink></Menu>
              </>
                )}
              
              
              
              <Menu>
              <Badge badgeContent={totaQuantity} color="primary">
              <NavLink to="../pages/Cart" ><ShoppingCartOutlined /></NavLink>
              </Badge>
              </Menu>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
