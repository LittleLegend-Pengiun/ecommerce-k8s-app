package com.service.catalog.reposistory;

import com.service.catalog.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryReposistory extends JpaRepository<Category, String> {

}
