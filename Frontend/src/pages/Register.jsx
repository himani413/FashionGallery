import React from "react";
import companyLogo from "../images/logo.png";
import {Container,Wrapper,Title,FORM,Input,Agreement,Button,Image} from "../styles/Register-Styles.jsx";



const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Image src={companyLogo}/>
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
