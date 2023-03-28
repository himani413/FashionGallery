import React from "react";
import companyLogo from "../images/logo.png";
import {Container,Wrapper,Title,FORM,Input,Button,Image,Label} from "../styles/EmailVerification-Styles";



const EmailVerification = () => {
  return (
    <Container>
        <Wrapper>
            <Image src={companyLogo}/>
            <Title>VERIFY YOUR EMAIL </Title>
            <FORM>
                <Label>
                    Enter the Verification Code Sent To Your Email:<Input placeholder='Verification Code'/>
                </Label>
                <Button>VERIFY</Button>
                
            </FORM>
        </Wrapper>
    </Container>
  )
}

export default EmailVerification
