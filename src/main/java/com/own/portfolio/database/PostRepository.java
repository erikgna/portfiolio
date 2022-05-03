package com.own.portfolio.database;

import com.own.portfolio.model.Post;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
public class PostRepository {
    Connection conn = StartConnection.getConnection();
    public ArrayList<Post> allPosts() {
        try {
            String sql = "SELECT * FROM posts";

            PreparedStatement statement = conn.prepareStatement(sql);

            ResultSet resultSet = statement.executeQuery();

            ArrayList<Post> posts = new ArrayList<>();
            

            if(resultSet.next()){
                posts.add(new Post(
                    resultSet.getInt("id"),
                    resultSet.getString("image"),
                    resultSet.getString("title"),
                    resultSet.getString("description"),
                    resultSet.getInt("likes"),
                    resultSet.getInt("dislikes")
                ));
            }

            return posts;
        } catch (Exception e) {
            System.out.println(e);
        }
        return null;
    }

    public Post onePost(int id) {
        try {
            String sql = "SELECT * FROM posts WHERE id = ?";

            PreparedStatement statement = conn.prepareStatement(sql);
            statement.setInt(1, id);

            ResultSet resultSet = statement.executeQuery();

            if(resultSet.next()){
                return new Post(
                        resultSet.getInt("id"),
                        resultSet.getString("image"),
                        resultSet.getString("title"),
                        resultSet.getString("description"),
                        resultSet.getInt("likes"),
                        resultSet.getInt("dislikes")
                );
            }
        } catch (Exception e) {
            System.out.println(e);
        }
        return null;
    }

    public void savePost(Post post){
        try{
            String sql = "INSERT INTO posts(image, title, description) VALUES (?,?,?)";

            PreparedStatement statement = conn.prepareStatement(sql);
            statement.setString(1, post.getImage());
            statement.setString(2, post.getTitle());
            statement.setString(3, post.getDescription());

            statement.executeUpdate();
        }
        catch (Exception e){
            System.out.println(e);
        }
    }
    public void editPost(Post post, int id){
        try{
            String sql = "UPDATE posts SET image = ?, title = ?, description = ?, likes = ?, dislikes = ? WHERE id = ?";

            PreparedStatement statement = conn.prepareStatement(sql);
            statement.setString(1, post.getImage());
            statement.setString(2, post.getTitle());
            statement.setString(3, post.getDescription());
            statement.setInt(4, post.getLikes());
            statement.setInt(5, post.getDislikes());
            statement.setInt(6, id);

            statement.executeUpdate();
        }
        catch (Exception e){
            System.out.println(e);
        }
    }

    public void deletePost(int id){
        try{
            String sql = "DELETE FROM posts WHERE id = ?";

            PreparedStatement statement = conn.prepareStatement(sql);
            statement.setInt(1, id);

            statement.executeUpdate();
        }
        catch (Exception e){
            System.out.println(e);
        }
    }
}