package com.ecommerce.fashiongallery.controller;

import com.ecommerce.fashiongallery.dto.AddToCartDTO;
import com.ecommerce.fashiongallery.dto.OrderDTO;
import com.ecommerce.fashiongallery.dto.ResponseOrderDTO;
import com.ecommerce.fashiongallery.entity.Customer;
import com.ecommerce.fashiongallery.entity.Order;
import com.ecommerce.fashiongallery.entity.Product;
import com.ecommerce.fashiongallery.entity.ShoppingCart;
import com.ecommerce.fashiongallery.service.CustomerService;
import com.ecommerce.fashiongallery.service.OrderService;
import com.ecommerce.fashiongallery.service.ProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ShoppingCartRestController {

    private OrderService orderService;
    private ProductService productService;
    private CustomerService customerService;


    public ShoppingCartRestController(OrderService orderService, ProductService productService, CustomerService customerService) {
        this.orderService = orderService;
        this.productService = productService;
        this.customerService = customerService;
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

    @GetMapping(value = "/getOrder/{orderId}")
    public ResponseEntity<Order> getOrderDetails(@PathVariable int orderId){
        Order order = orderService.getOrderDetail(orderId);
        return ResponseEntity.ok(order);
    }

    //new
    @GetMapping(value = "/getOrderByCustomer/{customerId}")
    public ResponseEntity<List<Order>> getOrderDetailsByCustomer(@PathVariable int customerId){
        List<Order> orderList = orderService.getOrderDetailsByCustomerId(customerId);
        return ResponseEntity.ok(orderList);
    }

    //new
    @PostMapping("/addToCart/{customerId}")
    public String placeOrder(@PathVariable int customerId, @RequestBody AddToCartDTO addToCartDTO){
        logger.info("Request Payload"+ addToCartDTO.toString());
        Customer customer = customerService.getCustomer(customerId);
        Product product = productService.getProductById(addToCartDTO.getProductId());
        float amount = product.getPrice() * addToCartDTO.getQuantity();
        ShoppingCart cartItem = new ShoppingCart(addToCartDTO.getProductId(),product.getName(),addToCartDTO.getQuantity(),amount);
        if(product.getAvailableQuantity()>= addToCartDTO.getQuantity()) {
            List<ShoppingCart> cartItemList = new ArrayList<>();
            cartItemList.add(cartItem);
            Order order = new Order("Add  to Cart", customer, cartItemList);
            order = orderService.saveOrder(order);
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



    @PostMapping("/placeOrder")
    public ResponseEntity<ResponseOrderDTO> placeOrder(@RequestBody OrderDTO orderDTO){

        logger.info("Request Payload"+ orderDTO.toString());
        ResponseOrderDTO responseOrderDTO = new ResponseOrderDTO();
        float amount = orderService.getCartAmount(orderDTO.getCartItems());

        Customer customer = new Customer(orderDTO.getCustomerName(),orderDTO.getCustomerEmail());
        Integer customerIdFromDB = customerService.isCustomerPresent(customer);

        if(customerIdFromDB != null){
            customer.setId(customerIdFromDB);
            logger.info("Customer already present in db with id "+customer.getId());

        }else{
            customer = customerService.saveCustomer(customer);
            logger.info("Customer saved with id "+customer.getId());

        }
        Order order = new Order(orderDTO.getOrderDescription(),customer,orderDTO.getCartItems());
        order = orderService.saveOrder(order);
        logger.info("Order processed successfully");

        responseOrderDTO.setAmount(amount);
        responseOrderDTO.setDate(String.valueOf(java.time.LocalDate.now()));
        responseOrderDTO.setInvoiceNumber(new Random().nextInt(1000));
        responseOrderDTO.setOrderId(order.getId());
        responseOrderDTO.setOrderDescription(orderDTO.getOrderDescription());

        logger.info("test push");
        return ResponseEntity.ok(responseOrderDTO);

    }



}
