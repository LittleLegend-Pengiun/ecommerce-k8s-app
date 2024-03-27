package com.service.order.reposistory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import com.service.order.models.User;

@Component
public interface UserRepository extends JpaRepository<User, Long> {
}
