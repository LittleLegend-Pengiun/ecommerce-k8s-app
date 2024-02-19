package com.service.catalog.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "INVENTORY_TBL")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Inventory {
    @Id
    @GeneratedValue
    private String id;
    private int quantity;
    @JsonIgnore
    @OneToMany(mappedBy="inventory")
    private List<Product> productList;
}
