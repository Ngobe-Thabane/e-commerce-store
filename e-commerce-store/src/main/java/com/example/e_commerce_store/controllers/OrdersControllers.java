package com.example.e_commerce_store.controllers;

import com.example.e_commerce_store.dto.OrderRequest;
import com.example.e_commerce_store.dto.OrderResponse;
import com.example.e_commerce_store.entity.Orders;
import com.example.e_commerce_store.service.OrderService;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/orders")
public class OrdersControllers {

    private final OrderService service;

    public OrdersControllers(OrderService service){
        this.service = service;
    }

    @PostMapping()
    public OrderResponse addOrder(@RequestBody OrderRequest request){
        Orders order = this.service.addOrder(request);
        return  new OrderResponse(order);
    }

    @DeleteMapping("/{id}")
    public String  deleteOrder(@PathVariable Long id){
        this.service.deleteOrder(id);
        return "Order deleted";

    }

    @GetMapping("{id}")
    public OrderResponse getOrder(@PathVariable Long id){
        Orders order = this.service.getOrder(id);
        return new OrderResponse(order);
    }

    @GetMapping()
    public List<Orders> getListOfOrders(){
        return this.service.getListOfOrders();
    }
}
