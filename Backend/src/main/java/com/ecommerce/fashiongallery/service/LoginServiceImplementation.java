package com.ecommerce.fashiongallery.service;

import com.ecommerce.fashiongallery.JWTconfig.JwtService;
import com.ecommerce.fashiongallery.dto.ResponseDTO;
import com.ecommerce.fashiongallery.dto.LoginDTO;
import com.ecommerce.fashiongallery.repository.UserRepository;
import com.ecommerce.fashiongallery.util.StringList;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginServiceImplementation implements LoginService {

   // @Autowired
    private final AuthenticationManager authenticationManager;
   // @Autowired
    private final UserRepository userRepository;
   // @Autowired
    private final JwtService jwtService;
    private final TokenService tokenService;

    public ResponseDTO login(LoginDTO loginDTO){
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginDTO.getEmail(),
                        loginDTO.getPassword()
                )
        );
        //in this point user is authenticated
        var user=userRepository.findByEmail(loginDTO.getEmail())
                .orElseThrow();
        var savedUser=userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        tokenService.revokeAllUserTokens(savedUser);
        tokenService.saveUserToken(savedUser, jwtToken);
        return ResponseDTO.builder()
                .token(jwtToken)
                .code(StringList.RSP_SUCCESS)
                .content(user)
                .message("Successfully logged In")
                .build();

    }

}
