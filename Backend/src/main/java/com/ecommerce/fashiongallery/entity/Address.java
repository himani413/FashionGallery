package com.ecommerce.fashiongallery.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "address")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "address_line_1", nullable = false, length = 512)
    private String addressLine1;

    @Column(name = "address_line_2", length = 512)
    private String addressLine2;

    @Column(name = "city", nullable = false)
    private String city;

    @Column(name = "province", nullable = false)
    private String province;

    @Column(name = "zipcode", nullable = false)
    private Integer zipcode;

    @ManyToOne(optional = false)
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    public void setAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
    }

    public void setAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public void setZipcode(Integer zipcode) {
        this.zipcode = zipcode;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}