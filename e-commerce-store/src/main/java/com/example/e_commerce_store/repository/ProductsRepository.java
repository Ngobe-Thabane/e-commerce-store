package com.example.e_commerce_store.repository;

import com.example.e_commerce_store.entity.Products;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductsRepository extends JpaRepository<Products , Long> {
}
