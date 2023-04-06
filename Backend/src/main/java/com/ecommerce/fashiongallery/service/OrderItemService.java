package com.ecommerce.fashiongallery.service;

import com.ecommerce.fashiongallery.entity.OrderItem;
import com.ecommerce.fashiongallery.repository.OrderItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderItemService {
    @Autowired
    private OrderItemRepository orderItemRepository;

    public OrderItemService(OrderItemRepository orderItemRepository) {
        this.orderItemRepository = orderItemRepository;
    }

    public OrderItem saveOrderItem(OrderItem orderItem){return orderItemRepository.save(orderItem);}
}
