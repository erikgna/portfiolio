package com.own.portfolio.utils;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import java.security.Key;

public class Token {
    private static final Key KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    public static String getToken(String data){
        return Jwts.builder().setSubject(data).signWith(KEY).compact();
    }
}
