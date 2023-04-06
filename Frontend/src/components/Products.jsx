import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { keyframes } from 'styled-components';

const move = keyframes`
  from {
    transform: translateX(-30%);
  }
  to {
    transform: translateX(30%);
  }
`;
const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Title = styled.h1`
    margin: 30px;
    text-align: center;
    animation: ${move} 7s linear infinite;
    font-style: oblique;
`;

const Products = ({ items }) => {
  return (
    <Container>
      <Title>_________ NEW ARRIVALS __________</Title>
      <Wrapper>
      {items.map((item) => (
        <Product item={item} key={item.id} />
      ))}
      </Wrapper>
    </Container>
  );
};

export default Products;