package com.ecommerce.fashiongallery.entity;

import com.ecommerce.fashiongallery.dto.SignupDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Entity
@Builder //this help to build object in an easy way using design pattern builder
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "User")
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    @Column(nullable = false,unique = true)
    private String email;
    @Column(nullable = false)
    private String Fname;
    private String Lname;
    private String AddressLine1;
    private String AddressLine2;
    private String City;
    private String PostalCode;
    @Column(nullable = false,length = 64)
    private String Password;

    private boolean locked=false;
    private boolean enabled=false;

    @Enumerated(EnumType.STRING)
    private Role role;

    public User(SignupDTO signupDTO) {
        this.email = signupDTO.getEmail();
        this.Fname = signupDTO.getFname();
        this.Lname = signupDTO.getLname();
        this.AddressLine1 = signupDTO.getAddressLine1();
        this.AddressLine2 = signupDTO.getAddressLine2();
        this.City = signupDTO.getCity();
        this.PostalCode= signupDTO.getPostalCode();
        this.Password= signupDTO.getPassword();
        this.role=getRole();
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getPassword() {
        return Password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return !locked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return enabled;
    }

}
