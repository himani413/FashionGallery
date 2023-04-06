import React from 'react'
import styled from 'styled-components'
import "../styles/OrderDetails.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';

const Container = styled.div``;
const Title = styled.h1`
    margin: 30px;
    text-align: center;
`

const OrderDetails = () => {
  return (
    <Container>
    <Navbar/>
    <Announcement/>
    <Title>Your Order History</Title>
    <div className='table-container'>
        <table>
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Customer ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Mobile Number</th>
                    <th>Addressline 1</th>
                    <th>Addressline 2</th>
                    <th>City</th>
                    <th>Province</th>
                    <th>Zip Code</th>
                    <th>Order Amount</th>
                    <th>Order Date</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>124</td>
                <td>2</td>
                <td>Jenny</td>
                <td>Perera</td>
                <td>0774307771</td>
                <td>71/2B, 2nd lane</td>
                <td>Meda Welikada road</td>
                <td>Rajagiriya</td>
                <td>Western</td>
                <td>10100</td>
                <td>Rs. 4500.00</td>
                <td>12-03-2023</td>  
            </tr>
            </tbody>
        </table>
    </div>
    <Newsletter/>
    <Footer/>
    <Copyright/>
    </Container>
  )
}
export default OrderDetails;
