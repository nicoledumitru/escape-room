package com.example.escaperoom.services;

import com.example.escaperoom.domain.User;
import com.example.escaperoom.repositories.UserRepository;
import com.example.escaperoom.security.AuthRequest;
import com.example.escaperoom.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestHeader;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    JwtUtil jwtUtil;

    @Autowired
    PasswordEncoder passwordEncoder;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public Optional<User> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public Optional<User> getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public void deleteUser(User user) {
        userRepository.delete(user);
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

//    public User getCurrentUser(AuthRequest auth) {
//        try {
//            String jwtToken = auth.substring(7);
//            String username = jwtUtil.extractUsername(auth.getUsername());
//            Optional<User> userByEmail = getUserByUsername(username);
//            if(userByEmail.isPresent()){
//                userByEmail.get().setPassword(null);
//                return userByEmail.get();
//            } else{
//                return null;
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//        return null;
//    }
}
