package com.ecommerce.fashiongallery.entity.JWTtoken;

import com.ecommerce.fashiongallery.entity.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Builder //this help to build object in an easy way using design pattern builder
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "Token")
public class Token {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;

    @Column(unique = true)
    public String token;

    @Enumerated(EnumType.STRING)
    public TokenType tokenType = TokenType.BEARER;

    public boolean revoked;

    public boolean expired;

    @ManyToOne
    @JoinColumn(name = "user_id")
    public User user;

}
