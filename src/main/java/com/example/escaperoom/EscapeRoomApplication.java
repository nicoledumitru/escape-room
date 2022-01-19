package com.example.escaperoom;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class EscapeRoomApplication {

    public static void main(String[] args) {
        SpringApplication.run(EscapeRoomApplication.class, args);
    }

}
