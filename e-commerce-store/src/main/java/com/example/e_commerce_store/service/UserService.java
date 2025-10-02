package com.example.e_commerce_store.service;

import com.example.e_commerce_store.entity.User;
import com.example.e_commerce_store.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public User addUser(User user){
        return this.userRepository.save(user);
    }

    public User getUser(String email){
        return  this.userRepository.findByEmail(email);
    }

    public void deleteUser(long id){
        this.userRepository.deleteById(id);
    }

    public List<User> getAllUsers(){
        return this.userRepository.findAll();
    }
}
