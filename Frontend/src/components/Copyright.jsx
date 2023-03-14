import styled from "styled-components"

const Container = styled.div`
    display: block;
`;

const CopyRightMessage = styled.p`
    font-size: 14px;
    text-align: center;
    margin: 10px 0;
    color: #5e5c5c;
`;

export const Copyright = () => {
  return (
    <Container>
        
           <CopyRightMessage>Copyright @ 2023 Fasion Gallery, SriLanka | All Rights Reserved. 2023</CopyRightMessage> 
       
    </Container>
  )
}

export default Copyright
