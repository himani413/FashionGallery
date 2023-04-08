import styled from 'styled-components'

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 15px;;
  border: ${(props) =>props.type === "filled" && "none"};
  background-color: ${(props)=>
    props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};

    &:hover{
        background-color: ${(props) =>props.type === "filled" ? "teal" : "black"};
        color: ${(props) =>props.type === "filled" ? "white" : "white"};
  }
`;

export const TopTexts = styled.div``;

export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Info = styled.div`
  flex: 3;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

export const Image = styled.img`
  width: 25%;
  height: auto;
`;

export const Details = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProductName = styled.span``;

export const ProductId = styled.span``;

export const ProductSize = styled.span``;

export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid teal;
    text-align: center;
    justify-content: center;
`;

export const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`;

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

export const SummaryTitle = styled.h1`
  font-weight: 200;
  text-align: center;
`;

export const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) =>props.type === "total" ? "500" : "normal"};
  font-size: ${(props) =>props.type === "total" ? "24px" : "16px"};
`;


export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span``;

export const Button = styled.button`
  width: 60%;
  max-width:150px;
  padding: 10px;
  background-color: black;
  color: white;
  border-radius: 15px;
  font-weight: 600;
  display: block;
  margin: 0 auto;
  &:hover{
        background-color: white;
        color: black;
  }
`;