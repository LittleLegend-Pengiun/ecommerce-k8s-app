package com.service.order.security;

import org.springframework.stereotype.Service;

import java.util.Base64;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.ServletException;


@Service
public class JwtUserDetailsService implements UserDetailsService {
    @Value("${secretKey}")
    private String secretKey;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return null;
    }

    public static SecretKey createSecretKey(String secretKeyString) {
        byte[] decodedKey = Base64.getDecoder().decode(secretKeyString);
        return new SecretKeySpec(decodedKey, 0, decodedKey.length, "HmacSHA256");
    }

    public Claims getAllClaimsFromToken(String tokenWithBearer) throws ServletException {

        String secretKeyString = secretKey;
        String token = tokenWithBearer.replace("Bearer ", "");
        SecretKey secretKey = createSecretKey(secretKeyString);

        return Jwts.parser()
                .verifyWith(secretKey)
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }
}
