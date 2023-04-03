package com.ecommerce.fashiongallery.repository;


import com.ecommerce.fashiongallery.entity.Product;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product,Integer> {

    public Product getProductById(int productId);

    @Query(value = "SELECT p FROM Product p WHERE p.description LIKE %:value% OR p.name LIKE %:value%")
    public List<Product> getProductByWord(@Param("value") String value);

    public List<Product> getProductByCategoryid(int categoryId);
}
