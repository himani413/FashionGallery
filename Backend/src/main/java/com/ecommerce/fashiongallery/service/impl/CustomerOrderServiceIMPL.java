package com.ecommerce.fashiongallery.service.impl;

import com.ecommerce.fashiongallery.dto.CustomerOrdersDTO;
import com.ecommerce.fashiongallery.entity.CustomerOrders;
import com.ecommerce.fashiongallery.repository.CustomerOrderRepository;
import com.ecommerce.fashiongallery.service.CustomerOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerOrderServiceIMPL implements CustomerOrderService {

    @Autowired
    private CustomerOrderRepository customerOrderRepository;

    @Override
    public void addCustomerOrder(CustomerOrdersDTO customerOrdersDTO) {

        CustomerOrders customerOrders = new CustomerOrders(
                customerOrdersDTO.getCustomerID(),
                customerOrdersDTO.getOrderID()
        );
        customerOrderRepository.save(customerOrders);



    }

    @Override
    public List<CustomerOrders> findCustomerOrdersByID(Long customerID) {

        return customerOrderRepository.findCustomerOrdersByID(customerID);

    }
}
