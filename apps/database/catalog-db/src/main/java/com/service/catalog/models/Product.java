package com.service.catalog.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;

@Entity
@Table(name = "PRODUCT_TBL")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    @Id
    @GeneratedValue
    private String id;
    private String name;
    private String description;
    private String SKU;
    @ManyToOne
    @JoinColumn(name="category_id", nullable=false)
    private Category category;
    @ManyToOne
    @JoinColumn(name="inventory_id", nullable=false)
    private Inventory inventory;
    private BigDecimal price;
    @ManyToOne
    @JoinColumn(name="discount_id", nullable=false)
    private Discount discount;
//    @JsonIgnore
//    @OneToMany(mappedBy="product")
//    private List<Discount> discountList;
//    private String imageLink;
}
