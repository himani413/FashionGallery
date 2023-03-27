package com.ecommerce.fashiongallery.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class DeliveryAddressDTO {

    private String addressLine1;
    private String addressLine2;
    private String city;
    private String province;
    private Integer zipcode;


}
