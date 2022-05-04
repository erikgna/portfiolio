package com.own.portfolio.database;

import com.own.portfolio.model.User;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class UserRepository {
    Connection conn = StartConnection.getConnection();
    public User oneUser(String email) throws SQLException {
        String sql = "SELECT * FROM users WHERE email = ?";
        PreparedStatement statement = conn.prepareStatement(sql);
        statement.setString(1, email);
        ResultSet resultSet = statement.executeQuery();

        User user = new User();

        if(resultSet.next()){
            user.setId(resultSet.getLong("id"));
            user.setName(resultSet.getString("name"));
            user.setEmail(resultSet.getString("email"));
            user.setPassword(resultSet.getString("password"));
        }
        return user;
    }

    public void createUser(User user) throws SQLException {
        String sql = "INSERT INTO users(id, name, email, password) VALUES (?,?,?,?)";

        PreparedStatement statement = conn.prepareStatement(sql);
        statement.setLong(1, user.getId());
        statement.setString(2, user.getName());
        statement.setString(3, user.getEmail());
        statement.setString(4, user.getPassword());

        statement.executeUpdate();
    }

    public void editUser(User user) throws SQLException {
        String sql = "UPDATE users SET name = ?, access_token = ? WHERE email = ?";

        PreparedStatement statement = conn.prepareStatement(sql);
        statement.setString(1, user.getName());
        statement.setString(2, user.getEmail());
        statement.setString(3, user.getAccessToken());

        statement.executeUpdate();
    }
    public void editPassword(User user) throws SQLException {
        String sql = "UPDATE users SET password = ? WHERE email = ?";

        PreparedStatement statement = conn.prepareStatement(sql);
        statement.setString(1, user.getPassword());
        statement.setString(2, user.getEmail());

        statement.executeUpdate();
    }

}
