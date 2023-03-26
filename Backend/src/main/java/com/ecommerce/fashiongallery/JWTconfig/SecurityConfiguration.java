package com.ecommerce.fashiongallery.JWTconfig;

import com.ecommerce.fashiongallery.entity.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {
   // @Autowired
    private final JwtAuthenticationFilter jwtAuthFilter;
   // @Autowired
    private final AuthenticationProvider authenticationProvider;


    //this bean is responsible for configuring all http security of the application
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf()
                .disable()
                .authorizeHttpRequests()
                //whitelisting-give authorization to some endpoints without jwtauthorization
                .requestMatchers("/api/v1/auth/**")
                .permitAll()
                .requestMatchers("/api/v1/products/**")
                .permitAll()
                //.hasRole(String.valueOf(Role.ADMIN))
                .anyRequest()
                .authenticated()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authenticationProvider(authenticationProvider)
                //bcz we need to execute jwtfilter before username pwd authentication filter
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
//                .logout()
//                .logoutUrl("/api/v1/auth/logout")
//                .addLogoutHandler(logoutHandler)
//                .logoutSuccessHandler((request, response, authentication) -> SecurityContextHolder.clearContext())

        return http.build();
    }
}
