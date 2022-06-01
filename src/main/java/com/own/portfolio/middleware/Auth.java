package com.own.portfolio.middleware;

import com.own.portfolio.database.UserRepository;
import com.own.portfolio.model.User;
import org.json.JSONObject;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.Base64;
import java.util.Objects;
import java.util.stream.Collectors;

@Component
public class Auth implements HandlerInterceptor {
    UserRepository userRepository = new UserRepository();

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        final String requestName = request.getHeader("Request-Name");
        if(Objects.equals(requestName, "register") || Objects.equals(requestName, "login")) return true;

        final String method = request.getMethod();

        if(method.equalsIgnoreCase("post") || method.equalsIgnoreCase("put") || method.equalsIgnoreCase("delete")){
            String token = "";
            final Cookie[] cookies = request.getCookies();
            if (cookies != null) {
                for (Cookie cookie : cookies) {
                    if (cookie.getName().equals( "Authorization" )) token = cookie.getValue();
                }
            }

            if(!Objects.equals(token, "")) {
                String[] chunks = token.split("\\.");
                Base64.Decoder decoder = Base64.getUrlDecoder();
                String payload = new String(decoder.decode(chunks[1]));

                JSONObject payloadDecoded = new JSONObject(payload);
                if (payloadDecoded.getInt("exp") > (System.currentTimeMillis() / 1000)) {
                    JSONObject decodedSubject = new JSONObject(new JSONObject(payload).getString("sub"));

                    User user = userRepository.oneUser(decodedSubject.getString("email"));
                    return Objects.equals(user.getAccessToken(), token);
                }
            }
            response.setStatus(403);
            return false;
        }
        return true;
    }
}
