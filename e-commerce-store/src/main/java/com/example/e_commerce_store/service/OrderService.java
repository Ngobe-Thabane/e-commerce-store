package com.example.e_commerce_store.service;

import com.example.e_commerce_store.dto.OrderRequest;
import com.example.e_commerce_store.entity.Orders;
import com.example.e_commerce_store.entity.Products;
import com.example.e_commerce_store.entity.User;
import com.example.e_commerce_store.repository.OrdersRepository;
import com.example.e_commerce_store.repository.ProductsRepository;
import com.example.e_commerce_store.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class OrderService {

    private final OrdersRepository ordersRepository;
    private final UserRepository userRepository;
    private final ProductsRepository productsRepository;

    public OrderService(OrdersRepository ordersRepository, UserRepository userRepository, ProductsRepository productsRepository){
        this.ordersRepository = ordersRepository;
        this.productsRepository = productsRepository;
        this.userRepository = userRepository;
    }

    public Orders addOrder(OrderRequest request){
        Products product = this.productsRepository.getReferenceById(request.getProduct_id());
        User user = this.userRepository.getReferenceById(request.getUser_id());
        Orders order = new Orders(product, user, request.getQuantity());
        return this.ordersRepository.save(order);
    }

    public  void  deleteOrder(Long id){

        if(!this.ordersRepository.existsById(id)){
            throw new RuntimeException("Order does not exist");
        }

        this.ordersRepository.deleteById(id);

    }

    public Orders getOrder(Long id){
        return  this.ordersRepository.getReferenceById(id);
    }

    public List<Orders> getListOfOrders(){
        return this.ordersRepository.findAll();
    }
}
