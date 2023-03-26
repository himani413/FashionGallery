package com.ecommerce.fashiongallery.entity;

import com.ecommerce.fashiongallery.dto.ProductDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "Products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long pid;

    @Column(nullable = false)
    String Pname;
    String Price;
    String category;
    String description;
    int Quantity;

    public Product(ProductDTO productDTO) {
        this.Pname = productDTO.getPname();
        this.Price = productDTO.getPrice();
        this.Quantity = productDTO.getQuantity();
        this.category=productDTO.getCategory();
        this.description=productDTO.getDescription();
    }

}
