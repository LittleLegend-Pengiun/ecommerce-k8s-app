package com.service.catalog.reposistory;

import com.service.catalog.models.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InventoryReposistory extends JpaRepository<Inventory, String> {
}
