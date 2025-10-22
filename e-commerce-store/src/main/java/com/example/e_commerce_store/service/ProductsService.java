package com.example.e_commerce_store.service;

import com.example.e_commerce_store.dto.ProductRequest;
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

    public Products addProduct(ProductRequest request, String imageUrl){
        Products product = new Products(request, imageUrl);
        return  this.productsRepository.save(product);
    }

    public Products getProduct(Long id){

        if(!this.productsRepository.existsById(id)){
            throw new RuntimeException("Product does not exist");
        }

        return this.productsRepository.findById(id).get();
    }

    public void deleteProduct(long id) {

        if(!this.productsRepository.existsById(id)){
            throw  new RuntimeException("Order does not exits");
        }

        this.productsRepository.deleteById(id);
    }

    public List<Products> getAllProducts() {

        return  this.productsRepository.findAll();
    }
}
