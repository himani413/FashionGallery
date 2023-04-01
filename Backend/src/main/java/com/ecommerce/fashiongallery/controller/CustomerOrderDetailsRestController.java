package com.ecommerce.fashiongallery.controller;

import com.ecommerce.fashiongallery.dto.CustomerOrdersDTO;
import com.ecommerce.fashiongallery.service.CustomerOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/customer")
public class CustomerOrderDetailsRestController {

    @Autowired
    private CustomerOrderService customerOrderService;

    public CustomerOrderDetailsRestController(CustomerOrderService customerOrderService) {
        this.customerOrderService = customerOrderService;
    }

    @PutMapping("/customer-order")  //add order id's to relevant customer id. No need of a frontend for this.
    public void addCustomerOrder(@RequestBody CustomerOrdersDTO customerOrdersDTO){
        customerOrderService.addCustomerOrder(customerOrdersDTO);
    }

    @PostMapping("/customer-order-list") //get customer's orders list
    public void findCustomerOrdersByID(@RequestBody Long customerID){
        customerOrderService.findCustomerOrdersByID(customerID);
    }



}
