import styled from "styled-components";
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
    border-radius: 10px;
    transition: all 0.5s ease;
    &:hover {
        color: teal;
        transform: scale(1.2);   
      }
`;


const CategoryItem = ({ item }) => {
  //console.log(item.img);
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Link to={`../pages/ProductList?categoryId=${item.id}`} ><Button>SHOP NOW</Button></Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;