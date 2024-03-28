package com.service.order.models;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class Order {
    private Long orderId;
    private User user;
    private Date orderDate;
    private BigDecimal totalAmount;
    private String orderStatus;
    private String shippingAddress;
    private String paymentStatus;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;
}