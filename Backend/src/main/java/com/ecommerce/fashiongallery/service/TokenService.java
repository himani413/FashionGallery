package com.ecommerce.fashiongallery.service;

import com.ecommerce.fashiongallery.entity.User;
import org.springframework.stereotype.Service;

@Service
public interface TokenService{

    void saveUserToken(User user, String jwtToken);

    void revokeAllUserTokens(User user);

}
