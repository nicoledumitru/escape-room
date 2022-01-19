package com.example.escaperoom.services;

import com.example.escaperoom.domain.CartItem;
import com.example.escaperoom.domain.Product;
import com.example.escaperoom.domain.User;
import com.example.escaperoom.repositories.CartItemRepository;
import com.example.escaperoom.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShoppingCartServices {
    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private ProductRepository productRepository;

    public List<CartItem> listCartItems(User user){
        return cartItemRepository.findByUser(user);
    }

    public int addProduct(Long productId, int quantity, User user){
        int addedQty= quantity;
        Product product = productRepository.findById(productId).get();
        CartItem cartItem = cartItemRepository.findByUserAndProduct(user,product);

        if(cartItem != null){
            addedQty = cartItem.getQuantity()+quantity;
            cartItem.setQuantity(addedQty);
        } else{
            cartItem = new CartItem();
            cartItem.setQuantity(quantity);
            cartItem.setUser(user);
            cartItem.setProduct(product);
        }

        cartItemRepository.save(cartItem);

        return addedQty;
    }

//    public CartItem getItemByID(int id){
//        return cartItemRepository.getById(id);
//    }
//
//    public void removeCartItem(CartItem cartItem){
//        cartItemRepository.delete(cartItem);
//    }

}
