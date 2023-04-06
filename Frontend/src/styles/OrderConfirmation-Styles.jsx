import styled from "styled-components"
import backgroundImageLogin from "../images/bi-orderconfirmation.png"

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
    text-align: center;
    padding-bottom: 20px;
`;



export const Button = styled.button`

    padding: 15px;
    border: 2px solid teal;
    color: white;
    background-color: teal;
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    border-radius: 20px;
    min-width: 120px;
    margin: 30px 30px 20px 13px;
    &:hover {
        color: white;
        background-color: rgb(4, 81, 81);
        border-color:rgb(4, 81, 81);
    }
`;

export const Info = styled.div`
      margin: 20px 0px 10px 0px;
      font-size: 12px;
      padding-top: 10px;
      text-align: justify;
    
`;

export const Image = styled.img`

    width: 200px;
    height: auto;
    text-align: center;
    display: block;
    justify-content: center;
    align-items: center;
    margin: auto;
`;