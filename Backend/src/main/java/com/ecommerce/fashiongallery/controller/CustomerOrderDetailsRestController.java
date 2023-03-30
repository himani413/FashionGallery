package com.ecommerce.fashiongallery.controller;

import com.ecommerce.fashiongallery.dto.CustomerOrdersDTO;
import com.ecommerce.fashiongallery.service.CustomerOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/customer")
public class CustomerOrderDetailsRestController {

    @Autowired
    private CustomerOrderService customerOrderService;

    public CustomerOrderDetailsRestController(CustomerOrderService customerOrderService) {
        this.customerOrderService = customerOrderService;
    }

    @PutMapping("/customer-order")
    public void addCustomerOrder(@RequestBody CustomerOrdersDTO customerOrdersDTO){
        customerOrderService.addCustomerOrder(customerOrdersDTO);
    }



}
