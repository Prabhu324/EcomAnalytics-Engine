package com.EcomAnalytics_Engine.SpringBoot_Backend.service;

import com.EcomAnalytics_Engine.SpringBoot_Backend.model.User;
import com.EcomAnalytics_Engine.SpringBoot_Backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {
    private final UserRepository userRepository;

    @Autowired
    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public boolean authenticate(String username, String password) {
        // 1. Ask the repository to find the user by their username
        Optional<User> userOptional = userRepository.findByUsername(username);

        // 2. If the user exists, check if the provided password matches
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            return user.getPassword().equals(password);
        }

        // 3. If user doesn't exist or password doesn't match, return false
        return false;
    }
}
