package com.ecommerce.fashiongallery.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class ShoppingCart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int productId;
    private int quantity;
    private float amount;
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "customer_id",referencedColumnName = "customer_id")
    private User user;


    public ShoppingCart(){

    }

    public ShoppingCart(int productId, int quantity, float amount, User user) {
        this.productId = productId;
        this.quantity = quantity;
        this.amount = amount;
        this.user = user;
    }

    public ShoppingCart(int productId, int quantity) {
        this.productId = productId;
        this.quantity = quantity;
    }


    @Override
    public String toString() {
        return "ShoppingCart{" +
                "id=" + id +
                ", productId=" + productId +
                ", quantity=" + quantity +
                ", amount=" + amount +
                ", user=" + user +
                '}';
    }
}
