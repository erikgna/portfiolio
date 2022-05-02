package com.own.portfolio.controller;
import com.own.portfolio.model.User;
import com.own.portfolio.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    @ResponseBody
    public ResponseEntity<String> findOneUser(@RequestBody User user){
        return ResponseEntity.ok(userService.login(user.getEmail(), user.getPassword()));
    }

    @PostMapping("/register")
    @ResponseBody
    public ResponseEntity<User> createUser(@RequestBody User user){
        try{
            boolean response = userService.createUser(user);
            if (!response){
                return ResponseEntity.status(400).body(null);
            }
            URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/").build().toUri();
            return ResponseEntity.created(uri).body(null);
        }
        catch (Exception e){
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(null);
        }
    }

    @PutMapping("/edit-user")
    @ResponseBody
    public ResponseEntity<User> editUser(@RequestBody User user){
        try{
            boolean response = userService.editUser(user);
            if (!response){
                return ResponseEntity.status(400).body(null);
            }
            URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/").build().toUri();
            return ResponseEntity.created(uri).body(null);
        }
        catch (Exception e){
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(null);
        }
    }
}
