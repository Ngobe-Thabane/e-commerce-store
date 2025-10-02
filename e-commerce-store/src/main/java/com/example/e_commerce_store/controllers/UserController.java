package com.example.e_commerce_store.controllers;

import com.example.e_commerce_store.entity.User;
import com.example.e_commerce_store.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public  UserController(UserService userService){
        this.userService = userService;
    }

    @GetMapping
    public List<User> getUsers(){
        return this.userService.getAllUsers();
    }

    @PostMapping("/user")
    public User  addUser(@RequestBody User user){
        return  this.userService.addUser(user);
    }

}
