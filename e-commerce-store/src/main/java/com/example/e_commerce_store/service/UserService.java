package com.example.e_commerce_store.service;

import com.example.e_commerce_store.config.SecurityConfiguration;
import com.example.e_commerce_store.entity.User;
import com.example.e_commerce_store.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final SecurityConfiguration securityConfiguration;

    public UserService(UserRepository userRepository, SecurityConfiguration securityConfiguration){
        this.userRepository = userRepository;
        this.securityConfiguration = securityConfiguration;
    }

    public User addUser(User user){

        String password = user.getPassword();
        user.setPassword(this.securityConfiguration.passwordEncoder().encode(password));

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
