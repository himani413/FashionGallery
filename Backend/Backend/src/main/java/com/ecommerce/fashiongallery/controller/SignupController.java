package com.ecommerce.fashiongallery.controller;

import com.ecommerce.fashiongallery.dto.ResponseDTO;
import com.ecommerce.fashiongallery.dto.SignupDTO;
import com.ecommerce.fashiongallery.service.EmailConfirmationService;
import com.ecommerce.fashiongallery.service.SignupService;
import com.ecommerce.fashiongallery.util.StringList;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:63342")
public class SignupController {

    private final SignupService signupService;
    private ResponseDTO responseDTO;
    private final EmailConfirmationService confirmationService;

    @PostMapping("/signup")
    public ResponseEntity<ResponseDTO> signup(@RequestBody SignupDTO signupDTO){

        try{
            return ResponseEntity.ok(signupService.signup(signupDTO));

        }catch (Exception e){
            responseDTO.setCode(StringList.RSP_ERROR);
            responseDTO.setMessage(e.getMessage());
            responseDTO.setContent(e);
            return ResponseEntity.badRequest().body(null);
        }
    }

    @PostMapping("/confirm")
    public ResponseEntity<ResponseDTO> confirm(@RequestParam("token") String token) {
        try {
            return ResponseEntity.ok(confirmationService.confirmToken(token));
        } catch (Exception e) {
            responseDTO.setCode(StringList.RSP_ERROR);
            responseDTO.setMessage(e.getMessage());
            responseDTO.setContent(e);
            return ResponseEntity.badRequest().body(null);
        }
    }


}
