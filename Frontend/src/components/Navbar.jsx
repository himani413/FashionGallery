import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import Navlogo from "../images/Navlogo.png";
import {mobile} from "../responsive"

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
      ${mobile({display:none})}
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

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
              <Language>EN</Language>
              <SearchContainer>
                <Input placeholder='Search' />
                <Search style={{color:"gray", fontSize: 16}}/>
              </SearchContainer>
            </Left>
            <Center>
              <Image src={Navlogo} />
            </Center>
            <Right>
              <Menu>REGISTER</Menu>
              <Menu>SIGN IN</Menu>
              <Menu>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
              </Menu>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
