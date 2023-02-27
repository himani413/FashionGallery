import React from "react";
import styled from "styled-components"

const Container = styled.div`
    width: 100w;
    height: 100vh;
    background-image: 
        linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)),
        url("https://img.freepik.com/free-photo/enthusiastic-white-girl-fashionable-purple-jacket-dancing-studio_197531-7104.jpg?w=1380&t=st=1677485637~exp=1677486237~hmac=8cd8e6f8e94055593e612def28373af0c16b59567929051ccc2ef97db1a9336c") ;
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
    padding 15px 20px;
    color: white;
    background-color: teal;
    border-radius: 20px;
    cursor: pointer;
    margin-bottom: 10px;
    &:hover {
        color: white;
        opasity: 0.2;
        background-color: rgb(0, 77, 77);
        
      }
`;

const Link = styled.a`
      margin: 10px 0px;
      font-size: 12px;
      text-decoration: underline;
      cursor: pointer;
      &:hover,
        &:focus {
        color: palevioletred;
        }
        &:active {
        color: red;
  }
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
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