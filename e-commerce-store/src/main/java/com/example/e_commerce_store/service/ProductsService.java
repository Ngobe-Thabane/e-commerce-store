package com.example.e_commerce_store.service;

import com.example.e_commerce_store.entity.Products;
import com.example.e_commerce_store.repository.ProductsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductsService {
    private final ProductsRepository productsRepository;

    public  ProductsService(ProductsRepository productsRepository){
        this.productsRepository = productsRepository;
    }

    public Products addProduct(Products product){
        return  this.productsRepository.save(product);
    }

    public void deleteProduct(long id) {
         this.productsRepository.deleteById(id);
    }

    public List<Products> getAllProducts() {

        return  this.productsRepository.findAll();
    }
}
