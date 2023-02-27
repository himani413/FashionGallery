import React from "react";
import styled from "styled-components"


const Container = styled.div`
    width: 100w;
    height: 100vh;
    background-image: 
        linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)),
        url("https://img.freepik.com/free-photo/stunning-barefooted-woman-trendy-fur-coat-dancing-laughing-photoshoot_197531-7073.jpg?w=1480&t=st=1677478655~exp=1677479255~hmac=2ad752c3704ebd64a13c14aaf88bbab5d6f19d47fb119f1c4ef443ae828a7016") ;
    background-repeat: round;

    display: flex;
    align-items: center;
    justify-content: center;

    `;

    const Wrapper = styled.div`
    width: 40%;
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
    flex-wrap: wrap;

`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;

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
    &:hover {
        color: white;
        opasity: 0.2;
        background-color: rgb(0, 77, 77);
        
      }
`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <FORM>
                <Input placeholder='name'/>
                <Input placeholder='last name'/>
                <Input placeholder='username'/>
                <Input placeholder='email'/>
                <Input placeholder='password'/>
                <Input placeholder='confirm password'/>
                <Agreement>
                    By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>.
                </Agreement>
                <Button>CREATE</Button>
            </FORM>
        </Wrapper>
    </Container>
  )
}

export default Register
