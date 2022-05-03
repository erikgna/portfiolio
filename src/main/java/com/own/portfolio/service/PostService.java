package com.own.portfolio.service;

import com.own.portfolio.model.Post;
import com.own.portfolio.database.PostRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class PostService{
    private final PostRepository postRepository = new PostRepository();

    public ArrayList<Post> allPosts(){
        return postRepository.allPosts();
    }

    public Post onePost(int id){
        return postRepository.onePost(id);
    }

    public void savePost(Post post){
        postRepository.savePost(post);
    }

    public void editPost(Post post, int id){
        Post oldPost = postRepository.onePost(id);

        oldPost.setImage(post.getImage());
        oldPost.setTitle(post.getTitle());
        oldPost.setDescription(post.getDescription());
        oldPost.setLikes(post.getLikes());
        oldPost.setDislikes(post.getDislikes());

        postRepository.editPost(oldPost, id);
    }

    public void deletePost(int id){
        postRepository.deletePost(id);
    }
}
