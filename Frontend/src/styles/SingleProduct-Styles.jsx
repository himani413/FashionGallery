import styled from "styled-components"

export const Container = styled.div``;

export const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;

export const ImgContainer = styled.div`
    flex: 1;
`;

export const Image = styled.img`
    width: 60%;
    height: auto;
    object-fit: cover;
    
`;

export const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    
`;

export const Title = styled.h1`
    font-weight: 500;
`;

export const Desc = styled.p`
    margin: 20px 0px;

`;

export const Price = styled.span`
    font-size: 30px;
    font-weight: 500;
`;

export const FilterContainer = styled.div`
    display: flex;
    margin: 30px 0px;
`;

export const Filter = styled.div`
    display: flex;
    align-items: center;

`;

export const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
    padding: 5px;
`;

export const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
    cursor: pointer;
`;

export const FilterSizeOption = styled.option`
`;

export const AddContainer = styled.div`
    width: 80%;
    display: block;
    align-items: center;
    justify-content: space-between;
`;

export const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 500;
`;
export const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 2px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;

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
    margin: 30px 30px 20px 0px;
    &:hover {
        color: white;
        background-color: rgb(4, 81, 81);
        border-color:rgb(4, 81, 81);
      }
`;

export const Message = styled.p`
    color: red;
    font-size: 16px;
    margin: 20px 10px;
`;