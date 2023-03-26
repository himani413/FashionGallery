package com.ecommerce.fashiongallery.repository;

import com.ecommerce.fashiongallery.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ProductRepository extends JpaRepository<Product,Long> {

    List<Product> findByCategory(String category);
}
