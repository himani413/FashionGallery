package com.ecommerce.fashiongallery.repository;

import com.ecommerce.fashiongallery.entity.confToken.ConfirmationToken;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.Optional;

@Repository
public interface ConfirmationTokenRepository extends JpaRepository<ConfirmationToken, Long> {

    Optional<ConfirmationToken> findByToken(String token);

    @Transactional
    @Modifying
    @Query(value = "UPDATE Confirmationtoken SET confirmedAt = ?2 WHERE token = ?1")
    int updateConfirmedAt(String token, LocalDateTime confirmedAt);
}
