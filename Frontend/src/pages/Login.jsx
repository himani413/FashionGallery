import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import companyLogo from "../images/logo.png";
import {Container,Wrapper,Title,FORM,Input,Button,NavLink,Image} from "../styles/Login-Styles.jsx";

function Login(){

  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try{
      const response= await axios.post('http://localhost:8080/api/v1/auth/login',JSON.stringify ( {
        email,
        password
      }),{
        headers: {
          'Content-Type': 'application/json'
        }
      }
      );
      
      localStorage.setItem('jwtToken', response.data.jwtToken);
      // Redirect the user to the homepage or another protected page
      console.log(response.data.fname);
      navigate('/', { state: { name:response.data.fname }});

    }catch(error){
      console.error(error);
    }
  }

  axios.interceptors.request.use(
    config => {
      const jwtToken = localStorage.getItem('jwtToken');
      if (jwtToken) {
        config.headers.Authorization = `Bearer ${jwtToken}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  return (
    <Container>
      <Wrapper>
        <Image src={companyLogo}/><Title>SIGN IN</Title>
        
        <FORM onSubmit={handleSubmit}>
          <Input type="text" 
          value={email} 
          onChange={e => setUsername(e.target.value)} 
          placeholder='username'/>
          <Input type="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          placeholder='password'/>
            
          <Button type='submit'>LOGIN</Button>
          <NavLink>DO NOT REMEMBER THE PASSWORD?</NavLink>
          <NavLink>CREATE A NEW ACCOUNT</NavLink>
        </FORM>
          
      </Wrapper>
    </Container>
  );
}

export default Login;


