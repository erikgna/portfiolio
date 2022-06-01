package com.own.portfolio.service;

import com.own.portfolio.model.Post;
import com.own.portfolio.database.PostRepository;
import com.own.portfolio.utils.Image;
import com.own.portfolio.utils.Token;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Objects;

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

    public int editImage(MultipartFile image, int id) throws IOException, SQLException {
        if(image == null) return 400;

        Path path = Image.saveFile(image);
        Post oldPost = onePost(id);

        if(oldPost == null) return 406;

        final String token = Token.getToken(oldPost.getTitle());

        assert path != null;
        Image.saveAtBucket(token, path);
        oldPost.setImage("https://erik-na-portfolio.s3.amazonaws.com/"+token+".jpg");
        editPost(oldPost, id);
        return 200;
    }

    public int editPost(Post post, int id) throws SQLException {
        Post oldPost = postRepository.onePost(id);

        if(oldPost == null) return 406;
        if(Objects.equals(post.getTitle(), oldPost.getTitle()) && Objects.equals(post.getDescription(), oldPost.getDescription())) return 400;

        oldPost.setImage(post.getImage());
        oldPost.setTitle(post.getTitle());
        oldPost.setDescription(post.getDescription());
        oldPost.setCreatedAt(post.getCreatedAt());

        postRepository.editPost(oldPost, id);
        return 200;
    }

    public int deletePost(int id) throws SQLException {
        if(postRepository.onePost(id) == null) return 406;
        postRepository.deletePost(id);
        return 200;
    }
}
