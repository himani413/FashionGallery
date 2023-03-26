package com.ecommerce.fashiongallery.service;

import com.ecommerce.fashiongallery.dto.ResponseDTO;
import com.ecommerce.fashiongallery.dto.LoginDTO;
import org.springframework.stereotype.Service;

@Service
public interface LoginService {

    ResponseDTO login(LoginDTO loginDTO);

}
