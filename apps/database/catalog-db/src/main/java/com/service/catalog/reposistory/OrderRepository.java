package com.service.catalog.reposistory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import com.service.catalog.models.Order;

@Component
public interface OrderRepository extends JpaRepository<Order, Long> {
}