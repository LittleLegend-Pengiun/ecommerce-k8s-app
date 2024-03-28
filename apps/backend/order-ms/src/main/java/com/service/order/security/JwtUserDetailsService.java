package com.service.order.security;

import org.springframework.stereotype.Service;

import java.util.Base64;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import org.springframework.beans.factory.annotation.Value;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.ServletException;


@Service
public class JwtUserDetailsService {
    @Value("${secretkey}")
    private String secretKey;

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
