package com.ecommerce.fashiongallery.service.impl;

import com.ecommerce.fashiongallery.dto.DeliveryDetailsDTO;
import com.ecommerce.fashiongallery.dto.ResponseDTO;
import com.ecommerce.fashiongallery.entity.Delivery;
import com.ecommerce.fashiongallery.repository.DeliveryRepository;
import com.ecommerce.fashiongallery.service.CustomerOrderService;
import com.ecommerce.fashiongallery.service.DeliveryService;
import com.ecommerce.fashiongallery.service.UserService;
import com.ecommerce.fashiongallery.util.StringList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class DeliveryServiceIMPL implements DeliveryService {

    @Autowired
    private DeliveryRepository deliveryRepository;

    @Autowired
    private UserService userService;
    @Autowired
    private CustomerOrderService customerOrderService;

    @Override
    public ResponseDTO addDelivery(DeliveryDetailsDTO deliveryDetailsDTO,String username) {

        var user=userService.getUser(username);

        Delivery delivery = new Delivery(
                deliveryDetailsDTO.getFirstName(),
                deliveryDetailsDTO.getLastName(),
                deliveryDetailsDTO.getMobileNumber(),
                deliveryDetailsDTO.getAddressLine1(),
                deliveryDetailsDTO.getAddressLine2(),
                deliveryDetailsDTO.getCity(),
                deliveryDetailsDTO.getProvince(),
                deliveryDetailsDTO.getZipcode(),
                deliveryDetailsDTO.getAmount(),
                user.get().getId(),
                LocalDate.now().toString() //for get the current date and store in the delivery table
        );
        deliveryRepository.save(delivery);

        return ResponseDTO.builder()
                .code(StringList.RSP_SUCCESS)
                .message("Delivery Details Added Successfully")
                .id(delivery.getId())
                .build();
    }
}
