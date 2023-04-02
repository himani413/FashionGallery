package com.ecommerce.fashiongallery.repository;

import com.ecommerce.fashiongallery.entity.User;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String Email);

    @Transactional
    @Modifying
    @Query(value = "UPDATE User SET enabled = TRUE WHERE email = ?1")
    void enableUser(String email);

    //new
    User getUserById(Long id);

}
