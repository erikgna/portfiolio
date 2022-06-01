package com.own.portfolio.database;

import com.own.portfolio.model.Post;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
public class PostRepository {
    Connection conn = StartConnection.getConnection();
    public ArrayList<Post> allPosts() throws SQLException {
        String sql = "SELECT * FROM posts";
        PreparedStatement statement = conn.prepareStatement(sql);
        ResultSet resultSet = statement.executeQuery();
        ArrayList<Post> posts = new ArrayList<>();

        while(resultSet.next()){
            posts.add(new Post(
                resultSet.getInt("id"),
                resultSet.getString("image"),
                resultSet.getString("title"),
                resultSet.getString("description"),
                resultSet.getTimestamp("createdAt")
            ));
        }
        return posts;
    }

    public Post onePost(int id) throws SQLException {
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
                    resultSet.getTimestamp("createdAt")
            );
        }
        return null;
    }

    public void savePost(Post post) throws SQLException{
        String sql = "INSERT INTO posts(title, description) VALUES (?,?)";
        PreparedStatement statement = conn.prepareStatement(sql);
        statement.setString(1, post.getTitle());
        statement.setString(2, post.getDescription());
        statement.executeUpdate();
    }
    public void editPost(Post post, int id) throws SQLException {
        String sql = "UPDATE posts SET image = ?, title = ?, description = ? WHERE id = ?";
        PreparedStatement statement = conn.prepareStatement(sql);
        statement.setString(1, post.getImage());
        statement.setString(2, post.getTitle());
        statement.setString(3, post.getDescription());
        statement.setInt(4, id);
        statement.executeUpdate();
    }

    public void deletePost(int id) throws SQLException {
        String sql = "DELETE FROM posts WHERE id = ?";
        PreparedStatement statement = conn.prepareStatement(sql);
        statement.setInt(1, id);
        statement.executeUpdate();
    }
}