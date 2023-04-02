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
    @GetMapping("/getAllProducts")
    public ResponseEntity<List<Product>> getAllProducts(){
        List<Product> productList = productService.getAllProduct();
        return ResponseEntity.ok(productList);

    }

    //new
    @GetMapping("/getProductById")
    public  ResponseEntity<Product> getProduct(@RequestParam int productId){
        Product product = productService.getProductById(productId);
        return ResponseEntity.ok(product);
    }

    @GetMapping(value = "/{userId}")
    public ResponseEntity<List<ShoppingCart>> getShoppingCartDetailsByUser(@PathVariable long userId){
        List<ShoppingCart> cartList = shoppingCartService.getShoppingCartDetailsByUserId(userId);
        return ResponseEntity.ok(cartList);
    }



    @PostMapping("/addToCart/{userId}")
    public String placeOrder(@PathVariable long userId, @RequestBody AddToCartDTO addToCartDTO){
        logger.info("Request Payload"+ addToCartDTO.toString());
        User user = userService.getUser(userId);
        Product product = productService.getProductById(addToCartDTO.getProductId());
        System.out.println(product);
        float amount = product.getPrice() * addToCartDTO.getQuantity();
        ShoppingCart cartItem = new ShoppingCart(addToCartDTO.getProductId(),addToCartDTO.getQuantity(),amount,user);
        if(product.getAvailableQuantity()>= addToCartDTO.getQuantity()) {
            shoppingCartService.saveShoppingCart(cartItem);
            int newQuantity = product.getAvailableQuantity()- addToCartDTO.getQuantity();
            product.setAvailableQuantity(newQuantity);
            product = productService.saveProduct(product);
            logger.info("Order processed successfully");
            return "Successfully Added to Cart";
        }
        else{
            return "Not enough available Quantity";
        }
    }

    @PostMapping("/updateShoppingCart")
    public String updateShoppingCartQuantity(@RequestParam int shoppingCartId, @RequestParam int quantity){
            ShoppingCart shoppingCart = shoppingCartService.getShoppingCartDetail(shoppingCartId);
            shoppingCart.setQuantity(quantity);
            shoppingCart = shoppingCartService.saveShoppingCart(shoppingCart);
            if(shoppingCart == null){
                return "Cannot update the cart";
            }
            else{
                return "Cart updated successfully";
            }



    }







}
