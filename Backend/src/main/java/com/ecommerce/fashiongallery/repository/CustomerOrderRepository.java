package com.ecommerce.fashiongallery.repository;

import com.ecommerce.fashiongallery.entity.CustomerOrders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerOrderRepository extends JpaRepository<CustomerOrders, Long> {

}
