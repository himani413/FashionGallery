import React, { useEffect } from 'react'
import styled from 'styled-components'
import "../styles/OrderDetails.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import axios from 'axios';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';

const Container = styled.div``;
const Title = styled.h1`
    margin: 30px;
    text-align: center;
`
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
    margin: 20px 30px 20px 30px;
    &:hover {
        color: white;
        background-color: rgb(4, 81, 81);
        border-color:rgb(4, 81, 81);
    }
`;
const OrderDetails = () => {

    const [orders, setOrders] = React.useState([]);
    
    useEffect(()=>{
        const email=localStorage.getItem('email');
        axios.post('http://localhost:8080/api/v1/customer/customer-order-list?username='+email)
        .then(response=>{
            setOrders(response.data.customerOrders);
        })
        .catch(error=>{
            console.log(error);
        })
    },[]);

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
            {orders.map((order) => (
              <tr key={order.orderID}>
                <td>{order.orderID}</td>
                <td>{order.customerID}</td>
                <td>{order.firstName}</td>
                <td>{order.lastName}</td>
                <td>{order.mobileNumber}</td>
                <td>{order.addressLine1}</td>
                <td>{order.addressLine2}</td>
                <td>{order.city}</td>
                <td>{order.province}</td>
                <td>{order.zipcode}</td>
                <td>{order.orderAmount}</td>
                <td>{order.orderDate}</td>  
            </tr>  
                ))}
            
            </tbody>
        </table>
        <Link to="/" style={{ textDecoration: 'none' }}><Button style={{margin: '30px auto', display:'block'}}>Back To Home</Button></Link>
    </div>
    <Newsletter/>
    <Footer/>
    <Copyright/>
    </Container>
  )
}
export default OrderDetails;
