package com.ecommerce.fashiongallery.service;

import com.ecommerce.fashiongallery.dto.ResponseDTO;
import com.ecommerce.fashiongallery.dto.SignupDTO;
import jakarta.mail.MessagingException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;

@Service
public interface SignupService {

    ResponseDTO signup(SignupDTO signupDTO) throws MessagingException, UnsupportedEncodingException;

}
