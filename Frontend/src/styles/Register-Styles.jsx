import styled from "styled-components";
import backgroundImage from "../images/bi-register.jpg";

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

    `;

export const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    position: relative;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
    margin-top: 10px;
`;

export const FORM = styled.form`
    display: flex;
    flex-wrap: wrap;

`;

export const Input = styled.input`
    flex: 1;
    min-width: 40%;
    max-width: fit-content;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

export const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;

`;
export const Buttons = styled.div`
  width:100%;
  display:block;
`
export const Button1 = styled.button`

    width: 27%;
    border: none;
    font-size: 14px;
    padding: 15px 10px;
    color: white;
    background-color: teal;
    border-radius: 20px;
    float: left;
    cursor: pointer;
    &:hover {
        color: white;
        background-color: rgb(4, 81, 81);
        
      }
`;
export const Button2 = styled.button`
    width: 27%;
    border: none;
    font-size: 14px;
    padding: 15px 10px;
    color: white;
    background-color: teal;
    border-radius: 20px;
    float: right;
    cursor: pointer;
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