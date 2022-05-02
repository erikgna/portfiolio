package com.own.portfolio.database;

import com.own.portfolio.model.User;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class UserDAO {
    Connection conn = StartConnection.getConnection();
    public User login(String email) {
        try {
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
        } catch (Exception e) {
            System.out.println(e);
        }
        return null;
    }

    public boolean createUser(User user){
        try{
            String sql = "INSERT INTO users(id, name, email, password) VALUES (?,?,?,?)";

            PreparedStatement statement = conn.prepareStatement(sql);
            statement.setLong(1, user.getId());
            statement.setString(2, user.getName());
            statement.setString(3, user.getEmail());
            statement.setString(4, user.getPassword());

            statement.executeUpdate();
            return true;
        }
        catch (Exception e){
            System.out.println(e);
        }
        return false;
    }

    public boolean editUser(User user){
        try{
            String sql = "UPDATE users SET name = ?, password = ? WHERE email = ?";

            PreparedStatement statement = conn.prepareStatement(sql);
            statement.setString(1, user.getName());
            statement.setString(2, user.getPassword());
            statement.setString(3, user.getEmail());

            statement.executeUpdate();

            return true;
        }
        catch (Exception e){
            System.out.println(e);
        }
        return false;
    }
}
