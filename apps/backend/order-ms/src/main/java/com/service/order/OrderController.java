// package com.service.order;

// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.ResponseBody;
// import org.springframework.web.bind.annotation.RestController;

// @RestController
// @CrossOrigin
// public class OrderController {

//     @RequestMapping("/greeting")
//     public OrderMessage helloWorld() {
//         return new OrderMessage("Hello from Spring boot!");
//     }

//     @RequestMapping("/")
//     @ResponseBody
//     public String okMessage() {
//         return "OK!";
//     }

//     @RequestMapping("/test-mq")
//     public String doneMessage() {
//         // rabbitMQProducer.sendMessage("connected to RabbitMQ");
//         return "OK";
//     }
// }
