package com.EcomAnalytics_Engine.SpringBoot_Backend.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.EcomAnalytics_Engine.SpringBoot_Backend.dto.LoginRequest;
import com.EcomAnalytics_Engine.SpringBoot_Backend.service.AuthService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {
    private final AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        
        // Pass credentials to the Service layer
        boolean isAuthenticated = authService.authenticate(
                loginRequest.getUsername(), 
                loginRequest.getPassword()
        );

        if (isAuthenticated) {
            Map<String, Object> response = new HashMap<>();
            response.put("status", "success");
            response.put("message", "Authentication successful!");
            response.put("username", loginRequest.getUsername());
            
            return ResponseEntity.ok(response);
        } else {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("status", "error");
            errorResponse.put("message", "Invalid username or password");
            
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);
        }
    }
}
