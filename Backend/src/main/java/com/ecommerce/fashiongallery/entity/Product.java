package com.ecommerce.fashiongallery.entity;

import jakarta.persistence.*;


@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private int availableQuantity;
    private float price;
    private String picture;
    private String size;
    @Column(columnDefinition="TEXT")
    private String description;
    private String category;
    private int categoryid;

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

    public void setCategory(String category) {
        this.category = category;
    }

    public void setCategoryid(int categoryid) {
        this.categoryid = categoryid;
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

    public String getCategory() {return category;}

    public int getCategoryid() {
        return categoryid;
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
                ", category='" + category + '\'' +
                ", categoryid=" + categoryid +
                '}';
    }
}
