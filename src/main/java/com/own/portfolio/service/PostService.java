package com.own.portfolio.service;

import com.own.portfolio.database.PostDAO;
import com.own.portfolio.model.Post;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service

public class PostService {
    private PostDAO postDAO;

    public Iterable<Post> allPosts(){
        return postDAO.findAll();
    }

    public Optional<Post> onePost(int id){
        return postDAO.findById(id);
    }

    public void newPost(Post post){
        postDAO.save(post);
    }

    public void editPost(Post post, int id){
        Post oldPost = postDAO.findById(id).get();

        oldPost.setImage(post.getImage());
        oldPost.setTitle(post.getTitle());
        oldPost.setDescription(post.getDescription());
        oldPost.setLikes(post.getLikes());
        oldPost.setDislikes(post.getDislikes());

        postDAO.save(oldPost);
    }

    public void deletePost(int id){
        postDAO.deleteById(id);
    }
}
