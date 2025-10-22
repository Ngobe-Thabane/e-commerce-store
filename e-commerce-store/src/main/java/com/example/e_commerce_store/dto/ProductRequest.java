package com.example.e_commerce_store.dto;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;


@Getter
@Setter
public class ProductRequest {

    @NotBlank
    private  String name;

    @NotBlank
    private String description;

    private float price;

    @NotNull
    private MultipartFile image;
}
