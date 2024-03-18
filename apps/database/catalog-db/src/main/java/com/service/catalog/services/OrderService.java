package com.service.catalog.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.service.catalog.dto.Cart;
import com.service.catalog.dto.CartItem;
import com.service.catalog.models.Order;
import com.service.catalog.models.OrderDetail;
import com.service.catalog.models.Product;
import com.service.catalog.models.User;
import com.service.catalog.reposistory.OrderDetailsRepository;
import com.service.catalog.reposistory.OrderRepository;
import com.service.catalog.reposistory.ProductRepository;
import com.service.catalog.reposistory.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderDetailsRepository orderDetailsRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    @SuppressWarnings({ "null", "unused" })
    public void createOrder(Cart cart) {
        Order order = new Order();
        if (cart.userId != null) {
            Optional<User> user = userRepository.findById(cart.userId);
            // Tạo mới đơn hàng
            order.setUser(user.get());
            order.setOrderDate(new Date());
            order.setTotalAmount(cart.getTotalAmount());
            order.setOrderStatus("PENDING");
            order.setShippingAddress(cart.getShippingAddress());
            order.setPaymentStatus(cart.getPaymentStatus());

            // Lưu đơn hàng vào cơ sở dữ liệu
            saveOrder(order);
        } else {
            System.out.println("User ID is null");
        }
        // Lưu các chi tiết đơn hàng vào cơ sở dữ liệu
        for (CartItem cartItem : cart.getCartItems()) {
            OrderDetail orderDetail = new OrderDetail();
            orderDetail.setOrder(order);
            Optional<Product> product = productRepository.findById(cartItem.getProductId());
            if (product != null) {
                orderDetail.setProduct(product.get());
                orderDetail.setQuantity(cartItem.getQuantity());
                orderDetail.setUnitPrice(product.get().getPrice());

                saveOrderDetails(orderDetail);
            } else {
                // Xử lý trường hợp không tìm thấy sản phẩm
                System.out.println("Không tìm thấy sản phẩm có ID: " + cartItem.getProductId());
            }
        }
    }

    @SuppressWarnings("null")
    public Optional<Order> findOrderById(Long orderId) {
        return orderRepository.findById(orderId);
    }

    public ArrayList<OrderDetail> findOrderDetailById(Long orderId) {
        return orderDetailsRepository.findByOrderOrderId(orderId);
    }

    @SuppressWarnings("null")
    @Transactional
    public Order updateOrder(Long orderId, Cart cart) {
        Optional<Order> orderOptional = findOrderById(orderId);
        if (orderOptional.isPresent()) {
            Order order = orderOptional.get();

            order.setShippingAddress(cart.getShippingAddress());
            order.setTotalAmount(cart.getTotalAmount());
            // Delete orderDetails original
            deleteOrderDetailById(orderId); 
            // Recreate new orderDetails
            for (CartItem cartItem : cart.getCartItems()) {
                Optional<Product> product = productRepository.findById(cartItem.getProductId());
                OrderDetail orderDetail = new OrderDetail();
                orderDetail.setOrder(order);
                orderDetail.setProduct(product.get());
                orderDetail.setQuantity(cartItem.getQuantity());
                orderDetail.setUnitPrice(product.get().getPrice());
                // Save down database
                orderDetailsRepository.save(orderDetail);
            }

            return order;
        } else {
            System.out.println("Order Not Found!");
            return null;
        }
    }

    @Transactional
    public ResponseEntity<?> deleteOrder(Long orderId) {
        Optional<Order> orderOptional = findOrderById(orderId);
        String errorMessage = String.format("Order ID = %d not found", orderId);
        if (orderOptional.isPresent()) {
            ArrayList<OrderDetail> orderDetails = findOrderDetailById(orderId);
            for (OrderDetail orderDetail : orderDetails) {
                deleteOrderDetailById(orderDetail.getOrder().getOrderId());
            }
            deleteOrderById(orderId);
            return ResponseEntity.ok("Order deleted!");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorMessage);
        }
    }

    @SuppressWarnings("null")
    public void saveOrder(Order order) {
        orderRepository.save(order);
    }

    @SuppressWarnings("null")
    public void saveOrderDetails(OrderDetail orderDetail) {
        orderDetailsRepository.save(orderDetail);
    }

    @SuppressWarnings("null")
    public void deleteOrderById(Long orderId) {
        orderRepository.deleteById(orderId);
    }

    public void deleteOrderDetailById(Long orderId) {
        orderDetailsRepository.deleteByOrderOrderId(orderId);
    }

}
