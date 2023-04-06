package com.ecommerce.fashiongallery.controller;

import com.ecommerce.fashiongallery.dto.AddToCartDTO;
import com.ecommerce.fashiongallery.entity.Product;
import com.ecommerce.fashiongallery.entity.ShoppingCart;
import com.ecommerce.fashiongallery.entity.User;
import com.ecommerce.fashiongallery.service.UserService;
import com.ecommerce.fashiongallery.service.ProductService;
import com.ecommerce.fashiongallery.service.ShoppingCartService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/cart")
public class ShoppingCartRestController {

    private ProductService productService;
    private UserService userService;
    private ShoppingCartService shoppingCartService;


    public ShoppingCartRestController(ProductService productService, UserService userService, ShoppingCartService shoppingCartService) {
        this.productService = productService;
        this.userService = userService;
        this.shoppingCartService = shoppingCartService;
    }

    private Logger logger = (Logger) LoggerFactory.getLogger(ShoppingCartRestController.class);



    @GetMapping("/test")
    public String test(){
        return "Hello World";
    }


    @GetMapping(value = "/{customerId}")
    public ResponseEntity<List<ShoppingCart>> getShoppingCartDetailsByUser(@PathVariable long customerId){
        List<ShoppingCart> cartList = shoppingCartService.getShoppingCartDetailsByUserId(customerId);
        return ResponseEntity.ok(cartList);
    }



    @PostMapping("/addToCart/{customerId}")
    public String placeOrder(@PathVariable long customerId, @RequestBody AddToCartDTO addToCartDTO){
        logger.info("Request Payload"+ addToCartDTO.toString());
        User user = userService.getUser(customerId);
        Product product = productService.getProductById(addToCartDTO.getProductId());
        ShoppingCart existingCart = null;
        existingCart = shoppingCartService.FindShoppingCartByCustomerAndProduct(customerId,product.getId());
        if(existingCart != null){
            int newQuantity = addToCartDTO.getQuantity()+existingCart.getQuantity();
            float newAmount = newQuantity * product.getPrice();
            existingCart.setAmount(newAmount);
            existingCart.setQuantity(newQuantity);
            existingCart = shoppingCartService.saveShoppingCart(existingCart);
            if (existingCart == null) {
                return "Cannot update the cart";
            } else {
                return "Cart updated successfully";
            }

        }
        else {
            //System.out.println(product);
            float amount = product.getPrice() * addToCartDTO.getQuantity();
            ShoppingCart cartItem = new ShoppingCart(addToCartDTO.getProductId(), addToCartDTO.getQuantity(), amount, user);
            if (product.getAvailableQuantity() >= addToCartDTO.getQuantity()) {
                shoppingCartService.saveShoppingCart(cartItem);
                int newQuantity = product.getAvailableQuantity() - addToCartDTO.getQuantity();
                product.setAvailableQuantity(newQuantity);
                product = productService.saveProduct(product);
                logger.info("Order processed successfully");
                return "Successfully Added to Cart";
            } else {
                return "Not enough available Quantity";
            }
        }
    }

    @PostMapping("/updateShoppingCart")
    public String updateShoppingCartQuantity(@RequestParam int shoppingCartId, @RequestParam int quantity) {
        ShoppingCart shoppingCart = shoppingCartService.getShoppingCartDetail(shoppingCartId);

        if(quantity==0){
            shoppingCartService.DeleteShoppingCart(shoppingCart);
            return "";
        }
        else {
            Product product = productService.getProductById(shoppingCart.getProductId());
            float newAmount = quantity * product.getPrice();
            if(shoppingCart.getQuantity()>quantity){
                int difference = shoppingCart.getQuantity() - quantity;
                product.setAvailableQuantity(product.getAvailableQuantity()+difference);
                product = productService.saveProduct(product);
            }
            else{
                int difference = quantity - shoppingCart.getQuantity()  ;
                product.setAvailableQuantity(product.getAvailableQuantity()-difference);
                product = productService.saveProduct(product);
            }
            shoppingCart.setQuantity(quantity);
            shoppingCart.setAmount(newAmount);
            shoppingCart = shoppingCartService.saveShoppingCart(shoppingCart);
            if (shoppingCart == null) {
                return "Cannot update the cart";
            } else {
                return "Cart updated successfully";
            }
        }

    }

    @PostMapping("/deleteCartItem")
    public String deleteShoppingCartItem(@RequestParam int shoppingCartId) {
        ShoppingCart shoppingCart = shoppingCartService.getShoppingCartDetail(shoppingCartId);
        int quantity = shoppingCart.getQuantity();
        Product product = productService.getProductById(shoppingCart.getProductId());
        int newQuantity = quantity + product.getAvailableQuantity();
        product.setAvailableQuantity(newQuantity);
       product = productService.saveProduct(product);
        shoppingCartService.DeleteShoppingCart(shoppingCart);
        if (shoppingCart == null) {
            return "Cannot update the cart";
        } else {
            return "Cart updated successfully";
        }


    }


    @PostMapping(value = "/deleteCart")
    public String deleteShoppingCart(@RequestParam long customerId){
        List<ShoppingCart> cartList = shoppingCartService.getShoppingCartDetailsByUserId(customerId);
        try {
            for (ShoppingCart cart : cartList) {
                shoppingCartService.DeleteShoppingCart(cart);
            }
            return "Successfully Remove the cart";
        }
        catch (Exception e){
            return "Error in removing";
        }


    }











}
