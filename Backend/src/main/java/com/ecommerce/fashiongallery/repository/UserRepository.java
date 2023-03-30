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

   // @Query(value = "SELECT u FROM User u WHERE u.email = ?1",nativeQuery = true)


//    @Modifying
//    @Query(value = "UPDATE User SET enabled = TRUE WHERE email = ?1",nativeQuery = true)
//    int enableUser(String email);

    Optional<User> findByEmail(String Email);

    Boolean existsByEmail(String email);

    @Transactional
    @Modifying
    @Query(value = "UPDATE User SET enabled = TRUE WHERE email = ?1")
    void enableUser(String email);

}
