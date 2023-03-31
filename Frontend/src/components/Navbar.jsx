import { Badge, Button } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import Navlogo from "../images/Navlogo.png";
import { useNavigate } from 'react-router-dom';

import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import {mobile} from "../responsive"


const Container = styled.div`
  height: 95px;
  ${mobile({backgroundColor:"red"})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;

const Menu = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
  &:hover {
        color: teal;
        
      }
`;

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: teal;
    
  }
`;

function Navbar(props){

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    navigate('/pages/login');
  };

  const token = localStorage.getItem('jwtToken');
  return (
    <Container>
        <Wrapper>
            <Left>
              <Language>EN</Language>
              <SearchContainer>
                <Input />
                <Search style={{color:"gray", fontSize: 16}}/>
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
              <Badge badgeContent={4} color="primary">
              <NavLink to="../pages/Cart" ><ShoppingCartOutlined /></NavLink>
              </Badge>
              </Menu>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
