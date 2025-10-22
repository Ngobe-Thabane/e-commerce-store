package com.example.e_commerce_store.repository;

import com.example.e_commerce_store.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrdersRepository extends JpaRepository<Orders, Long> {
}
