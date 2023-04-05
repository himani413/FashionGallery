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
    @Query(value = "SELECT d.id, d.first_name, d.last_name, d.mobile_number, d.address_line_1, d.address_line_2, d.city, d.province, d.zipcode, d.order_amount, d.order_date FROM customer_orders c INNER JOIN delivery d ON c.order_id = d.id WHERE c.customer_id = ?1", nativeQuery = true)
    List<CustomerOrders> findCustomerOrdersByID(Long customerID);

}
