package com.service.order.services;

import java.util.List;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;

import org.springframework.stereotype.Service;

import com.service.order.models.Product;

@Service
public class ProductResponseListener {
    private final BlockingQueue<List<Product>> responseQueue = new LinkedBlockingQueue<>();

    public void receiveResponse(List<Product> response) {
        responseQueue.offer(response);
    }

    public List<Product> waitForResponse() {
        try {
            return responseQueue.take();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            throw new RuntimeException("Interrupted while waiting for response", e);
        }
    }
}
