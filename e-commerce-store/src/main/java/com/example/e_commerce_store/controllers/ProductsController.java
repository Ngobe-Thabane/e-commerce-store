package com.example.e_commerce_store.controllers;

import com.example.e_commerce_store.dto.ProductRequest;
import com.example.e_commerce_store.entity.Products;
import com.example.e_commerce_store.service.ProductService;
import com.example.e_commerce_store.service.ProductsService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductsController {

    private final ProductsService productsService;
    private final ProductService productService;

    public  ProductsController(ProductsService productsService, ProductService productService){
        this.productsService = productsService;
        this.productService = productService;
    }

    @PreAuthorize("hasRole('SELLER')")
    @PostMapping("/product")
    public Products addProduct(@RequestBody Products product){
        return this.productsService.addProduct(product);
    }

    public  void deleteProduct(@RequestBody long id){
        this.productsService.deleteProduct(id);
    }

    public List<Products> getAllProducts(){
        return  this.productsService.getAllProducts();
    }

    @PostMapping(value = "/addProduct", consumes = {"multipart/form-data"})
    public ResponseEntity<?> createProduct(@ModelAttribute @Valid ProductRequest request) {

        // ✅ Step 1: Validate data (Spring does this automatically with @Valid)
        // ✅ Step 2: Upload image to MinIO
        String imageUrl = productService.uploadImage(request.getImage());

        // ✅ Step 3: Save product to DB (pseudo code)
        // Product product = new Product(request.getName(), request.getDescription(), imageUrl);
        // productRepository.save(product);

        return ResponseEntity.ok("Product created with image: " + imageUrl);
    }

}
