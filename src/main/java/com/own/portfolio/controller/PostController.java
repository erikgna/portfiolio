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
    public ResponseEntity<ArrayList<Post>> allPosts() throws SQLException {
        ArrayList<Post> posts = postService.allPosts();

        return ResponseEntity.ok(posts);
    }

    @GetMapping("/posts/{id}")
    public ResponseEntity<Post> onePost(@PathVariable int id) throws SQLException {
        Post post = postService.onePost(id);

        return ResponseEntity.ok(post);
    }

    @PostMapping("/posts")
    @ResponseBody
    public ResponseEntity<Post> createPost(@RequestBody Post post) throws SQLException {
        postService.savePost(post);

        return ResponseEntity.status(201).body(null);
    }

    @PutMapping("/posts/edit-image/{id}")
    @ResponseBody
    public ResponseEntity<Post> updateImage(@RequestBody MultipartFile image, @PathVariable int id) throws IOException, SQLException {
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.set("Content-Type", "application/form-data");
        httpHeaders.set("Accept", "multipart/form-data");

        postService.editImage(image, id);

        return ResponseEntity.status(200).headers(httpHeaders).body(null);
    }

    @PutMapping("/posts/{id}")
    @ResponseBody
    public ResponseEntity<Post> updatePost(@RequestBody Post post, @PathVariable int id) throws SQLException {
        postService.editPost(post, id);

        return ResponseEntity.status(201).body(null);
    }

    @DeleteMapping("/posts/{id}")
    @ResponseBody
    public ResponseEntity<Post> deletePost(@PathVariable int id) throws SQLException {
        postService.deletePost(id);

        return ResponseEntity.status(200).body(null);
    }
}