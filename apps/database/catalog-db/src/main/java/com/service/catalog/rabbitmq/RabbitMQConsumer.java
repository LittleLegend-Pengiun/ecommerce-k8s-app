package com.service.catalog.rabbitmq;

import java.util.List;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.support.AmqpHeaders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.stereotype.Component;

import com.service.catalog.models.Product;
import com.service.catalog.models.ProductMessage;
import com.service.catalog.reposistory.ProductReposistory;

@Component
public class RabbitMQConsumer {
	@Autowired
	private ProductReposistory productReposistory;

	@Autowired
	private RabbitMQProducer rabbitMQProducer;

	@RabbitListener(queues = "#{@valueResolver.resolve('${QUEUE_NAME}')}")
	public void receiveMessage(ProductMessage productMessage, @Header(AmqpHeaders.CONSUMER_QUEUE) String queueName,
			@Header(AmqpHeaders.RECEIVED_ROUTING_KEY) String routingKey) {
		//get all products
		if (productMessage.getAction().equals("get") && productMessage.getInstance().equals("product")) {
			List<Product> allProducts = productReposistory.findAll();
			System.out.println(routingKey);
			rabbitMQProducer.sendResponse(allProducts);
		}
		// implement other methods

		System.out.println("Consumer: Received message from " + queueName);
	}
}
