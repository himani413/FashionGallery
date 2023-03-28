package com.ecommerce.fashiongallery.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;


@Entity
public class Product {

    @Id
    @GeneratedValue
    private int id;
    private String name;
    private int availableQuantity;
    private float price;
    private String picture;
    private String size;
    private String description;

    public Product() {
    }

    //setters
    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAvailableQuantity(int availableQuantity) {
        this.availableQuantity = availableQuantity;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    //getters


    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getAvailableQuantity() {
        return availableQuantity;
    }

    public float getPrice() {
        return price;
    }

    public String getPicture() {
        return picture;
    }

    public String getSize() {
        return size;
    }

    public String getDescription() {
        return description;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", availableQuantity=" + availableQuantity +
                ", price=" + price +
                ", picture='" + picture + '\'' +
                ", size='" + size + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
