import React, { useState } from 'react';
import axios from 'axios';
import companyLogo from "../images/logo.png";
import {Container,Wrapper,Title,FORM,Input,Button,Image,Label} from "../styles/EmailVerification-Styles";
import '../styles/Errors.css';

function EmailVerification() {
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) =>{
    event.preventDefault();
    if(token.trim()===''){
      setMessage("Enter valid token");
    }
    else{ 
      try{
        const response = await axios.post('http://localhost:8080/api/v1/auth/confirm?token=' + token , JSON.stringify(),
        {
        headers: {
          'Content-Type': 'application/json'
        }
        }
        );
        if (response.status === 200) {
          window.location.href = "http://localhost:3000/pages/login";
        } else {
          setMessage(response.data.message);
        }
        }catch(error){
            setMessage(error.response.data);
        }
      }
    }; 

  return (
    <Container>
        <Wrapper>
            <Image src={companyLogo}/>
            <Title>ACTIVATE YOUR ACCOUNT: </Title>
            <FORM onSubmit={handleSubmit}>
                <Label>
                    Enter the Verification Code Sent To Your Email:<Input type="text" value={token} onChange={event => setToken(event.target.value)}/>
                </Label>
                <Button type="submit">ACTIVATE</Button>
                {message && <p className="error">{message}</p>}

            </FORM>
        </Wrapper>
    </Container>
  )
}

export default EmailVerification
