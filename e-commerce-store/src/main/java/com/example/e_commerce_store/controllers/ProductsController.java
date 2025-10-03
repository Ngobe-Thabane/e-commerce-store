package com.example.e_commerce_store.controllers;

import com.example.e_commerce_store.entity.Products;
import com.example.e_commerce_store.service.ProductsService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductsController {

    private final ProductsService productsService;

    public  ProductsController(ProductsService productsService){
        this.productsService = productsService;
    }

    @PreAuthorize("hasRole('SELLER')")
    @PostMapping
    public Products addProduct(@RequestBody Products product){
        System.out.println(product);
        return this.productsService.addProduct(product);
    }

    @PreAuthorize("hasRole('SELLER')")
    @DeleteMapping
    public  void deleteProduct(@RequestBody long id){
        this.productsService.deleteProduct(id);
    }

    @GetMapping
    public List<Products> getAllProducts(){
        return  this.productsService.getAllProducts();
    }

}
