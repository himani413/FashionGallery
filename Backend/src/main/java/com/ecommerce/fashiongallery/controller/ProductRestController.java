package com.ecommerce.fashiongallery.controller;


import com.ecommerce.fashiongallery.entity.Product;
import com.ecommerce.fashiongallery.service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/product")
public class ProductRestController {

    private ProductService productService;

    public ProductRestController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/getAllProducts")
    public ResponseEntity<List<Product>> getAllProducts(){
        List<Product> productList = productService.getAllProduct();
        return ResponseEntity.ok(productList);

    }

    @GetMapping("/getProductById")
    public  ResponseEntity<Product> getProduct(@RequestParam int productId){
        Product product = productService.getProductById(productId);
        return ResponseEntity.ok(product);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Product>> getProductBySearch(@RequestParam String searchValue ){
        List<Product> products = productService.getProductBySearch(searchValue);
        return ResponseEntity.ok(products);
    }

    @GetMapping("/getProductByCategory")
    public ResponseEntity<List<Product>> getProductByCategory(@RequestParam int categoryId ){
        List<Product> products = productService.getProductByCategoryId(categoryId);
        return ResponseEntity.ok(products);
    }

    @PostMapping("/updateQuantity")
    public String updateProductQuantity(@RequestParam int productId,@RequestParam int buyingQuantity){
        try {
            Product product = productService.getProductById(productId);
            int newQuantity = product.getAvailableQuantity() - buyingQuantity;
            product.setAvailableQuantity(newQuantity);
            product = productService.saveProduct(product);
            return "SuccessFully update the quantity";
        }
        catch (Exception e){
            return "Cannot update the quantity";
        }
    }
}
