package com.ecommerce.fashiongallery.controller;

import com.ecommerce.fashiongallery.dto.DeliveryAddressDTO;
import com.ecommerce.fashiongallery.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/customer")
public class PaymentRestController {

    @GetMapping("/test")
    public String test(){
        return "Hello World";
    }

    @Autowired
    private AddressService addressService;

    public PaymentRestController(AddressService addressService) {
        this.addressService = addressService;
    }

    @PutMapping("/address")
    public String addNewAddress(@RequestBody DeliveryAddressDTO deliveryAddressDTO){

        String msg = addressService.addAddress(deliveryAddressDTO);
        return msg;
    }


}
