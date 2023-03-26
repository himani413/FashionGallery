package com.ecommerce.fashiongallery.service;

import com.ecommerce.fashiongallery.dto.ProductDTO;
import com.ecommerce.fashiongallery.dto.ResponseDTO;
import com.ecommerce.fashiongallery.entity.Product;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductService {

    List<Product> getAllProducts();

    List<Product> getProductsByCategory(String category);

    ResponseDTO addProduct(ProductDTO productDTO);
}
