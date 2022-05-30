package com.own.portfolio.service;

import com.own.portfolio.model.Post;
import com.own.portfolio.database.PostRepository;
import com.own.portfolio.utils.Image;
import com.own.portfolio.utils.Token;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;

@Service
public class PostService{
    private final PostRepository postRepository = new PostRepository();

    public ArrayList<Post> allPosts() throws SQLException {
        return postRepository.allPosts();
    }

    public Post onePost(int id) throws SQLException {
        return postRepository.onePost(id);
    }

    public void savePost(Post post) throws SQLException {
        postRepository.savePost(post);
    }

    public void editImage(MultipartFile image, int id) throws IOException, SQLException {
        Image.saveFile(image);
        Post post = onePost(id);
        final String token = Token.getToken(post.getTitle());
        Image.saveAtBucket(token);
        post.setImage("https://erik-na-portfolio.s3.amazonaws.com/"+token);
        editPost(post, id);
    }

    public void editPost(Post post, int id) throws SQLException {
        Post oldPost = postRepository.onePost(id);

        oldPost.setImage(post.getImage());
        oldPost.setTitle(post.getTitle());
        oldPost.setDescription(post.getDescription());
        oldPost.setCreatedAt(post.getCreatedAt());

        postRepository.editPost(oldPost, id);
    }

    public void deletePost(int id) throws SQLException {
        postRepository.deletePost(id);
    }
}
