import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import companyLogo from "../images/logo.png";
const Container = styled.div`
  height: 95px;
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
  object-fit: cover;
  width: 250px;
  height: 85px;
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

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
              <Language>EN</Language>
              <SearchContainer>
                <Input />
                <Search />
              </SearchContainer>
            </Left>
            <Center>
            <Image src={companyLogo}/>
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
