package com.own.portfolio.service;

import com.own.portfolio.database.UserRepository;
import com.own.portfolio.model.User;
import com.own.portfolio.utils.Mail;
import com.own.portfolio.utils.Password;
import com.own.portfolio.utils.Token;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;
import java.sql.SQLException;
import java.util.Objects;

@Service

public class UserService {
    private final UserRepository userRepository = new UserRepository();
    public String login(String email, String password) throws NoSuchAlgorithmException, SQLException {
        final String hashedPassword = Password.getHashedPassword(password);
        final User dbUser = userRepository.oneUser(email);
        if(Objects.equals(hashedPassword, dbUser.getPassword())){
            return Token.getToken(dbUser.toString());
        }
        return null;
    }

    public void createUser(User user) throws NoSuchAlgorithmException, SQLException {
        if(Objects.equals(user.getPassword(), user.getConfirmPassword())){
            user.setPassword(Password.getHashedPassword(user.getPassword()));
            userRepository.createUser(user);
        }
    }

    public void editUser(User user) throws NoSuchAlgorithmException, SQLException {
        final String hashedPassword = Password.getHashedPassword(user.getPassword());
        final User oldUser = userRepository.oneUser(user.getEmail());
        if(Objects.equals(hashedPassword, oldUser.getPassword())){
            userRepository.editUser(user);
        }
    }

    public String changeToken(User user){
        Mail mail = new Mail();
        return mail.sendMail(user);
    }

    public void changePassword(User user) throws SQLException {
        if(Objects.equals(userRepository.oneUser(user.getEmail()).getAccessToken(), user.getAccessToken())){
            if(Objects.equals(user.getPassword(), user.getConfirmPassword())){ userRepository.editPassword(user); }
        }
    }
}
