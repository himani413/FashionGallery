package com.ecommerce.fashiongallery.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class SignupDTO {
    private String Email;
    private String Fname;
    private String Lname;
    private String AddressLine1;
    private String AddressLine2;
    private String City;
    private String PostalCode;
    private String Password;
    private String confPass;

}
