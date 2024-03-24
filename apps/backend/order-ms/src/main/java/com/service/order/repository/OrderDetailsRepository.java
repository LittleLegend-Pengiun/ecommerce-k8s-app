package com.service.order.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import com.service.order.models.OrderDetail;

@Component
public interface OrderDetailsRepository extends JpaRepository<OrderDetail, Long> {
    ArrayList<OrderDetail> findByOrderOrderId(Long orderId);

    void deleteByOrderOrderId(Long orderId);
}
