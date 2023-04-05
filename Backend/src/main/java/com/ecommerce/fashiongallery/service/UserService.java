package com.ecommerce.fashiongallery.service;



import com.ecommerce.fashiongallery.entity.User;
import com.ecommerce.fashiongallery.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User saveUser(User user){
        return userRepository.save(user);
    }
    public Long isUserPresent(User user){
       User user1 = userRepository.getUserById(user.getId());
        return user1 != null? user1.getId(): null;
    }

    public  User getUser(Long id){
        return userRepository.getUserById(id);
    }

    public Optional<User> getUser(String username){
        return userRepository.findByEmail(username);
    }

}
