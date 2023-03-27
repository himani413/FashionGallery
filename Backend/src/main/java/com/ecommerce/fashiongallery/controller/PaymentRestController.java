package com.ecommerce.fashiongallery.controller;

import com.ecommerce.fashiongallery.dto.DeliveryDetailsDTO;
import com.ecommerce.fashiongallery.service.DeliveryService;
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
    private DeliveryService deliveryService;

    public PaymentRestController(DeliveryService deliveryService) {
        this.deliveryService = deliveryService;
    }

    @PutMapping("/delivery")
    public String addNewDelivery(@RequestBody DeliveryDetailsDTO deliveryDetailsDTO){

        String msg = deliveryService.addDelivery(deliveryDetailsDTO);
        return msg;
    }




}
