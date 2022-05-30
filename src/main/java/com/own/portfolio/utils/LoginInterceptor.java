package com.own.portfolio.utils;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.own.portfolio.database.UserRepository;
import io.jsonwebtoken.Jwts;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Base64;

@Component
public class LoginInterceptor implements HandlerInterceptor {
    UserRepository userRepository;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        final String headerToken = request.getHeader("Authorization");
        if(headerToken == null) return true;

        String[] chunks = headerToken.split("\\.");
        Base64.Decoder decoder = Base64.getUrlDecoder();
        String payload = new String(decoder.decode(chunks[1]));
        //userRepository.oneUser();
        System.out.println(payload);
        return true;
    }
}
