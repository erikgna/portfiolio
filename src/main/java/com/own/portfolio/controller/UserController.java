package com.own.portfolio.controller;
import com.own.portfolio.model.User;
import com.own.portfolio.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.net.URI;
import java.util.Objects;

@RestController
public class UserController {
    @Autowired
    private UserService userService;
    private final String url = "http://localhost:3000";

    @CrossOrigin(origins = url)
    @PostMapping("/user/login")
    @ResponseBody
    public ResponseEntity<String> findOneUser(HttpServletResponse response, @RequestBody User user) {
        try {
            final String serviceAnswer = userService.login(user.getEmail(), user.getPassword());

            if(Objects.equals(serviceAnswer, "406")) return ResponseEntity.status(406).body("Email or password not matching");
            if(Objects.equals(serviceAnswer, "400")) return ResponseEntity.status(406).body("Email invalid");

            Cookie cookie = new Cookie("Authorization", serviceAnswer);
            cookie.setSecure(true);
            cookie.setMaxAge(12*60*60);
            response.addCookie(cookie);

            return ResponseEntity.status(200).body(null);
        } catch (Exception e){
            return ResponseEntity.status(500).body("Error recovering the user.");
        }
    }

    @CrossOrigin(origins = url)
    @PostMapping("/user/register")
    @ResponseBody
    public ResponseEntity<User> createUser(@RequestBody User user){
        try{
            final int serviceAnswer = userService.createUser(user);

            return ResponseEntity.status(serviceAnswer).body(null);
        }
        catch (Exception e){
            return ResponseEntity.status(500).body(null);
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
