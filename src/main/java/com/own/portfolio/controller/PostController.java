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
    private final String url = "http://127.0.0.1:3000";

    @CrossOrigin(origins = url)
    @GetMapping("/posts/pages")
    public ResponseEntity<Integer> postsPages() {
        try{
            int pages = postService.postsPages();
            return ResponseEntity.ok(pages);
        }
        catch (SQLException e) {
            return ResponseEntity.status(500).body(null);
        }
    }
    @CrossOrigin(origins = url)
    @GetMapping("/posts/{page}")
    public ResponseEntity<ArrayList<Post>> allPosts(@PathVariable int page) {
        try{
            ArrayList<Post> posts = postService.allPosts(page);
            return ResponseEntity.ok(posts);
        }
        catch (SQLException e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @CrossOrigin(origins = url)
    @GetMapping("/posts/user-posts/{userID}")
    public ResponseEntity<ArrayList<Post>> userPosts(@PathVariable int userID) {
        try{
            ArrayList<Post> posts = postService.userPosts(userID);
            return ResponseEntity.ok(posts);
        }
        catch (SQLException e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @CrossOrigin(origins = url)
    @GetMapping("/post/{id}")
    public ResponseEntity<Post> onePost(@PathVariable int id) {
        try{
            Post post = postService.onePost(id);
            if(post == null) return ResponseEntity.status(406).body(null);
            return ResponseEntity.ok(post);
        }
        catch (SQLException e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @CrossOrigin(origins = url)
    @PostMapping("/posts/create/{userID}")
    @ResponseBody
    public ResponseEntity<Integer> createPost(@RequestBody Post post, @PathVariable int userID) {
        try{
            if(Objects.equals(post.getTitle(), "") || Objects.equals(post.getDescription(), "")) return ResponseEntity.status(400).body(null);
            int postID = postService.savePost(post, userID);
            return ResponseEntity.status(201).body(postID);
        }
        catch (SQLException e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @CrossOrigin(origins = url)
    @PutMapping("/posts/edit-image/{id}")
    @ResponseBody
    public ResponseEntity<String> updateImage(@RequestBody MultipartFile image, @PathVariable int id) throws IOException {
        try{
            final String serviceAnswer = postService.editImage(image, id);

            if(Objects.equals(serviceAnswer, "400")) return ResponseEntity.status(400).body("No image sent.");
            if(Objects.equals(serviceAnswer, "406")) return ResponseEntity.status(406).body("Wasn't possible to find the post");

            return ResponseEntity.status(200).body(serviceAnswer);
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