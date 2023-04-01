package com.ecommerce.fashiongallery.service;

import com.ecommerce.fashiongallery.dto.CustomerOrdersDTO;
import com.ecommerce.fashiongallery.entity.CustomerOrders;

import java.awt.*;
import java.util.List;

public interface CustomerOrderService {

    void addCustomerOrder(CustomerOrdersDTO customerOrdersDTO);
    List<CustomerOrders> findCustomerOrdersByID(Long customerID);



}
