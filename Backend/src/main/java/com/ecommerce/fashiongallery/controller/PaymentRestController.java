package com.ecommerce.fashiongallery.controller;

import com.ecommerce.fashiongallery.dto.DeliveryDetailsDTO;
import com.ecommerce.fashiongallery.dto.ResponseDTO;
import com.ecommerce.fashiongallery.service.DeliveryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<ResponseDTO> addNewDelivery(@RequestBody DeliveryDetailsDTO deliveryDetailsDTO){

        return ResponseEntity.ok().body(
                deliveryService.addDelivery(deliveryDetailsDTO)
        );
    }




}
