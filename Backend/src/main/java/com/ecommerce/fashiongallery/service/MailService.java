package com.ecommerce.fashiongallery.service;

import org.springframework.stereotype.Service;

@Service
public interface MailService {
    void send(String email,String link);
}
