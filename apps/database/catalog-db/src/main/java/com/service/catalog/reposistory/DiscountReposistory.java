package com.service.catalog.reposistory;

import com.service.catalog.models.Discount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiscountReposistory extends JpaRepository<Discount, String> {
}
