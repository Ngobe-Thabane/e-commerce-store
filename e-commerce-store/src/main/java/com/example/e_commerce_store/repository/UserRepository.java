package com.example.e_commerce_store.repository;

import com.example.e_commerce_store.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
   Optional <User> findByEmail(String email);
}
