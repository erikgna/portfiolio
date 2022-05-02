package com.own.portfolio.service;
import com.own.portfolio.database.UserDAO;
import com.own.portfolio.model.User;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Objects;

@Service

public class UserService {
    private final UserDAO userDAO = new UserDAO();
    public String login(String email, String password){
        try{
            User user = userDAO.login(email);
            System.out.println(password);
            MessageDigest algorithm = MessageDigest.getInstance("SHA-256");
            byte[] messageDigest = algorithm.digest(password.getBytes(StandardCharsets.UTF_8));

            StringBuilder hexString = new StringBuilder();
            for (byte b : messageDigest) {
                hexString.append(String.format("%02X", 0xFF & b));
            }
            String passwordHex = hexString.toString();

            if(passwordHex.equals(user.getPassword())){
                return "token";
            }
        }
        catch (Exception e){
            return "null";
        }
        return "null";
    }

    public boolean createUser(User user) throws NoSuchAlgorithmException {
        if(Objects.equals(user.getPassword(), user.getConfirmPassword())){
            MessageDigest algorithm = MessageDigest.getInstance("SHA-256");
            byte[] messageDigest = algorithm.digest(user.getPassword().getBytes(StandardCharsets.UTF_8));

            StringBuilder hexString = new StringBuilder();
            for (byte b : messageDigest) {
                hexString.append(String.format("%02X", 0xFF & b));
            }
            String passwordHex = hexString.toString();

            user.setPassword(passwordHex);

            return userDAO.createUser(user);
        }
        return false;
    }

    public boolean editUser(User user) throws NoSuchAlgorithmException {
        if(Objects.equals(user.getPassword(), user.getConfirmPassword())){
            MessageDigest algorithm = MessageDigest.getInstance("SHA-256");
            byte[] messageDigest = algorithm.digest(user.getPassword().getBytes(StandardCharsets.UTF_8));

            StringBuilder hexString = new StringBuilder();
            for (byte b : messageDigest) {
                hexString.append(String.format("%02X", 0xFF & b));
            }
            String passwordHex = hexString.toString();

            user.setPassword(passwordHex);

            return userDAO.editUser(user);
        }
        return false;
    }
}
