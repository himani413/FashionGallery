package com.ecommerce.fashiongallery.controller;

import com.ecommerce.fashiongallery.dto.DeliveryDetailsDTO;
import com.ecommerce.fashiongallery.dto.ResponseDTO;
import com.ecommerce.fashiongallery.service.DeliveryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/customer")
@CrossOrigin(origins = "http://localhost:3000")
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

    @PostMapping("/delivery")
    public ResponseEntity<ResponseDTO> addNewDelivery(@RequestBody DeliveryDetailsDTO deliveryDetailsDTO,
                                                      @RequestParam("username") String username){

        return ResponseEntity.ok().body(
                deliveryService.addDelivery(deliveryDetailsDTO,"dinukaekanayaka18@gmail.com")
        );
    }




}
