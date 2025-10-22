package com.example.e_commerce_store.dto;

import com.example.e_commerce_store.entity.Orders;
import com.example.e_commerce_store.entity.Products;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderResponse {

    private Long id;
    private ProductInfo productInfo;

    public OrderResponse (Orders order){
        this.id = order.getId();
        this.productInfo = new ProductInfo(order.getProduct(), order.getQuantity());
    }


    @Getter
    @Setter
    public static class  ProductInfo{
        private Long id;
        private String name;
        private String description;
        private float price;
        private float total;

        public  ProductInfo(Products products, int quantity){
            this.id = products.getId();
            this.name = products.getName();
            this.description = products.getDescription();
            this.price = products.getPrice();
            this.total = products.getPrice() * quantity;
        }

    }
}
