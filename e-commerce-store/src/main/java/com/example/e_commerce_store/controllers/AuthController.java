package com.example.e_commerce_store.controllers;

import com.example.e_commerce_store.config.JwtUtil;
import com.example.e_commerce_store.entity.User;
import com.example.e_commerce_store.service.CustormUserDetailsService;
import com.example.e_commerce_store.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("/auth")
public class AuthController {

    private  final AuthenticationManager authenticationManager;
    private  final JwtUtil jwtUtil;
    private final CustormUserDetailsService userDetailsService;
    private final UserService userService;

    public  AuthController(UserService userService, AuthenticationManager authenticationManager, JwtUtil jwtUtil, CustormUserDetailsService userDetailsService){
        this.userService = userService;
        this.jwtUtil = jwtUtil;
        this.authenticationManager = authenticationManager;
        this.userDetailsService = userDetailsService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword())
        );

        var userDetails = userDetailsService.loadUserByUsername(user.getEmail());
        String token = jwtUtil.generateToken(userDetails.getUsername());
        return ResponseEntity.ok(token);
    }

    @PostMapping("/register")
    public User  addUser(@RequestBody User user){
        return  this.userService.addUser(user);
    }

}
