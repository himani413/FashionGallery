package com.ecommerce.fashiongallery.repository;

import com.ecommerce.fashiongallery.dto.CustomerOrdersJoinResultsDTO;
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
    @Query(value = "SELECT new com.ecommerce.fashiongallery.dto.CustomerOrdersJoinResultsDTO(d.id,d.customerID, d.firstName, d.lastName, d.mobileNumber, d.addressLine1, d.addressLine2, d.city, d.province, d.zipcode, d.orderAmount, d.orderDate) FROM\n" +
            "    CustomerOrders c \n" +
            " INNER JOIN\n" +
            "    Delivery d \n" +
            "        ON c.orderID = d.id \n" +
            "WHERE\n" +
            "    c.customerID =?1")
    List<CustomerOrdersJoinResultsDTO> findCustomerOrdersByID(Long customerID);

}
