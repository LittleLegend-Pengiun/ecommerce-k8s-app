package com.service.order.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Component
public class OrderServiceInterceptorAppConfig implements WebMvcConfigurer {
   @Autowired
   OrderServiceInterceptor orderServiceInterceptor;

   @SuppressWarnings("null")
   @Override
   public void addInterceptors(InterceptorRegistry registry) {
      registry.addInterceptor(orderServiceInterceptor).addPathPatterns("/orders/**");
   }
}