package com.ecommerce.fashiongallery.service;

import com.ecommerce.fashiongallery.dto.DeliveryDetailsDTO;
import com.ecommerce.fashiongallery.dto.ResponseDTO;

public interface DeliveryService {
    ResponseDTO addDelivery(DeliveryDetailsDTO deliveryDetailsDTO,String username);

}
