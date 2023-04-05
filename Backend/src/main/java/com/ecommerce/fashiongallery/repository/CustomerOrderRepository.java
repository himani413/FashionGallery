package com.ecommerce.fashiongallery.repository;

import com.ecommerce.fashiongallery.entity.CustomerOrders;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerOrderRepository extends JpaRepository<CustomerOrders, Long> {

    @Transactional
    @Modifying
    @Query(value = "SELECT * FROM customer_orders c JOIN delivery d ON c.order_id = d.order_id WHERE c.customer_id = ?1", nativeQuery = true)
    List<CustomerOrders> findCustomerOrdersByID(long customerID);

}
