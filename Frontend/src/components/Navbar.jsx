import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import Navlogo from "../images/Navlogo.png";

const Container = styled.div`
  height: 60px;
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
  font-size: 14px;
  cursor: pointer;
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
  height: 50px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Menu = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
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
