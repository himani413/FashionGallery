package com.ecommerce.fashiongallery.repository;

import com.ecommerce.fashiongallery.entity.OrderItem;
import com.ecommerce.fashiongallery.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderItemRepository  extends JpaRepository<OrderItem,Integer> {


}
