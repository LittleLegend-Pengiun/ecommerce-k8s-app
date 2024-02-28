package com.service.catalog.rabbitmq;

import org.springframework.amqp.core.Binding; 
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.Exchange; 
import org.springframework.amqp.core.Queue; 
import org.springframework.context.annotation.Bean; 
import org.springframework.context.annotation.Configuration; 

@Configuration
public class RabbitMQConfig { 

	@Bean public Queue queue() 
	{ 
		return new Queue("queue-name", false); 
	} 

	@Bean public Exchange exchange() 
	{ 
		return new DirectExchange("exchange-name"); 
	} 

	@Bean
	public Binding binding(Queue queue, Exchange exchange) 
	{ 
		return BindingBuilder.bind(queue) 
			.to(exchange) 
			.with("routing-key") 
			.noargs(); 
	} 
}
