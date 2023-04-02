package com.ecommerce.fashiongallery.service;

import com.ecommerce.fashiongallery.entity.ShoppingCart;
import com.ecommerce.fashiongallery.repository.ProductRepository;
import com.ecommerce.fashiongallery.repository.ShoppingCartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ShoppingCartService {

    @Autowired
    private ShoppingCartRepository shoppingCartRepository;
    @Autowired
    private ProductRepository productRepository;

    public ShoppingCartService(ShoppingCartRepository shoppingCartRepository, ProductRepository productRepository) {
        this.shoppingCartRepository = shoppingCartRepository;
        this.productRepository = productRepository;
    }
    public ShoppingCart getShoppingCartDetail(int Id){
        Optional<ShoppingCart> shoppingCart = this.shoppingCartRepository.findById(Id);
        return shoppingCart.isPresent()?shoppingCart.get():null;

    }
    public ShoppingCart saveShoppingCart(ShoppingCart shoppingCart){return shoppingCartRepository.save(shoppingCart);}
    //new
    public List<ShoppingCart> getShoppingCartDetailsByUserId(long userId){return shoppingCartRepository.findAllByUserId(userId);}
}
