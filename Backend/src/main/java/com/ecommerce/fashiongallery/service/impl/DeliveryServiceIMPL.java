package com.ecommerce.fashiongallery.service.impl;

import com.ecommerce.fashiongallery.dto.DeliveryDetailsDTO;
import com.ecommerce.fashiongallery.entity.Delivery;
import com.ecommerce.fashiongallery.repository.DeliveryRepository;
import com.ecommerce.fashiongallery.service.DeliveryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DeliveryServiceIMPL implements DeliveryService {

    @Autowired
    private DeliveryRepository deliveryRepository;
    @Override
    public String addDelivery(DeliveryDetailsDTO deliveryDetailsDTO) {

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
                deliveryDetailsDTO.getCustomerID()
        );
        deliveryRepository.save(delivery);
        return "Delivery details saved successfully. You need to pay cash on delivery";
    }
}
