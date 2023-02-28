import React from "react";
import styled from "styled-components"
import backgroundImageLogin from "../images/bi-login.jpg"
import companyLogo from "../images/logo.png"

const Container = styled.div`
    width: 100w;
    height: 100vh;
    background-image: 
        linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)),
        url(${backgroundImageLogin}) ;
    background-repeat: round;
    
    display: flex;
    align-items: center;
    justify-content: center;

    `;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const FORM = styled.form`
    display: flex;
    flex-direction: column;

`;

const Input = styled.input`
    flex: 1;
    min-width: 25%;
    margin: 10px 0px;
    padding 10px;
`;

const Button = styled.button`
    width: 30%;
    border: none;
    font-size: 14px;
    padding 10px 20px;
    color: white;
    background-color: teal;
    border-radius: 20px;
    cursor: pointer;
    margin: 12px 0px;
    &:hover {
        color: white;
        opasity: 0.2;
        background-color: rgb(0, 77, 77);
        
      }
`;

const Link = styled.a`
      margin: 5px 0px 2px 0px;
      font-size: 12px;
      cursor: pointer;
      &:hover,
        &:focus {
        color: palevioletred;
        }
        &:active {
        color: red;
  }
`;

const Image = styled.img`

    width: 250px;
    height: 85px;
    text-align: center;
    display: block;
    justify-content: center;
    align-items: center;
    margin: auto;
`;



const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Image src={companyLogo}/><Title>SIGN IN</Title>
            
            <FORM>
                <Input placeholder='username'/>
                <Input placeholder='password'/>
              
                <Button>LOGIN</Button>
                <Link>DO NOT REMEMBER THE PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </FORM>
            
        </Wrapper>
    </Container>
  )
}

export default Login