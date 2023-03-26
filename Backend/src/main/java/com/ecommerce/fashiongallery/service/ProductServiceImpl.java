package com.ecommerce.fashiongallery.service;

import com.ecommerce.fashiongallery.dto.ProductDTO;
import com.ecommerce.fashiongallery.dto.ResponseDTO;
import com.ecommerce.fashiongallery.entity.Product;
import com.ecommerce.fashiongallery.repository.ProductRepository;
import com.ecommerce.fashiongallery.util.StringList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public List<Product> getProductsByCategory(String category) {
        return productRepository.findByCategory(category);
    }

    @Override
    public ResponseDTO addProduct(ProductDTO productDTO) {

        var product= Product.builder()
                .Pname(productDTO.getPname())
                .Price(productDTO.getPrice())
                .category(productDTO.getCategory())
                .description(productDTO.getDescription())
                .Quantity(productDTO.getQuantity())
                .build();

        var savedProduct=productRepository.save(product);
        return ResponseDTO.builder()
                .code(StringList.RSP_SUCCESS)
                .content(product)
                .message("New Product added")
                .build();
    }

}
