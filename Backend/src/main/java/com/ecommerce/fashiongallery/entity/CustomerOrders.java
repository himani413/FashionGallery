package com.ecommerce.fashiongallery.entity;

import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "customer_orders")
public class CustomerOrders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "customer_id")
    private Long customerID;
    @Column(name = "order_id", nullable = false)
    private Long orderID;


    public CustomerOrders(Long customerID, Long orderID) {
        this.customerID = customerID;
        this.orderID = orderID;
    }

}