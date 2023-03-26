package com.ecommerce.fashiongallery.repository;

import com.ecommerce.fashiongallery.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface OrderRepository  extends JpaRepository<Order,Integer> {
    public List<Order> findAllByCustomerId(int customerId);
}
