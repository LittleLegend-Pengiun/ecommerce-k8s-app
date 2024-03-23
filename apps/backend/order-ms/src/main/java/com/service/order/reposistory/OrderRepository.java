package com.service.order.reposistory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import com.service.order.models.Order;

@Component
public interface OrderRepository extends JpaRepository<Order, Long> {
}