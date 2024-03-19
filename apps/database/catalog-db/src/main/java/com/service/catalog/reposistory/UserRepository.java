package com.service.catalog.reposistory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import com.service.catalog.models.User;

@Component
public interface UserRepository extends JpaRepository<User, Long> {
}
