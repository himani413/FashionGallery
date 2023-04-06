import styled from 'styled-components'

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  font-weight: 300;
  text-align: left;
  padding-top: 20px;
`;


export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Info = styled.div`
  flex: 3;
`;

export const FORM = styled.form`
    display: flex;
    flex-wrap: wrap;

`;

export const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 30px 30px 0px 0px;
    padding: 10px;
    max-width: fit-content;
`;


export const Agreement = styled.span`
    font-size: 14px;
    margin: 20px 0px;
    

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
  padding: 10px;
  background-color: black;
  color: white;
  border-radius: 15px;
  font-weight: 600;
  font-size: 16px;
  display: block;
  margin: 0 auto;
  &:hover{
        background-color: white;
        color: black;
  }
`;
export const Hr = styled.hr`
  background-color: lightgray;
  border: none;
  height: 1px;
  margin-top: 20px;
`;