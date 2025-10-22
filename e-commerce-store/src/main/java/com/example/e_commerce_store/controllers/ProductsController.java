package com.example.e_commerce_store.controllers;

import com.example.e_commerce_store.dto.ProductRequest;
import com.example.e_commerce_store.entity.Products;
import com.example.e_commerce_store.service.ProductService;
import com.example.e_commerce_store.service.ProductsService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/products")
public class ProductsController {

    private final ProductsService productsService;
    private final ProductService productService;

    public  ProductsController(ProductsService productsService, ProductService productService){
        this.productsService = productsService;
        this.productService = productService;
    }

    @DeleteMapping("/{id}")
    public  String deleteProduct(@PathVariable long id){
        this.productsService.deleteProduct(id);
        return  "Product deleted";
    }

    @GetMapping("/{id}")
    public Products getProduct(@PathVariable Long id){
        return this.productsService.getProduct(id);
    }

    @GetMapping()
    public List<Products> getAllProducts(){
        return  this.productsService.getAllProducts();
    }

    @PostMapping(consumes = {"multipart/form-data"})
    public Products createProduct(@ModelAttribute @Valid ProductRequest request) {
        String imageUrl = productService.uploadImage(request.getImage());

        return this.productsService.addProduct(request, imageUrl);
    }

}
