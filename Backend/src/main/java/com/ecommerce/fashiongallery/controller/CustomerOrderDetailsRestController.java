package com.ecommerce.fashiongallery.controller;

import com.ecommerce.fashiongallery.dto.CustomerOrdersDTO;
import com.ecommerce.fashiongallery.dto.ResponseOrderDTO;
import com.ecommerce.fashiongallery.dto.UserOrdersDTO;
import com.ecommerce.fashiongallery.service.CustomerOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<ResponseOrderDTO> findCustomerOrdersByID(@RequestBody UserOrdersDTO userOrdersDTO){

        return ResponseEntity.ok().body(
                //need to typecast to Long because the request body is an Integer
                customerOrderService.findCustomerOrdersByID(userOrdersDTO.getCustomerID())
        );
    }



}
