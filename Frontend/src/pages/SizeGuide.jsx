import React from "react";
import sizeguideimg1 from "../images/sizeguide.jpg"
import sizeguideimg2 from "../images/sizeguide2.jpg"
import {Container,Wrapper,Image} from "../styles/SizeGuide-Styles";

const SizeGuide = () => {
  return (
    <Container>
        <Wrapper>
        <Image src={sizeguideimg1}/>
        <Image src={sizeguideimg2}/>
        </Wrapper>
    </Container>
  )
}

export default SizeGuide