package com.example.e_commerce_store.entity;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Enumerated(EnumType.STRING)
    private Roles role = Roles.USER;

    @Column(unique = true)
    private String email;

    private String name;

    @Column(nullable = false)
    private String password;

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String hashPassword){
        this.password = hashPassword;
    }

    public Roles getRole() {
        return this.role;
    }

    public String getEmail() {
        return  this.email;
    }
}
