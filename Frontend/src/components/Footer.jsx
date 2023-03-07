
import { Facebook, Instagram, Mail, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import companyLogo from "../images/logo.png";
import paymentlogos from "../images/payments.png"

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display:  flex;
    flex-direction: column;
    padding: 20px;
`
const Image = styled.img`
    width: 50%;
    height: auto;
 
`;

const Desc = styled.p`
margin: 20px 0px;

`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.h1`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    margin-left: 30px;
`;

const Title = styled.h3`
    margin-top: 20px;
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 20px;
`;
const Link = styled.a`
    cursor: pointer;
    &:hover{
        color: teal;
  }
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    margin-left: 30px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;


export const Footer = () => {
  return (
    <Container>
        <Left>
            <Image src={companyLogo}/>
            <Desc>Premium Clothing Brand. Get dressed for yourself, we are inspiring women worldwide to be unique, be brave and be divine.</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem><Link>Home</Link></ListItem>
                <ListItem><Link>Cart</Link></ListItem>
                <ListItem><Link>My Account</Link></ListItem>
                <ListItem><Link>Size Guide</Link></ListItem>
                <ListItem><Link>Order Tacking</Link></ListItem>
                <ListItem><Link>Terms and Conditions</Link></ListItem>
            </List>
        </Center>
        <Right>
            <Title>Get In Touch</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/>No.72, Flower Road, Colombo 03.
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/>+94 112 413 333
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/>contact@fashiongallery.dev
            </ContactItem>
            <Payment src={paymentlogos}/>
        </Right>
    </Container>
    
  )
}

export default Footer
