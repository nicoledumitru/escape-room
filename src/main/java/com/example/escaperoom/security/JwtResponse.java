package com.example.escaperoom.security;

import lombok.Data;

import java.util.List;

@Data
public class JwtResponse {
    private String token;
    private String type = "Bearer";
//    private String refreshToken;
    private String username;
    private List<String> roles;

    public JwtResponse(String token, String username, List<String> roles) {
        this.token = token;
//        this.refreshToken = refreshToken;
        this.username = username;
        this.roles = roles;
    }
}
