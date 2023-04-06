import React from 'react';
import styled from "styled-components";
import { keyframes } from 'styled-components';

const move = keyframes`
  from {
    transform: translateX(-30%);
  }
  to {
    transform: translateX(30%);
  }
`;

const Title = styled.h1`
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    animation: ${move} 7s linear infinite;
    font-style: oblique;
`;

const Container = styled.div`
   
`;

const NewArrivals =() =>{
  return (
    <Container>

        <Title>__________ NEW ARRIVALS __________</Title>
        
    </Container>
  )
}
export default NewArrivals
