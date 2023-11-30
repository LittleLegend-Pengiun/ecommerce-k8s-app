package com.service.catalog.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name = "DISCOUNT_TBL")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Discount {
    @Id
    @GeneratedValue
    private String id;
    private String name;
    private String description;
    private BigDecimal discountPercent;
    @JsonIgnore
    @OneToMany(mappedBy="discount")
    private List<Product> productList;
}
