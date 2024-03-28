package com.service.order.models;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class OrderDetail {
    private Long orderDetailId;
    private Order order;
    private Product product;

    private Integer quantity;
    private BigDecimal unitPrice;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;
}