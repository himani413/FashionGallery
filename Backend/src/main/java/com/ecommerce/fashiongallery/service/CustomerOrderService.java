package com.ecommerce.fashiongallery.service;

import com.ecommerce.fashiongallery.dto.CustomerOrdersDTO;
import com.ecommerce.fashiongallery.dto.ResponseOrderDTO;

public interface CustomerOrderService {

    void addCustomerOrder(CustomerOrdersDTO customerOrdersDTO);
    public ResponseOrderDTO findCustomerOrdersByID(long customerID);



}
