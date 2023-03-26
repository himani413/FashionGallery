package com.ecommerce.fashiongallery.controller;

import com.ecommerce.fashiongallery.dto.ProductDTO;
import com.ecommerce.fashiongallery.dto.ResponseDTO;
import com.ecommerce.fashiongallery.entity.Product;
import com.ecommerce.fashiongallery.service.ProductService;
import com.ecommerce.fashiongallery.util.StringList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/products")
public class ProductController {

    @Autowired
    ProductService productService;

    private ResponseDTO responseDTO;

    @GetMapping("/getAllProducts")
    public List<Product> getAllProducts(){
        return productService.getAllProducts();
    }

    @GetMapping("/getProductsByCategory")
    public List<Product> getProductsByCategory(@RequestParam("category") String category){
        return productService.getProductsByCategory(category);
    }

    @PostMapping("/addproduct")
    public ResponseEntity<ResponseDTO> addProduct(@RequestBody ProductDTO productDTO){
        try {
            return ResponseEntity.ok(productService.addProduct(productDTO));
        }
        catch (Exception e){
            responseDTO.setCode(StringList.RSP_ERROR);
            responseDTO.setMessage(e.getMessage());
            responseDTO.setContent(null);
            return ResponseEntity.badRequest().body(null);
        }
    }

}
