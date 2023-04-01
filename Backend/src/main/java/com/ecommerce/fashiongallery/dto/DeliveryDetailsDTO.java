package com.ecommerce.fashiongallery.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class DeliveryDetailsDTO {

    private String firstName;
    private String lastName;
    private String mobileNumber;
    private String addressLine1;
    private String addressLine2;
    private String city;
    private String province;
    private Integer zipcode;
    private String amount;  //amount should pass to this via cart page as a session attribute
    private Long customerID; //Customer ID should pass to this via cart page as a session attribute





}
