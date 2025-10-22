package com.example.e_commerce_store.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderRequest {

    private Long product_id;

    private Long user_id;

    private int quantity;
}
