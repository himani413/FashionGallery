package com.ecommerce.fashiongallery.repository;


import com.ecommerce.fashiongallery.entity.ShoppingCart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShoppingCartRepository extends JpaRepository<ShoppingCart,Integer> {
    //new
    public List<ShoppingCart> findAllByUserId(long userId);

    ShoppingCart findByUserIdAndProductId(long customerId, int productId);

}