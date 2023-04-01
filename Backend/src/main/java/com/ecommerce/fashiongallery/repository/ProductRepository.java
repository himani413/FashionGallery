package com.ecommerce.fashiongallery.repository;


import com.ecommerce.fashiongallery.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product,Integer> {

    public Product getProductById(int productId);
}
