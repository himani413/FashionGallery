package com.ecommerce.fashiongallery.service;

import com.ecommerce.fashiongallery.JWTconfig.JwtService;
import com.ecommerce.fashiongallery.dto.ResponseDTO;
import com.ecommerce.fashiongallery.dto.SignupDTO;
import com.ecommerce.fashiongallery.entity.Role;
import com.ecommerce.fashiongallery.entity.User;
import com.ecommerce.fashiongallery.entity.confToken.ConfirmationToken;
import com.ecommerce.fashiongallery.repository.UserRepository;
import com.ecommerce.fashiongallery.util.StringList;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SignupServiceImplementation implements SignupService{

      //@Autowired
      private final UserRepository userRepository;
      //@Autowired
      private final PasswordEncoder passwordEncoder;
      @Autowired
      private JwtService jwtService;
//    @Autowired ConfirmationService confirmationService;

      private final TokenService tokenService;
      private final MailService mailService;
      private final EmailConfirmationService confirmationService;

    @Override
    public ResponseDTO signup(SignupDTO signupDTO){

            var user= User.builder()
                    .Fname(signupDTO.getFname())
                    .Lname(signupDTO.getLname())
                    .email(signupDTO.getEmail())
                    .AddressLine1(signupDTO.getAddressLine1())
                    .AddressLine2(signupDTO.getAddressLine2())
                    .City(signupDTO.getCity())
                    .PostalCode(signupDTO.getPostalCode())
                    .Password(passwordEncoder.encode(signupDTO.getPassword()))
                    .role(Role.USER)
                    .build();
            var savedUser=userRepository.save(user);
            var jwtToken = jwtService.generateToken(user);

            tokenService.revokeAllUserTokens(savedUser);
            tokenService.saveUserToken(savedUser, jwtToken);

            ConfirmationToken token=confirmationService.generateToken(user);
            String link = "http://localhost:8090/api/v1/auth/confirm?token=" + token.getToken();
            mailService.send(user.getEmail(),link);

            confirmationService.saveConfirmationToken(token);

            return ResponseDTO.builder()
                    .token(jwtToken)
                    .code(StringList.RSP_SUCCESS)
                    .content(user)
                    .message("Registration success!Verification EMail Sent!")
                    .build();
    }


}
