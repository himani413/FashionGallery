package com.ecommerce.fashiongallery.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CustomerOrdersDTO {

    private Long customerID;
    private Long orderID;
}
