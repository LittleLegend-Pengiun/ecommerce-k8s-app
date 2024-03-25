package com.service.order.security;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.UnsupportedJwtException;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class OrderServiceInterceptor implements HandlerInterceptor {
   @Autowired
   public JwtUserDetailsService jwtUserDetailsService;

   @SuppressWarnings("null")
   @Override
   public boolean preHandle(HttpServletRequest request,
         HttpServletResponse response,
         Object handler) throws ServletException, IOException {
      System.out.println("Pre Handle method is Calling");

      String authorizationHeader = request.getHeader("Authorization");
      if (authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")) {
         sendErrorResponse(response, HttpServletResponse.SC_UNAUTHORIZED, "Missing or invalid Authorization header");
         return false;
      }

      String token = authorizationHeader.substring(7);
      try {
         jwtUserDetailsService.getAllClaimsFromToken(token);
      } catch (ExpiredJwtException e) {
         sendErrorResponse(response, HttpServletResponse.SC_UNAUTHORIZED, "Token has expired");
         return false;
      } catch (MalformedJwtException | UnsupportedJwtException | IllegalArgumentException e) {
         sendErrorResponse(response, HttpServletResponse.SC_UNAUTHORIZED, "Invalid token");
         return false;
      } catch (Exception e) {
         sendErrorResponse(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Error processing token");
         return false;
      }
      // implement access denied if need.
      return true;
   }

   private void sendErrorResponse(HttpServletResponse response, int status, String message) throws IOException {
      response.setStatus(status);
      response.getWriter().write(message);
   }

   @SuppressWarnings("null")
   @Override
   public void postHandle(jakarta.servlet.http.HttpServletRequest request,
         jakarta.servlet.http.HttpServletResponse response,
         Object handler, ModelAndView modelAndView) throws Exception {

      System.out.println("Post Handle method is Calling");
   }

   @SuppressWarnings("null")
   @Override
   public void afterCompletion(jakarta.servlet.http.HttpServletRequest request,
         jakarta.servlet.http.HttpServletResponse response, Object handler, Exception exception) throws Exception {

      System.out.println("Request and Response is completed");
   }
}