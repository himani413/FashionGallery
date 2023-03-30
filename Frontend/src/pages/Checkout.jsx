import CartImage from '../images/white-maxi.jpg'
import CartImage2 from '../images/white-jumpsuit.jpeg'
import {Container,Wrapper,Title,Bottom,Info,FORM,Input,Agreement,Summary,SummaryTitle,
        SummaryItem,SummaryItemText,SummaryItemPrice,Button,Hr} from '../styles/Checkout-Styles.jsx'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Copyright from '../components/Copyright'
import { Checkbox } from '@material-ui/core'

const Checkout = () => {
    return (
      <Container>
          <Navbar/>
          <Announcement/>
          <Wrapper>
            <Title>Shipping Information</Title>
            
            <Bottom>
              <Info>
               
              <FORM>
                <Input placeholder='First Name' required/>
                <Input placeholder='Last Name'required/>
                <Input placeholder='Mobile Number' required/>
                <Input placeholder='Email' required/>
                <Input placeholder='Addressline 1' required/>
                <Input placeholder='Adressline 2' required/>
                <Input placeholder='City' required/>
                <Input placeholder='Province' required/>
                <Input placeholder='Zip Code' required/>   
            </FORM>
                 
              </Info>
              
              <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>Subtotal</SummaryItemText>
                  <SummaryItemPrice>Rs. 8289</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Estimated Shipping</SummaryItemText>
                  <SummaryItemPrice>Rs. 350</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Shipping Discount</SummaryItemText>
                  <SummaryItemPrice>Rs. -220</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                  <SummaryItemText >Total</SummaryItemText>
                  <SummaryItemPrice>Rs. 8419</SummaryItemPrice>
                </SummaryItem>
                <Button>Place Order</Button>
              </Summary>
            </Bottom>
            <Agreement>
                   <Checkbox/>I have read and agree to the website <b>TERMS AND CONDITIONS</b>.
                </Agreement>
            <Hr/>
          </Wrapper>
          <Footer/>
          <Copyright/>
      </Container>
    )
  }
  
  export default Checkout
