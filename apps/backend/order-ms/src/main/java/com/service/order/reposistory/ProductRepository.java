package com.service.order.reposistory;

import com.service.order.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface ProductRepository extends JpaRepository<Product, Long> {
    // List<Product> findByName(String student);
    // List<Product> findByCategory_IdAndInventory_Id(String category_id, String
    // inventory_id);
    // List<Product> findByPriceGreaterThan(BigDecimal price);
    // @Query(value = "Select * from product_tbl p ORDER BY p.id DESC",
    // nativeQuery=true)
    // public List<Product> OrderProductById();
}