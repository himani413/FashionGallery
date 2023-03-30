import React, { useState } from 'react';
import axios from 'axios';
import {Container,Wrapper,Title,FORM,Input,Button,Link,Image} from "../styles/VerifyEmail-Styles";
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Login from './Login.jsx';

function VerifyEmail() {
    const [token, setToken] = useState('');
    const [message, setMessage] = useState('');
  
    function handleSubmit(event) {
      event.preventDefault();
      axios.post('http://localhost:8080/api/v1/auth/confirm?token=' + token)
        .then(response => {
          if(token.trim()===''){
            setMessage("Enter valid token");
          }
          else if (response.status === 200) {
            window.location.href = "http://localhost:3000/pages/login";
          } else {
            setMessage(response.data.message);
          }
        })
        .catch(error => {
          setMessage(error.response.data);
        });
    }
  
    return (

        <Container>
        <Wrapper>
        ACTIVATE ACCOUNT:
            <FORM onSubmit={handleSubmit}>
                <Input type="text" value={token} onChange={event => setToken(event.target.value)} />
                <Button type="submit">Verify email</Button>
                {message && <p>{message}</p>}
            </FORM>
        </Wrapper>
        </Container>
      
    );
  }
  
  export default VerifyEmail;