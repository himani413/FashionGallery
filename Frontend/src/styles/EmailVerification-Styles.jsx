import styled from "styled-components";
import backgroundImage from "../images/bi-EmailVerification.jpg";

export const Container = styled.div`
    width: 100w;
    height: 100vh;
    background-image: 
        linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2)),
        url(${backgroundImage});
    background-repeat: round;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align:center;
    `;

export const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
    margin-top: 10px;
`;

export const FORM = styled.form`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;


export const Label = styled.label`
    padding: 15px 10px;
`;

export const Button = styled.button`
    width: 30%;
    border: none;
    font-size: 14px;
    padding: 15px 10px;
    color: white;
    background-color: teal;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
        color: white;
        background-color: rgb(4, 81, 81);
        
      }
`;

export const Input = styled.input`
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
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

