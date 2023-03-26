package com.ecommerce.fashiongallery.controller;

import com.ecommerce.fashiongallery.dto.LoginDTO;
import com.ecommerce.fashiongallery.dto.ResponseDTO;
import com.ecommerce.fashiongallery.service.LoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class LoginController {

    private ResponseDTO responseDTO;
    private final LoginService loginService;

    @PostMapping("/login")
    public ResponseEntity<ResponseDTO> authenticate(
            @RequestBody LoginDTO loginDTO
    ) {
        return ResponseEntity.ok(loginService.login(loginDTO));
    }

}
