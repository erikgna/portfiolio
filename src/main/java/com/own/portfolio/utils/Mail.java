package com.own.portfolio.utils;

import com.own.portfolio.model.User;
import com.own.portfolio.service.UserService;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.security.NoSuchAlgorithmException;
import java.sql.SQLException;
import java.util.Properties;

public class Mail {
    Properties prop = new Properties();
    public String sendMail(User user){
        try{
            InputStream inputStream = new FileInputStream("src/main/resources/config.properties");
            prop.load(inputStream);

            Properties properties = System.getProperties();
            properties.put("mail.smtp.host", prop.getProperty("host"));
            properties.put("mail.smtp.ssl.enable", "true");
            properties.put("mail.smtp.auth", "true");

            Session session = Session.getInstance(properties, new Authenticator() {
                protected PasswordAuthentication getPasswordAuthentication(){
                    return new PasswordAuthentication(prop.getProperty("from"), prop.getProperty("password"));
                }
            });

            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(prop.getProperty("from")));
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(user.getEmail()));
            message.setSubject("Change password email confirmation");

            String token = emailToken(user.getEmail());
            user.setAccessToken(token);

            UserService userService = new UserService();
            userService.editUser(user);

            message.setText("To change your password, click in the link below. \n http://localhost:8080/user/" + token);

            Transport.send(message);

            return token;
        }
        catch (MessagingException e){
            e.printStackTrace();
        } catch (NoSuchAlgorithmException | IOException | SQLException e) {
            throw new RuntimeException(e);
        }
        return null;
    }

    static public String emailToken(String email) {
        return Token.getToken(email);
    }
}
