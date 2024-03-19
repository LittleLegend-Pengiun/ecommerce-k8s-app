package com.service.catalog.dto;

import java.math.BigDecimal;
import java.util.ArrayList;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Cart {
    public Long userId;
    private ArrayList<CartItem> cartItems;
    private BigDecimal totalAmount;
    private String shippingAddress;
    private String paymentStatus;
}
