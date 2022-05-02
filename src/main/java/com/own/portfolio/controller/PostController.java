package com.own.portfolio.controller;

import com.own.portfolio.model.Post;
import com.own.portfolio.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class PostController {
    @Autowired
    private PostService postService;

    @GetMapping("/posts")
    public ResponseEntity<Iterable<Post>> allPosts(){
        Iterable<Post> posts = postService.allPosts();

        return ResponseEntity.ok(posts);
    }

    @GetMapping("/posts/{id}")
    public ResponseEntity<Optional<Post>> onePost(@PathVariable int id){
        Optional<Post> post = postService.onePost(id);

        return ResponseEntity.ok(post);
    }

    @PostMapping("/posts")
    public ResponseEntity<Post> createPost(@RequestBody Post post){
        postService.newPost(post);

        return ResponseEntity.status(201).body(null);
    }

    @PutMapping("/posts/{id}")
    public ResponseEntity<Post> updatePost(@RequestBody Post post, @PathVariable long id){
        System.out.println(post);
        System.out.println(id);

        return ResponseEntity.status(201).body(null);
    }

    @DeleteMapping("/posts/{id}")
    public ResponseEntity<Post> deletePost(@PathVariable int id){
        postService.deletePost(id);

        return ResponseEntity.status(200).body(null);
    }
}
