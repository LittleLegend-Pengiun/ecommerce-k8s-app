package com.service.order.models;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class ValueResolver {
    @Value("${QUEUE_NAME}")
    private String queueName;

    public String resolve(String value) {
        return queueName;
    }
}
