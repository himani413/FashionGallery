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

    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final TokenService tokenService;

    public ResponseDTO login(LoginDTO loginDTO){

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                        loginDTO.getEmail(),
                        loginDTO.getPassword()
                )
        );
        //in this point user is authenticated

        var user=userRepository.findByEmail(loginDTO.getEmail())
                .orElseThrow();

        var jwtToken = jwtService.generateToken(user);
        tokenService.revokeAllUserTokens(user);
        tokenService.saveUserToken(user, jwtToken);

        return ResponseDTO.builder()
                .code(StringList.RSP_SUCCESS)
                .content(user)
                .message("Successfully logged In")
                .fname(user.getFname())
                .lname(user.getLname())
                .token(jwtToken)
                .build();

    }

}
