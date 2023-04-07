package com.ecommerce.fashiongallery.service;

import com.ecommerce.fashiongallery.dto.ResponseOrderDTO;

public interface CustomerOrderService {

    ResponseOrderDTO findCustomerOrdersByID(String username);



}
