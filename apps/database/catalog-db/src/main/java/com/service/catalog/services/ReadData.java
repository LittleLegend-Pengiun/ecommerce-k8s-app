package com.service.catalog.services;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.service.catalog.models.Product;
import com.service.catalog.reposistory.ProductReposistory;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReadData {
    @Autowired
    private ProductReposistory productReposistory;

    @SuppressWarnings("null")
    public void readJsonFile(String filePath) {
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
            System.out.println("Unable to save users: " + e.getMessage());
        }
    }
}
