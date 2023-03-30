import styled from "styled-components"
import backgroundImageLogin from "../images/bi-login.jpg"
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100w;
    height: 100vh;
    background-image: 
        linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)),
        url(${backgroundImageLogin}) ;
    background-repeat: round;
    
    display: flex;
    align-items: center;
    justify-content: center;

    `;

export const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
`;

export const FORM = styled.form`
    display: flex;
    flex-direction: column;

`;

export const Input = styled.input`
    flex: 1;
    min-width: 25%;
    margin: 10px 0px;
    padding: 10px;
`;

export const Button = styled.button`
    width: 30%;
    border: none;
    font-size: 14px;
    padding: 10px 20px;
    color: white;
    background-color: teal;
    border-radius: 20px;
    cursor: pointer;
    margin: 12px 0px;
    &:hover {
        color: white;
        background-color: rgb(4, 81, 81);
        
      }
`;


export const Image = styled.img`

    width: 250px;
    height: 85px;
    text-align: center;
    display: block;
    justify-content: center;
    align-items: center;
    margin: auto;
`;

export const NavLink = styled(Link)`
  margin: 5px 0px 2px 0px;
      font-size: 12px;
      color: black;
      text-decoration: none;
      cursor: pointer;
      &:hover,
        &:focus {
        color: palevioletred;
        }
        &:active {
        color: red;
        }
`;