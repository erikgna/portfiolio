package com.own.portfolio.controller;

import com.own.portfolio.model.Post;
import com.own.portfolio.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;

@RestController
public class PostController{
    @Autowired
    private PostService postService;

    @GetMapping("/posts")
    public ResponseEntity<ArrayList<Post>> allPosts() {
        try{
            ArrayList<Post> posts = postService.allPosts();
            return ResponseEntity.ok(posts);
        }
        catch (SQLException e) {
            return ResponseEntity.status(502).body(null);
        }
    }

    @GetMapping("/posts/{id}")
    public ResponseEntity<Post> onePost(@PathVariable int id) {
        try{
            Post post = postService.onePost(id);
            return ResponseEntity.ok(post);
        }
        catch (SQLException e) {
            return ResponseEntity.status(502).body(null);
        }
    }

    @PostMapping("/posts")
    @ResponseBody
    public ResponseEntity<String> createPost(@RequestBody Post post) {
        try{
            postService.savePost(post);
            return ResponseEntity.status(201).body(null);
        }
        catch (SQLException e) {
            return ResponseEntity.status(502).body("An error has occurred while creating the post.");
        }
    }

    @PutMapping("/posts/edit-image/{id}")
    @ResponseBody
    public ResponseEntity<String> updateImage(@RequestBody MultipartFile image, @PathVariable int id) throws IOException {
        try{
            HttpHeaders httpHeaders = new HttpHeaders();
            httpHeaders.set("Content-Type", "application/form-data");
            httpHeaders.set("Accept", "multipart/form-data");

            postService.editImage(image, id);
            return ResponseEntity.status(200).headers(httpHeaders).body(null);
        }
        catch (SQLException e) {
            System.out.println(e);
            return ResponseEntity.status(502).body("An error has occurred while editing the image.");
        }
    }

    @PutMapping("/posts/{id}")
    @ResponseBody
    public ResponseEntity<String> updatePost(@RequestBody Post post, @PathVariable int id) {
        try{
            postService.editPost(post, id);
            return ResponseEntity.status(200).body(null);
        }
        catch (SQLException e) {
            return ResponseEntity.status(502).body("An error has occurred while editing the post.");
        }
    }

    @DeleteMapping("/posts/{id}")
    @ResponseBody
    public ResponseEntity<String> deletePost(@PathVariable int id) {
        try{
            postService.deletePost(id);
            return ResponseEntity.status(200).body(null);
        }
        catch (SQLException e) {
            return ResponseEntity.status(502).body("An error has occurred while deleting the post.");
        }
    }
}