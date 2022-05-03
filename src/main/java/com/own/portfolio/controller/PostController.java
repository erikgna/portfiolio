package com.own.portfolio.controller;

import com.own.portfolio.model.Post;
import com.own.portfolio.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
public class PostController{
    @Autowired
    private PostService postService;

    @GetMapping("/posts")
    public ResponseEntity<ArrayList<Post>> allPosts(){
        ArrayList<Post> posts = postService.allPosts();

        return ResponseEntity.ok(posts);
    }

    @GetMapping("/posts/{id}")
    public ResponseEntity<Post> onePost(@PathVariable int id){
        Post post = postService.onePost(id);

        return ResponseEntity.ok(post);
    }

    @PostMapping("/posts")
    @ResponseBody
    public ResponseEntity<Post> createPost(@RequestBody Post post){
        postService.savePost(post);

        return ResponseEntity.status(201).body(null);
    }

    @PutMapping("/posts/{id}")
    @ResponseBody
    public ResponseEntity<Post> updatePost(@RequestBody Post post, @PathVariable int id){
        postService.editPost(post, id);

        return ResponseEntity.status(201).body(null);
    }

    @DeleteMapping("/posts/{id}")
    @ResponseBody
    public ResponseEntity<Post> deletePost(@PathVariable int id){
        postService.deletePost(id);

        return ResponseEntity.status(200).body(null);
    }
}