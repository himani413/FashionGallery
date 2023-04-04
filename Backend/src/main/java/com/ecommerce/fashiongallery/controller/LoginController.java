package com.ecommerce.fashiongallery.controller;

import com.ecommerce.fashiongallery.dto.LoginDTO;
import com.ecommerce.fashiongallery.dto.ResponseDTO;
import com.ecommerce.fashiongallery.repository.UserRepository;
import com.ecommerce.fashiongallery.service.LoginService;
import com.ecommerce.fashiongallery.service.LogoutService;
import com.ecommerce.fashiongallery.util.StringList;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {

    private final UserRepository userRepository;
    private final LoginService loginService;
    private final LogoutService logoutService;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<ResponseDTO> authenticate(
            @RequestBody LoginDTO loginDTO
    ) {
        if(!userRepository.findByEmail(loginDTO.getEmail()).isPresent()){
            return ResponseEntity.ok().body(
                    ResponseDTO.builder()
                            .code(StringList.RSP_NO_DATA_FOUND)
                            .message("Invalid Login")
                            .build()
            );
        }
        else if(!passwordEncoder.matches(loginDTO.getPassword(),
                userRepository.findByEmail(loginDTO.getEmail())
                        .get().getPassword())){
            return ResponseEntity.ok().body(
                    ResponseDTO.builder()
                            .code(StringList.RSP_DUPLICATED)
                            .message("Re-Enter Password")
                            .build()
            );
        }
        else{
            return ResponseEntity.ok()
                    .body(loginService.login(loginDTO));
        }
    }


}
