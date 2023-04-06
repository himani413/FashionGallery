package com.ecommerce.fashiongallery.controller;


import com.ecommerce.fashiongallery.dto.ResponseDTO;
import com.ecommerce.fashiongallery.entity.OrderItem;
import com.ecommerce.fashiongallery.entity.ShoppingCart;
import com.ecommerce.fashiongallery.repository.OrderItemRepository;
import com.ecommerce.fashiongallery.service.OrderItemService;
import com.ecommerce.fashiongallery.service.ProductService;
import com.ecommerce.fashiongallery.service.ShoppingCartService;
import com.ecommerce.fashiongallery.service.UserService;
import com.ecommerce.fashiongallery.util.StringList;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/order")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

    private ProductService productService;
    private UserService userService;
    private ShoppingCartService shoppingCartService;
    @Autowired
    private OrderItemService orderItemService;
    ResponseDTO responseDTO;

    public OrderController(ProductService productService, UserService userService, ShoppingCartService shoppingCartService,OrderItemService orderItemService) {
        this.productService = productService;
        this.userService = userService;
        this.shoppingCartService = shoppingCartService;
        this.orderItemService = orderItemService;
    }

  /*  @PostMapping(value = "/addCartOrder")
    public String addOrderToOrderItem(@RequestParam long orderId, @RequestBody List<ShoppingCart> cartItems){
        System.out.println(cartItems);

        try {
            for (ShoppingCart item : cartItems) {
                OrderItem  orderItem = new OrderItem(orderId, item.getProductId(), item.getQuantity());
                System.out.println(orderItem);
                orderItem = orderItemService.saveOrderItem(orderItem);
            }
            return "Successfully Add to the OrderItem";
        }
        catch (Exception e){
            e.printStackTrace();

            // Return an error message to the client
            return "Error occurred while adding to the OrderItem: " + e.getMessage();
        }

    }*/

    @PostMapping(value = "/addOrderItems")
    public String addSingleOrderToOrderItem(@RequestParam long orderId, @RequestParam int productId, @RequestParam int quantity){

        try {
           OrderItem orderItem = new OrderItem(orderId,productId,quantity);
           orderItem = orderItemService.saveOrderItem(orderItem);
            return "Successfully Add to the OrderItem";
        }
        catch (Exception e){
            e.printStackTrace();

            // Return an error message to the client
            return "Error occurred while adding to the OrderItem: " + e.getMessage();
        }

    }

}
