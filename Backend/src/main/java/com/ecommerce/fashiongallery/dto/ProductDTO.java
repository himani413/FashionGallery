package com.ecommerce.fashiongallery.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ProductDTO {
    private Long id;
    String Pname;
    String Price;
    int Quantity;
    String category;
    String description;
}
