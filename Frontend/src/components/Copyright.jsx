import styled from "styled-components"

const Container = styled.div`
    sdisplay: block;
`;

const CopyRightMessage = styled.p`
    font-size: 14px;
    text-align: center;
    margin: 10px 0;
`;

export const Copyright = () => {
  return (
    <Container>
        
           <CopyRightMessage>Copyright @ 2022 Fasion Gallery, SriLanka | All Rights Reserved. 2022</CopyRightMessage> 
       
    </Container>
  )
}

export default Copyright
