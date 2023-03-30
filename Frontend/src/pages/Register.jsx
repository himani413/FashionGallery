import React, { useState } from 'react';
import axios from 'axios';
import companyLogo from "../images/logo.png";
import { Container, Wrapper, Title, FORM, Input, Agreement,Buttons, Button1,Button2, Image } from "../styles/Register-Styles.jsx";
import { colors } from '@material-ui/core';
import {BrowserRouter as Router,Route,Link } from "react-router-dom";

function Register() {
  const [fname, setFirstname] = useState('');
  const [lname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPass, setConfPassword] = useState('');
  const [fieldError,setFieldError] = useState("")
  const [response, setResponse] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fname==="") {
      setFieldError("Firstname is Required");
    }
    else if (lname==="") {
      setFieldError("Lastname is Required");
    }
    else if (email==="") {
      setFieldError("Email is Required");
    }
    else if (password==="") {
      setFieldError("Password is Required");
    }
    else if (password!==confPass) {
      setFieldError("Re-Enter Password");
    }
    else{
      try {
        const response = await axios.post('http://localhost:8080/api/v1/auth/signup', JSON.stringify({
          fname,
          lname,
          email,
          password,
          confPass
        }), {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        );
        if (response.status === 200) {
            setResponse(response.data.message);
        }
        else if(response.status===400){
          setResponse(response.data.message);
        }
        
      } catch (error) {
          setResponse("Registration Failed!")
      }
    }
  };

  return (
    <Container>
      <Wrapper>
        <Image src={companyLogo} />
        <Title>CREATE AN ACCOUNT</Title>
        {response && <div className="response">{response}</div>}
        {fieldError && <div className="error">{fieldError}</div>}
        <FORM onSubmit={handleSubmit}>
          <Input type="text"
            id="fname"
            value={fname}
            onChange={(e) =>{
              setFirstname(e.target.value);
              setFieldError("");}}
            placeholder='firstname' />
          <Input type="text"
            id="lname"
            value={lname}
            onChange={(e) => {setLastname(e.target.value);
              setFieldError("");}}
            placeholder='last name' />
          <Input type="text"
            id="email"
            value={email}
            onChange={(e) => {setEmail(e.target.value);
              setFieldError("");}}
            placeholder='email' />
          <Input type="password"
            id="password"
            value={password}
            onChange={(e) =>{ setPassword(e.target.value);
              setFieldError("");}}
            placeholder='password' />
          <Input type="password"
            id="confPass"
            value={confPass}
            onChange={(e) =>{
               setConfPassword(e.target.value);
               setFieldError("");}}
            placeholder='confirm password' />
          <Agreement>
            By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>.
          </Agreement>
          
        </FORM>
        <Buttons>
        <Button1 type="submit">CREATE</Button1>
        <Link to="VerifyEmail"><Button2>ACTIVATE ACCOUNT</Button2></Link>
        </Buttons>
      </Wrapper>
    </Container>
  );
}

export default Register;
