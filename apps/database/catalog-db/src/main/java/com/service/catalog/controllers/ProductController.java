package com.service.catalog.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.service.catalog.models.Product;
import com.service.catalog.reposistory.CategoryReposistory;
import com.service.catalog.reposistory.DiscountReposistory;
import com.service.catalog.reposistory.InventoryReposistory;
import com.service.catalog.reposistory.ProductReposistory;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {
    @Autowired
    CategoryReposistory categoryReposistory;
    @Autowired
    DiscountReposistory discountReposistory;
    @Autowired
    InventoryReposistory inventoryReposistory;
    @Autowired
    ProductReposistory productReposistory;

    @GetMapping
    public List<Product> findAllStudent(){
        return productReposistory.findAll();
    }
    @RequestMapping(value = "/{productId}", method = RequestMethod.GET)
    public Product findProductById(@PathVariable String productId){
        return productReposistory.findById(productId).orElse(null);
    }
    @GetMapping("/productName/{productName}")
    public List<Product> findProductByName(@PathVariable String productName){
        return productReposistory.findByName(productName);
    }
    @GetMapping("/orderdById")
    public List<Product> orderProductById(){
        return productReposistory.OrderProductById();
    }
    @GetMapping("/IdAndInventory")
    public List<Product> findByCategory_IdAndInventory_Id(@RequestParam String category_id, @RequestParam String inventory_id){
        return productReposistory.findByCategory_IdAndInventory_Id(category_id, inventory_id);
    }
    @GetMapping("/greaterThan/{price}")
    public List<Product> findByPriceGreaterThan(@PathVariable BigDecimal price){
        return productReposistory.findByPriceGreaterThan(price);
    }
}
