package com.ecommerce.fashiongallery.controller;

import com.ecommerce.fashiongallery.dto.ResponseOrderDTO;
import com.ecommerce.fashiongallery.service.CustomerOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/customer")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerOrderDetailsRestController {

    @Autowired
    private CustomerOrderService customerOrderService;

    public CustomerOrderDetailsRestController(CustomerOrderService customerOrderService) {
        this.customerOrderService = customerOrderService;
    }

    @PostMapping("/customer-order-list") //get customer's orders list
    public ResponseEntity<ResponseOrderDTO> findCustomerOrdersByID(@RequestParam String username){

        return ResponseEntity.ok().body(

                customerOrderService.findCustomerOrdersByID(username)
        );
    }



}
