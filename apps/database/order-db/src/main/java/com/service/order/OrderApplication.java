package com.service.order;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.service.order.services.ReadData;
import jakarta.annotation.PostConstruct;

@SpringBootApplication
public class OrderApplication {
	@Autowired
	public ReadData readData;
	private static final Logger logger = LoggerFactory.getLogger(OrderApplication.class);
	public static void main(String[] args) {
		SpringApplication.run(OrderApplication.class, args);
	}
	@PostConstruct
    public void init()  {
		readData.readOrders("catalog.json");
		readData.readUsers("user.json");
		logger.info("DATA SAVED !");
    }
}