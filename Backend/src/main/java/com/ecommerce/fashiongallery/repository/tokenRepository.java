package com.ecommerce.fashiongallery.repository;

import com.ecommerce.fashiongallery.entity.JWTtoken.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface tokenRepository extends JpaRepository<Token,Integer> {
    @Query(value = " select t from Token t inner join User u on t.id = u.id where " +
            "u.id = t.id and (t.expired = false or t.revoked = false) ")
    List<Token> findAllValidTokenByUser(Long id);
    Optional<Token> findByToken(String token);

}
