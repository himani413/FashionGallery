package com.ecommerce.fashiongallery.controller;

import com.ecommerce.fashiongallery.dto.ResponseDTO;
import com.ecommerce.fashiongallery.dto.SignupDTO;
import com.ecommerce.fashiongallery.repository.UserRepository;
import com.ecommerce.fashiongallery.service.EmailConfirmationService;
import com.ecommerce.fashiongallery.service.SignupService;
import com.ecommerce.fashiongallery.util.StringList;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class SignupController {

    private final UserRepository userRepository;
    private final SignupService signupService;
    ResponseDTO responseDTO;
    private final EmailConfirmationService confirmationService;

    @PostMapping("/signup")
    public ResponseEntity<ResponseDTO> signup(@RequestBody SignupDTO signupDTO){

        try{
            if(userRepository.findByEmail(signupDTO.getEmail()).isPresent()){
                return ResponseEntity.badRequest().body(
                        ResponseDTO.builder()
                                .code(StringList.RSP_DUPLICATED)
                                .message("Username is already taken")
                                .build()
                );
            }
            else{
                return ResponseEntity.ok().body(
                        signupService.signup(signupDTO)
                );
            }

        }catch (Exception e){
            responseDTO.setCode(StringList.RSP_ERROR);
            responseDTO.setMessage(e.getMessage());
            responseDTO.setContent(e);
            return ResponseEntity.badRequest().body(null);
        }
    }

    @PostMapping("/confirm")
    public ResponseEntity<ResponseDTO> confirm(@RequestParam("token") String token) {

        if (token == null) {
            responseDTO.setMessage("Invalid Token");
            return ResponseEntity.badRequest().body(null);
        }
        else {
            try {
                return ResponseEntity.ok()
                        .body(confirmationService.confirmToken(token));
            } catch (Exception e) {
                responseDTO.setCode(StringList.RSP_ERROR);
                responseDTO.setMessage(e.getMessage());
                responseDTO.setContent(e);
                return ResponseEntity.badRequest().body(null);
            }
        }
    }

}
