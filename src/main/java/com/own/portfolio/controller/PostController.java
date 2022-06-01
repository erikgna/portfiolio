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
import java.util.Objects;

@RestController
public class PostController{
    @Autowired
    private PostService postService;
    private final String url = "http://localhost:3000";

    @CrossOrigin(origins = url)
    @GetMapping("/posts")
    public ResponseEntity<ArrayList<Post>> allPosts() {
        try{
            ArrayList<Post> posts = postService.allPosts();
            return ResponseEntity.ok(posts);
        }
        catch (SQLException e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @CrossOrigin(origins = url)
    @GetMapping("/posts/{id}")
    public ResponseEntity<Post> onePost(@PathVariable int id) {
        try{
            Post post = postService.onePost(id);
            if(post == null) return ResponseEntity.status(406).body(null);
            return ResponseEntity.ok(post);
        }
        catch (SQLException e) {
            return ResponseEntity.status(502).body(null);
        }
    }

    @CrossOrigin(origins = url)
    @PostMapping("/posts")
    @ResponseBody
    public ResponseEntity<String> createPost(@RequestBody Post post) {
        try{
            if(Objects.equals(post.getTitle(), "") || Objects.equals(post.getDescription(), "")) return ResponseEntity.status(400).body("Title or description was empty.");
            postService.savePost(post);
            return ResponseEntity.status(201).body(null);
        }
        catch (SQLException e) {
            return ResponseEntity.status(500).body("An error has occurred while creating the post.");
        }
    }

    @CrossOrigin(origins = url)
    @PutMapping("/posts/edit-image/{id}")
    @ResponseBody
    public ResponseEntity<String> updateImage(@RequestBody MultipartFile image, @PathVariable int id) throws IOException {
        try{
            HttpHeaders httpHeaders = new HttpHeaders();
            httpHeaders.set("Content-Type", "application/form-data");
            httpHeaders.set("Accept", "multipart/form-data");

            final int serviceAnswer = postService.editImage(image, id);

            if(serviceAnswer == 400) return ResponseEntity.status(serviceAnswer).body("No image sent.");
            if(serviceAnswer == 406) return ResponseEntity.status(serviceAnswer).body("Wasn't possible to find the post");

            return ResponseEntity.status(200).headers(httpHeaders).body(null);
        }
        catch (SQLException e) {
            return ResponseEntity.status(500).body("An error has occurred while editing the image.");
        }
    }

    @CrossOrigin(origins = url)
    @PutMapping("/posts/{id}")
    @ResponseBody
    public ResponseEntity<String> updatePost(@RequestBody Post post, @PathVariable int id) {
        try{
            if(Objects.equals(post.getTitle(), "") || Objects.equals(post.getDescription(), "")) return ResponseEntity.status(400).body("Title or description was empty.");
            final int serviceAnswer = postService.editPost(post, id);

            if(serviceAnswer == 400) return ResponseEntity.status(serviceAnswer).body("Title and description are the same");
            if(serviceAnswer == 406) return ResponseEntity.status(serviceAnswer).body("Wasn't possible to find the post");

            return ResponseEntity.status(200).body(null);
        }
        catch (SQLException e) {
            return ResponseEntity.status(500).body("An error has occurred while editing the post.");
        }
    }

    @CrossOrigin(origins = url)
    @DeleteMapping("/posts/{id}")
    @ResponseBody
    public ResponseEntity<String> deletePost(@PathVariable int id) {
        try{
            final int serviceAnswer = postService.deletePost(id);
            return ResponseEntity.status(serviceAnswer).body(null);
        }
        catch (SQLException e) {
            return ResponseEntity.status(500).body("An error has occurred while deleting the post.");
        }
    }
}