package com.service.order.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.server.ResponseStatusException;

import com.service.order.dto.Cart;
import com.service.order.services.OrderService;

import reactor.core.publisher.Mono;

@RestController
@RequestMapping("orders")
public class OrderController {

        @Autowired
        OrderService orderService;

        @SuppressWarnings("null")
        @PostMapping("/create-order")
        public Mono<ResponseEntity<String>> createOrder(@RequestBody Cart cart) {
                try {
                        WebClient client = WebClient.create("http://order-db:9092");
                        return client.post()
                                        .uri("/orders/create-order")
                                        .accept(MediaType.APPLICATION_JSON)
                                        .bodyValue(cart)
                                        .retrieve()
                                        .toEntity(String.class);
                } catch (Exception e) {
                        Mono<ResponseEntity<String>> responseMono = Mono
                                        .just(ResponseEntity.status(HttpStatus.NOT_FOUND)
                                                        .body("error"));
                        return responseMono;
                }
        }

        @GetMapping
        @SuppressWarnings("unlikely-arg-type")
        public Mono<ResponseEntity<Object>> getOrderById(@RequestParam Long orderId) {
                WebClient client = WebClient.create("http://order-db:9092");
                Mono<ResponseEntity<Object>> result = client.get()
                                .uri("/orders?orderId={orderId}", orderId)
                                .accept(MediaType.APPLICATION_JSON)
                                .retrieve()
                                .onStatus(HttpStatus.NOT_FOUND::equals,
                                                response -> Mono.error(new ResponseStatusException(HttpStatus.NOT_FOUND,
                                                                "Order Not Found")))
                                .onStatus(HttpStatus.FORBIDDEN::equals,
                                                response -> Mono.error(new ResponseStatusException(HttpStatus.FORBIDDEN,
                                                                "Forbiden")))
                                .toEntity(Object.class);
                return result;

        }

        @PutMapping("/{orderId}")
        @SuppressWarnings("unlikely-arg-type")
        public Mono<ResponseEntity<?>> updateOrder(@PathVariable Long orderId, @RequestBody Cart cart) {
                WebClient client = WebClient.create("http://order-db:9092");

                return client.put()
                                .uri("/orders/{orderId}", orderId)
                                .body(Mono.just(cart), Cart.class)
                                .retrieve()
                                .onStatus(HttpStatus.NOT_FOUND::equals,
                                                response -> Mono.error(new ResponseStatusException(HttpStatus.NOT_FOUND,
                                                                "Order Not Found")))
                                .toBodilessEntity()
                                .flatMap(responseEntity -> Mono.just(ResponseEntity.ok("Order updated!")));
        }

        @DeleteMapping("/{orderId}")
        @SuppressWarnings("unlikely-arg-type")
        public Mono<ResponseEntity<String>> deleteOrder(@PathVariable Long orderId) {
                WebClient client = WebClient.create("http://order-db:9092");
                Mono<ResponseEntity<String>> result = client.delete()
                                .uri("/orders/{orderId}", orderId)
                                .accept(MediaType.APPLICATION_JSON)
                                .retrieve()
                                .onStatus(HttpStatus.NOT_FOUND::equals,
                                                response -> Mono.error(new ResponseStatusException(HttpStatus.NOT_FOUND,
                                                                "Order Not Found")))
                                .toEntity(String.class);
                return result;
        }
}
