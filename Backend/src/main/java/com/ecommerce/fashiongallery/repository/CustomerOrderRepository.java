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
    @Query(value = "SELECT\n" +
            "    d.id AS order_id,\n" +
            "    d.customer_id,\n" +
            "    d.first_name,\n" +
            "    d.last_name,\n" +
            "    d.mobile_number,\n" +
            "    d.address_line_1,\n" +
            "    d.address_line_2,\n" +
            "    d.city,\n" +
            "    d.province,\n" +
            "    d.zipcode,\n" +
            "    d.order_amount,\n" +
            "    d.order_date \n" +
            "FROM\n" +
            "    customer_orders c \n" +
            "INNER JOIN\n" +
            "    delivery d \n" +
            "        ON c.order_id = d.id \n" +
            "WHERE\n" +
            "    c.customer_id = ?1", nativeQuery = true)
    List<CustomerOrders> findCustomerOrdersByID(Long customerID);

}
