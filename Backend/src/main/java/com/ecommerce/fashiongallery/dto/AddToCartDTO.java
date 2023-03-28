package com.ecommerce.fashiongallery.dto;

import com.ecommerce.fashiongallery.entity.ShoppingCart;

import java.util.List;

public class AddToCartDTO {

    private int productId;
    private int quantity;



    public AddToCartDTO(int productId, int quantity) {
        this.productId = productId;
        this.quantity = quantity;

    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }


    @Override
    public String toString() {
        return "AddToCartDTO{" +
                "productId=" + productId +
                ", quantity=" + quantity +
                '}';
    }
}
