package com.own.portfolio.controller;
import com.own.portfolio.model.User;
import com.own.portfolio.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.security.NoSuchAlgorithmException;
import java.sql.SQLException;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/user/login")
    @ResponseBody
    public ResponseEntity<String> findOneUser(@RequestBody User user) throws SQLException, NoSuchAlgorithmException {
        return ResponseEntity.ok(userService.login(user.getEmail(), user.getPassword()));
    }

    @PostMapping("/user/register")
    @ResponseBody
    public ResponseEntity<User> createUser(@RequestBody User user){
        try{
            userService.createUser(user);
            URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/").build().toUri();
            return ResponseEntity.created(uri).body(null);
        }
        catch (Exception e){
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(null);
        }
    }

    @PutMapping("/user/edit-user")
    @ResponseBody
    public ResponseEntity<User> editUser(@RequestBody User user){
        try{
            userService.editUser(user);
            URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/").build().toUri();
            return ResponseEntity.created(uri).body(null);
        }
        catch (Exception e){
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(null);
        }
    }

    @PostMapping("/user/password-token")
    @ResponseBody
    public ResponseEntity<String> passwordToken(@RequestBody User user){
        try{
            String response = userService.changeToken(user);
            return ResponseEntity.status(200).body(response);
        }
        catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.toString());
        }
    }

    @PostMapping("/user/change-password")
    @ResponseBody
    public ResponseEntity<String> changePassword(@RequestBody User user){
        try{
            userService.changePassword(user);
            return ResponseEntity.status(200).body(null);
        }
        catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.toString());
        }
    }
}
