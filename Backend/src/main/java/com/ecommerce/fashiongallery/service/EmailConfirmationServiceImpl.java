package com.ecommerce.fashiongallery.service;

import com.ecommerce.fashiongallery.dto.ResponseDTO;
import com.ecommerce.fashiongallery.entity.User;
import com.ecommerce.fashiongallery.entity.confToken.ConfirmationToken;
import com.ecommerce.fashiongallery.repository.ConfirmationTokenRepository;
import com.ecommerce.fashiongallery.repository.UserRepository;
import com.ecommerce.fashiongallery.util.StringList;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class EmailConfirmationServiceImpl implements EmailConfirmationService{

    //@Autowired
    private final ConfirmationTokenRepository tokenRepository;
    //@Autowired
    private final UserRepository userRepository;

    @Override
    public ResponseDTO confirmToken(String token) {

        ConfirmationToken confirmationToken = getToken(token)
                .orElseThrow(() ->
                        new IllegalStateException("token not found"));

        if (confirmationToken.getConfirmedAt() != null) {
            throw new IllegalStateException("email already confirmed");
        }

        LocalDateTime expiredAt = confirmationToken.getExpiresAt();

        if (expiredAt.isBefore(LocalDateTime.now())) {
            throw new IllegalStateException("token expired");
        }

        setConfirmedAt(token);
        userRepository.enableUser(confirmationToken.getUser().getEmail());
        return ResponseDTO.builder()
                .code(StringList.RSP_SUCCESS)
                .content(confirmationToken)
                .message("Verification success!!Account Activated")
                .build();
    }

    @Override
    public ConfirmationToken generateToken(User user) {
        String token= UUID.randomUUID().toString();
        return new ConfirmationToken(
                token,
                LocalDateTime.now(),
                LocalDateTime.now().plusMinutes(15),
                user
        );
    }

    public void saveConfirmationToken(ConfirmationToken token) {
        tokenRepository.save(token);
    }

    public Optional<ConfirmationToken> getToken(String token) {
        return tokenRepository.findByToken(token);
    }

    public int setConfirmedAt(String token) {
        return tokenRepository.updateConfirmedAt(token, LocalDateTime.now());
    }
}
