package com.own.portfolio.utils;

import org.mindrot.jbcrypt.BCrypt;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Arrays;

public class Password {
    public static String getHashedPassword(String passwordToHash) {
        return BCrypt.hashpw(passwordToHash, BCrypt.gensalt(12));
    }
    public static boolean passwordsMatches(String password, String passwordFromDB){
        return BCrypt.checkpw(password, passwordFromDB);
    }

}
