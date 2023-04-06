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
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "process_id", nullable = false)
    private Long processID;
    @Column(name = "order_id", nullable = false)
    private Long orderID;

    @Column(name = "customer_id", nullable = false)
    private Long customerID;

    public CustomerOrders(Long customerID, Long orderID) {
        this.customerID = customerID;
        this.orderID = orderID;
    }



}