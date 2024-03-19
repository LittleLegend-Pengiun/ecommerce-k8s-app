package com.service.order.rabbitmq;

import org.springframework.amqp.AmqpException;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.service.order.models.ProductMessage;

@Component
public class RabbitMQProducer {
    @Value("${EXCHANGE_NAME}")
    private String exchangeName;

    @Value("${ROUTING_KEY}")
    private String routingKey;

    @Autowired
    private RabbitTemplate rabbitTemplate;

    public void sendMessage(ProductMessage productMessage) {
        try {
            rabbitTemplate.convertAndSend(
                    exchangeName, routingKey, productMessage);
        } catch (AmqpException e) {
            e.printStackTrace();
        }
    }
    public void sendMessageOrder(ProductMessage productMessage) {
        try {
            rabbitTemplate.convertAndSend(
                    exchangeName, routingKey, productMessage);
        } catch (AmqpException e) {
            e.printStackTrace();
        }
    }
}
