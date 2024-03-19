package com.service.catalog;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.service.catalog.services.ReadData;

import jakarta.annotation.PostConstruct;

@SpringBootApplication
public class CatalogApplication {
	@Autowired
	public ReadData readData;
	private static final Logger logger = LoggerFactory.getLogger(CatalogApplication.class);
	public static void main(String[] args) {
		SpringApplication.run(CatalogApplication.class, args);
	}
	@PostConstruct
    public void init()  {
		readData.readCatalogProducts("catalog.json");
		readData.readUsers("user.json");
		logger.info("Users Saved!");
    }
	// @Override
    // public void run(String... args) throws Exception {
	// 	readData.readJsonFile("catalog.json");
	// 	System.out.println("Users Saved!");
    // }
}