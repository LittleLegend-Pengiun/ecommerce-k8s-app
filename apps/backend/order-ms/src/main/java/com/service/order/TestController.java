package com.service.order;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class TestController {

    @GetMapping
    public ResponseEntity<String> okMessage() {
        return ResponseEntity.status(HttpStatus.FOUND).body("OK");
    }

    // @RequestMapping("/test-mq")
    // public String doneMessage() {
    //     rabbitMQProducer.sendMessage("connected to RabbitMQ");
    //     return "OK";
    // }
}
