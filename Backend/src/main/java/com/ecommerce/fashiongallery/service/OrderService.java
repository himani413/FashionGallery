package com.ecommerce.fashiongallery.service;


import com.ecommerce.fashiongallery.entity.Order;
import com.ecommerce.fashiongallery.entity.Product;
import com.ecommerce.fashiongallery.entity.ShoppingCart;
import com.ecommerce.fashiongallery.repository.OrderRepository;
import com.ecommerce.fashiongallery.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private ProductRepository productRepository;

    public OrderService(OrderRepository orderRepository, ProductRepository productRepository) {
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
    }

    public Order getOrderDetail(int orderId){
        Optional<Order> order = this.orderRepository.findById(orderId);
        return order.isPresent()?order.get():null;

    }

    //new
    public List<Order> getOrderDetailsByCustomerId(int customerId){
        List<Order> orderList = this.orderRepository.findAllByCustomerId(customerId);
        return orderList.isEmpty()?null:orderList;
    }

    public float getCartAmount(List<ShoppingCart> shoppingCartList){

        float totalCartAmount = 0f;
        float singleCartAmount = 0f;
        int availableQuentity = 0;

        for(ShoppingCart cart: shoppingCartList){
            int productId = cart.getProductId();
            Optional<Product> product = productRepository.findById(productId);
            if(product.isPresent()){
                Product product1 = product.get();
                if(product1.getAvailableQuantity() < cart.getQuantity()){
                    singleCartAmount = product1.getPrice() * product1.getAvailableQuantity();
                    cart.setQuantity(product1.getAvailableQuantity());
                    availableQuentity = 0;
                }
                else{
                    singleCartAmount =  cart.getQuantity()*product1.getPrice();
                    availableQuentity = product1.getAvailableQuantity() - cart.getQuantity();
                }
                totalCartAmount = totalCartAmount+singleCartAmount;
                product1.setAvailableQuantity(availableQuentity);
                cart.setProductName(product1.getName());
                cart.setAmount(singleCartAmount);
                productRepository.save(product1);
            }

        }
        return totalCartAmount;

    }
    public Order saveOrder(Order order){
        return orderRepository.save(order);
    }

}
