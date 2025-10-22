package com.example.e_commerce_store.entity;

import com.example.e_commerce_store.dto.ProductRequest;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "products")
@Getter
@Setter
@NoArgsConstructor
public class Products {

    public Products(ProductRequest request, String imageUrl){
        this.imageURL = imageUrl;
        this.name = request.getName();
        this.description = request.getDescription();
        this.price = request.getPrice();
    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String imageURL;

    @Column(nullable = false)
    private float price;
}
