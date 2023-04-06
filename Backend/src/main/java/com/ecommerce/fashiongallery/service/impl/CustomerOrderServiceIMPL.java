package com.ecommerce.fashiongallery.service.impl;

import com.ecommerce.fashiongallery.dto.ResponseOrderDTO;
import com.ecommerce.fashiongallery.repository.DeliveryRepository;
import com.ecommerce.fashiongallery.service.CustomerOrderService;
import com.ecommerce.fashiongallery.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerOrderServiceIMPL implements CustomerOrderService {

    @Autowired
    private DeliveryRepository deliveryRepository;

    @Autowired
    private UserService userService;



    @Override
    public ResponseOrderDTO findCustomerOrdersByID(String username) {

        var user=userService.getUser(username);
        return ResponseOrderDTO.builder()
                .customerOrders(deliveryRepository.findCustomerOrdersByID(user.get().getId()))
                .build();

    }
}
