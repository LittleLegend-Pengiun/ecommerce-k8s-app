package com.service.order.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.service.order.dto.Cart;
import com.service.order.models.Order;
import com.service.order.services.OrderService;

@RestController
@RequestMapping("orders")
public class OrderController {
    @Autowired
    OrderService orderService;

    @PostMapping("/create-order")
    public ResponseEntity<?> createOrder(@RequestBody Cart cart) {
        try {
            orderService.createOrder(cart);
            return ResponseEntity.status(HttpStatus.CREATED).body("Order created successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to create order");
        }
    }

    @GetMapping
    public ResponseEntity<?> getOrderById(@RequestParam Long orderId) {
        Optional<Order> order = orderService.findOrderById(orderId);
        if(order.isPresent()) {
            return ResponseEntity.ok(order.get());
        }
        String errorMessage = String.format("Order ID = %d not found", orderId);
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorMessage);
    }

    @PutMapping("/{orderId}")
    public ResponseEntity<?> updateOrder(@PathVariable Long orderId, @RequestBody Cart cart) {
        Order order = orderService.updateOrder(orderId, cart);
        if (order != null) {
            return ResponseEntity.ok("Order updated!");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Order Not Found");
        }
    }

    @DeleteMapping("/{orderId}")
    public ResponseEntity<?> deleteOrder(@PathVariable Long orderId) {
        return orderService.deleteOrder(orderId);
    }
}