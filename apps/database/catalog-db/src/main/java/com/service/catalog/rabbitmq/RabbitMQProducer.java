package com.service.catalog.rabbitmq;

import java.util.List;

import org.springframework.amqp.AmqpException;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.service.catalog.models.Product;
import com.service.catalog.models.ProductMessage;
import com.service.catalog.services.ProductResponseListener;

@Component
public class RabbitMQProducer {
    @Value("${EXCHANGE_NAME}")
    private String exchangeName;

    @Value("${ROUTING_KEY}")
    private String routingKey;

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @Autowired
    private ProductResponseListener productResponseListener;

    public void sendMessage(ProductMessage productMessage) {
        try {
            rabbitTemplate.convertAndSend(
                    exchangeName, routingKey, productMessage);
        } catch (AmqpException e) {
            e.printStackTrace();
        }
    }
    public void sendResponse(List<Product> response) {
        productResponseListener.receiveResponse(response);
    }
}
