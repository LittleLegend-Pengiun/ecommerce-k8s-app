package com.service.catalog;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class CatalogController {
    
    @RequestMapping("/data")
    public CatalogMessage helloWorld() {
        return new CatalogMessage("Hello from Spring boot!");
    }
}