package com.service.catalog.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.service.catalog.models.Product;
import com.service.catalog.models.ProductMessage;
import com.service.catalog.rabbitmq.RabbitMQProducer;
import com.service.catalog.reposistory.ProductReposistory;
import com.service.catalog.services.ProductResponseListener;

import java.util.List;

@RestController
public class ProductController {
    
    
    @Autowired
    ProductReposistory productReposistory;

    @Autowired
    private RabbitMQProducer rabbitMQProducer;

    @Autowired
    public ProductMessage productMessage;

    @Autowired
    private ProductResponseListener productResponseListener;

    @GetMapping("/product")
    public List<Product> findAllProduct() {
        productMessage.setAction("get");
        productMessage.setInstance("product");

        rabbitMQProducer.sendMessage(productMessage);
        
        List<Product> responseProducts = productResponseListener.waitForResponse();
        return responseProducts;
    }
    // @RequestMapping(value = "/{productId}", method = RequestMethod.GET)
    // public Product findProductById(@PathVariable Long productId){
    // return productReposistory.findById(productId).orElse(null);
    // return productReposistory.findById(productId).orElse(null);
    // }
    // @GetMapping("/productName/{productName}")
    // public List<Product> findProductByName(@PathVariable String productName){
    // return productReposistory.findByName(productName);
    // return productReposistory.findByName(productName);
    // }
    // @GetMapping("/orderdById")
    // public List<Product> orderProductById(){
    // return productReposistory.OrderProductById();
    // return productReposistory.OrderProductById();
    // }
    // @GetMapping("/IdAndInventory")
    // public List<Product> findByCategory_IdAndInventory_Id(@RequestParam String
    // category_id, @RequestParam String inventory_id){
    // return productReposistory.findByCategory_IdAndInventory_Id(category_id,
    // inventory_id);
    // public List<Product> findByCategory_IdAndInventory_Id(@RequestParam String
    // category_id, @RequestParam String inventory_id){
    // return productReposistory.findByCategory_IdAndInventory_Id(category_id,
    // inventory_id);
    // }
    // @GetMapping("/greaterThan/{price}")
    // public List<Product> findByPriceGreaterThan(@PathVariable BigDecimal price){
    // return productReposistory.findByPriceGreaterThan(price);
    // return productReposistory.findByPriceGreaterThan(price);
    // }
}
