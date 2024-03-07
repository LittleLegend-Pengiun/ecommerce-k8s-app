package com.service.catalog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.service.catalog.rabbitmq.RabbitMQProducer;

@RestController
@CrossOrigin
public class CatalogController {
	
	@Autowired private RabbitMQProducer rabbitMQProducer;
	
    @RequestMapping("/greeting")
    public CatalogMessage helloWorld() {
        return new CatalogMessage("Hello from Spring boot!");
    }

    @RequestMapping("/")
    @ResponseBody
    public String okMessage() {
        return "OK!";
    }
    
    @RequestMapping("/test-mq")
    public String doneMessage() {
    	rabbitMQProducer.sendMessage("connected to RabbitMQ");
    	return "OK";
    }
}