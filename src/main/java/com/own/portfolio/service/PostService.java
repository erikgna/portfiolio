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

    public int postsPages() throws SQLException {
        return postRepository.postsPages();
    }
    public ArrayList<Post> allPosts(int page) throws SQLException {
        return postRepository.allPosts(page);
    }

    public ArrayList<Post> userPosts(int userID) throws SQLException {
        return postRepository.userPosts(userID);
    }

    public Post onePost(int id) throws SQLException {
        return postRepository.onePost(id);
    }

    public int savePost(Post post, int userID) throws SQLException {
        return postRepository.savePost(post, userID);
    }

    public String editImage(MultipartFile image, int id) throws IOException, SQLException {
        if(image == null) return "400";

        Path path = Image.saveFile(image);
        Post oldPost = onePost(id);

        if(oldPost == null) return "406";

        final String token = Token.getToken(oldPost.getTitle());

        assert path != null;
        Image.saveAtBucket(token, path);
        oldPost.setImage("https://erik-na-portfolio.s3.amazonaws.com/"+token+".jpg");
        postRepository.editPost(oldPost, id);
        return "https://erik-na-portfolio.s3.amazonaws.com/"+token+".jpg";
    }

    public int editPost(Post post, int id) throws SQLException {
        Post oldPost = postRepository.onePost(id);

        if(oldPost == null) return 406;
        if(Objects.equals(post.getTitle(), oldPost.getTitle()) && Objects.equals(post.getDescription(), oldPost.getDescription())) return 400;

        oldPost.setTitle(post.getTitle());
        oldPost.setDescription(post.getDescription());

        postRepository.editPost(oldPost, id);
        return 200;
    }

    public int deletePost(int id) throws SQLException {
        if(postRepository.onePost(id) == null) return 406;
        postRepository.deletePost(id);
        return 200;
    }
}
