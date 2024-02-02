package com.service.catalog.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "CATEGORY_TBL")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Category {
    @Id
    @GeneratedValue
    private String id;
    private String name;
    private String description;
    @JsonIgnore
    @OneToMany(mappedBy="category")
    private List<Product> productList;
}
