package com.service.order.models;

import java.io.Serializable;
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

public class Product implements Serializable {
    private Long productId;
    private String productName;
    private String description;
    private BigDecimal price;
    private String imageUrl;
    private Integer stockQuantity;
    private String manufacture;
    private String releaseDate;
    private LocalDateTime updatedDate;
}