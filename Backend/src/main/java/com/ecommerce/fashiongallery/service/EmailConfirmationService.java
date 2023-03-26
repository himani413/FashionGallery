package com.ecommerce.fashiongallery.service;

import com.ecommerce.fashiongallery.dto.ResponseDTO;
import com.ecommerce.fashiongallery.entity.User;
import com.ecommerce.fashiongallery.entity.confToken.ConfirmationToken;
import jakarta.mail.MessagingException;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.util.Optional;

@Service
public interface EmailConfirmationService {

    ResponseDTO confirmToken(String token) throws MessagingException, UnsupportedEncodingException;

    ConfirmationToken generateToken(User user);

    void saveConfirmationToken(ConfirmationToken token);

    Optional<ConfirmationToken> getToken(String token);

    int setConfirmedAt(String token);

}
