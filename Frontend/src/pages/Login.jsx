import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import companyLogo from "../images/logo.png";
import {Container,Wrapper,Title,FORM,Input,Button,NavLink,Image} from "../styles/Login-Styles.jsx";
import '../styles/Errors.css';

function Login(){

  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fieldError,setFieldError] = useState("")
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    if(email===""){
      setFieldError("Enter the Email");
    }
    else if(password===""){
      setFieldError("Enter the Password");
    }
    else{
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
        if(response.data.code==="01"){
          setFieldError(response.data.message);
        }
        else if(response.data.code==="06"){
          setFieldError(response.data.message);
        }
        else{
          localStorage.setItem('token', response.data.token);

          const decodedToken = jwt_decode(response.data.token);
          const userData = {
            id: decodedToken.sub,
          };
          setUser(userData);
          localStorage.setItem('email',user.id);
          localStorage.setItem('fname',response.data.fname);
          localStorage.setItem('id',response.data.id);
          navigate('/');
        }
      }catch(error){
        console.error(error);
      }
    }
    
  }

  axios.interceptors.request.use(
    config => {
      const jwtToken = localStorage.getItem('token');
      if (jwtToken) {
        config.headers.Authorization = "Bearer" + jwtToken;
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
        {fieldError && <div className="error">{fieldError}</div>}
        <FORM onSubmit={handleSubmit}>
          <Input type="text" 
          value={email} 
          onChange={e =>{ setUsername(e.target.value);
            setFieldError("");}} 
          placeholder='username'/>
          <Input type="password" 
          value={password} 
          onChange={e => {setPassword(e.target.value);
            setFieldError("");}} 
          placeholder='password'/>
            
          <Button type='submit'>LOGIN</Button>
          <NavLink>DO NOT REMEMBER THE PASSWORD?</NavLink>
          <NavLink to="Register">CREATE A NEW ACCOUNT</NavLink>
        </FORM>
          
      </Wrapper>
    </Container>
  );
}

export default Login;


