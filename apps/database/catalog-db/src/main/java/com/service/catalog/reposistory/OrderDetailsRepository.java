package com.service.catalog.reposistory;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import com.service.catalog.models.OrderDetail;

@Component
public interface OrderDetailsRepository extends JpaRepository<OrderDetail, Long> {
    ArrayList<OrderDetail> findByOrderOrderId(Long orderId);

    void deleteByOrderOrderId(Long orderId);
}
