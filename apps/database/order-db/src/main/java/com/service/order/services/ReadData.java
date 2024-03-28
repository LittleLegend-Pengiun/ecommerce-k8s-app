package com.service.order.services;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.service.order.models.Product;
import com.service.order.models.User;
import com.service.order.reposistory.ProductRepository;
import com.service.order.reposistory.UserRepository;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReadData {
    @Autowired
    private ProductRepository productReposistory;
    @Autowired
    private UserRepository userReposistory;

    @SuppressWarnings("null")
    public void readOrders(String filePath) {
        ObjectMapper mapper = new ObjectMapper();
        try {
            InputStream inputStream = getClass().getClassLoader().getResourceAsStream(filePath);
            List<Product> products = mapper.readValue(inputStream, new TypeReference<List<Product>>() {
            });
            for (Product product : products) {
                product.setDescription(product.getProductName());
            }
            productReposistory.saveAll(products);
        } catch (IOException e) {
            System.out.println("Unable to save products: " + e.getMessage());
        }
    }
    @SuppressWarnings("null")
    public void readUsers(String filePath) {
        ObjectMapper mapper = new ObjectMapper();
        try {
            InputStream inputStream = getClass().getClassLoader().getResourceAsStream(filePath);
            List<User> users = mapper.readValue(inputStream, new TypeReference<List<User>>() {
            });
            // for (User user : users) {
            //     product.setDescription(product.getProductName());
            // }
            System.out.println("saved users successfully;");
            userReposistory.saveAll(users);
        } catch (IOException e) {
            System.out.println("Unable to save users: " + e.getMessage());
        }
    }
}
