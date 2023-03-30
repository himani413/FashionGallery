package com.ecommerce.fashiongallery.entity;
import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "delivery")
public class Delivery {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "mobile_number", nullable = false)
    private String mobileNumber;
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

    @Column(name = "order_amount", nullable = false)
    private String orderAmount;

    @Column(name = "customer_id", nullable = false)
    private Long customerID;

    public Delivery(String firstName,
                    String lastName,
                    String mobileNumber,
                    String addressLine1,
                    String addressLine2,
                    String city,
                    String province,
                    Integer zipcode,
                    String orderAmount,
                    Long customerID)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobileNumber = mobileNumber;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.city = city;
        this.province = province;
        this.zipcode = zipcode;
        this.orderAmount = orderAmount;
        this.customerID = customerID;
    }
}