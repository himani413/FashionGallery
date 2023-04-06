import styled from "styled-components";
import backgroundImageSizeGuide from "../images/bi-sizeguide.png";

export const Container = styled.div`
    width: 100w;
    height: 100vh;
    background-image: 
        linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2)),
        url(${backgroundImageSizeGuide});
    background-repeat: round;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align:center;
    `;

export const Wrapper = styled.div`
    width: 50%;
    padding: 10px;
    background-color: transparent;
    border-radius: 10px;
`;

export const Image = styled.img`

    width: 70%;
    height: auto;
    text-align: center;
    display: block;
    justify-content: center;
    align-items: center;
    margin: auto;
`;

