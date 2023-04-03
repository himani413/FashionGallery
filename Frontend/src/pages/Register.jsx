import React, { useState,useEffect } from 'react';
import axios from 'axios';
import companyLogo from "../images/logo.png";
import { Container, Wrapper, Title, FORM, Input, Agreement,Buttons, Button1,Button2, Image } from "../styles/Register-Styles.jsx";
import { colors } from '@material-ui/core';
import {BrowserRouter as Router,Route,Link } from "react-router-dom";

function Register() {


  // const [fname, setFirstname] = useState('');
  // const [lname, setLastname] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confPass, setConfPassword] = useState('');
  // const [fieldError,setFieldError] = useState("")
  // const [response, setResponse] = useState("")

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (fname==="") {
  //     setFieldError("Firstname is Required");
  //   }
  //   else if (lname==="") {
  //     setFieldError("Lastname is Required");
  //   }
  //   else if (email==="") {
  //     setFieldError("Email is Required");
  //   }
  //   else if (password==="") {
  //     setFieldError("Password is Required");
  //   }
  //   else if (password!==confPass) {
  //     setFieldError("Re-Enter Password");
  //   }
  //   else{
  //     try {
  //       const response = await axios.post('http://localhost:8080/api/v1/auth/signup', JSON.stringify({
  //         fname,
  //         lname,
  //         email,
  //         password,
  //         confPass
  //       }), {
  //         headers: {
  //           'Content-Type': 'application/json'
  //         }
  //       }
  //       );
  //       if (response.status === 200) {
  //           setResponse(response.data.message);
  //       }
  //       else if(response.status===400){
  //         setResponse(response.data.message);
  //       }
        
  //     } catch (error) {
  //         setResponse("Registration Failed!")
  //     }
  //   }
  // };

  const initialValues = {fname:"",lname:"",email:"",password:"",confPass:""};
  const [formValues,setFormValues] = useState(initialValues);
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit,setIsSubmit] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target);
    const {name,value} = e.target;
    setFormValues({...formValues,[name]:value})
    // console.log(formValues)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };


  useEffect(() =>{
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);
    }
  },[formErrors])

  const validate = (values) =>{
    const errors = {}
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (!values.fname){
      errors.fname = "First Name is requried !";
    }
    if (!values.lname){
      errors.lname = "Last Name is requried !";
    }
    if (!values.email){
      errors.email = "Email is requried !";
    } else if (!regexEmail.test(values.email)){
      errors.email = "This is not a valid email format!"
    }

    if (!values.password){
      errors.password = "Password is requried !";
    }else if (!regexPassword.test(values.password)){
      errors.password = "Enter a valid password (Minimum eight characters, at least one letter, one number and one special character)"
    }

    if (!values.confPass){
      errors.confPass = "Confirm Password is requried !";
    } else if(values.confPass != values.password){
        errors.confPass = "Passoword and Confirm Password should match !"
    }

    return errors;
  }

  return (
    <Container>
      <Wrapper>
        <Image src={companyLogo} />
        <Title>CREATE AN ACCOUNT</Title>

        {/* {response && <div className="response">{response}</div>}
        {fieldError && <div className="error">{fieldError}</div>} */}

        {/* <pre>{JSON.stringify(formValues,undefined,2)}</pre> */}
        <FORM /*onSubmit={handleSubmit}*/ onSubmit={handleSubmit}>
          
          <p>{formErrors.fname}</p>
          <Input type="text"
            id="fname"
            name="fname"
            value={formValues.fname}
            // onChange={(e) =>{
            //   setFirstname(e.target.value);
            //   setFieldError("");}}
            onChange={handleChange}
            placeholder='firstname' />

          <p>{formErrors.lname}</p>
          <Input type="text"
            id="lname"
            name="lname"
            value={formValues.lname}
            // onChange={(e) => {setLastname(e.target.value);
            //   setFieldError("");}}
            onChange={handleChange}
            placeholder='last name' />

          <p>{formErrors.email}</p>  
          <Input type="email"
            id="email"
            name="email"
            value={formValues.email}
            // onChange={(e) => {setEmail(e.target.value);
            //   setFieldError("");}}
            onChange={handleChange}
            placeholder='email' />

          <p>{formErrors.password}</p>
          <Input type="password"
            id="password"
            name="password"
            value={formValues.password}
            // onChange={(e) =>{ setPassword(e.target.value);
            //   setFieldError("");}}
            onChange={handleChange}
            placeholder='password' />

          <p>{formErrors.confPass}</p>
          <Input type="password"
            id="confPass"
            name="confPass"
            value={formValues.confPass}
            // onChange={(e) =>{
            //    setConfPassword(e.target.value);
            //    setFieldError("");}}
            onChange={handleChange}
            placeholder='confirm password' />
          <Agreement>
            By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>.
          </Agreement>
          <Buttons>
          <Button1 type="submit">CREATE</Button1>
          <Link to="verifyemail"><Button2>ACTIVATE ACCOUNT</Button2></Link>
          </Buttons>
          
        </FORM>
        
      </Wrapper>
    </Container>
  );
}

export default Register;
