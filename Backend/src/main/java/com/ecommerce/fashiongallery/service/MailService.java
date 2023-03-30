package com.ecommerce.fashiongallery.service;

import com.ecommerce.fashiongallery.entity.User;
import org.springframework.stereotype.Service;

@Service
public interface MailService {
    void send(User user, String token);
}
