package com.own.portfolio.service;

import com.own.portfolio.database.UserRepository;
import com.own.portfolio.model.User;
import com.own.portfolio.utils.Mail;
import com.own.portfolio.utils.Password;
import com.own.portfolio.utils.Token;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;
import java.sql.SQLException;
import java.util.Objects;

@Service

public class UserService {
    private final UserRepository userRepository = new UserRepository();
    public String login(String email, String password) throws SQLException {
        if(email.length() < 6) return "400";

        final User dbUser = userRepository.oneUser(email);
        if(dbUser == null) return "406";

        if(Password.passwordsMatches(password, dbUser.getPassword())){
            JSONObject jsonToken = new JSONObject();
            jsonToken.put("userID", dbUser.getId());
            jsonToken.put("email", dbUser.getEmail());
            jsonToken.put("name", dbUser.getName());
            final String token = Token.getToken(jsonToken.toString());
            jsonToken.put("Authorization", token);
            jsonToken.remove("email");
            dbUser.setAccessToken(token);
            userRepository.editUser(dbUser);
            return jsonToken.toString();
        }
        return "406";
    }

    public int createUser(User user) throws SQLException {
        if(user.getEmail().length() <= 6
            || user.getPassword().length() < 6
                || user.getConfirmPassword().length() < 6
            || user.getName().length() < 6) return 406;

        if(Objects.equals(user.getPassword(), user.getConfirmPassword())){
            user.setPassword(Password.getHashedPassword(user.getPassword()));
            userRepository.createUser(user);

            return 200;
        }

        return 406;
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
