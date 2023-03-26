package com.ecommerce.fashiongallery.controller;

import com.ecommerce.fashiongallery.model.DeliveryAddressBody;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class PaymentRestController {


    @PostMapping("/payment")
    public ResponseEntity addNewAddress(@RequestBody DeliveryAddressBody deliveryAddressBody){




    }


}
