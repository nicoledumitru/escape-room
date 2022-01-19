package com.example.escaperoom.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name= "cart_items")
@Data
public class CartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name="product_id")
    private Product product;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    private int quantity;
}
