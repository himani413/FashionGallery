package com.ecommerce.fashiongallery.service;

import com.ecommerce.fashiongallery.entity.Product;
import com.ecommerce.fashiongallery.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;
    //
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
    public List<Product> getAllProduct(){
        return this.productRepository.findAll();
    }
    public Product getProductById(int productId){
        return this.productRepository.getProductById(productId);
    }
    public Product saveProduct(Product product){
        return productRepository.save(product);
    }
    public List<Product> getProductBySearch(String value){return productRepository.getProductByWord(value);}
    public List<Product> getProductByCategoryId(int categoryId){
        return this.productRepository.getProductByCategoryid(categoryId);
    }
}
