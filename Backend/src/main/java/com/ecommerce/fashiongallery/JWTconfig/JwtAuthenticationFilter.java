package com.ecommerce.fashiongallery.JWTconfig;

import com.ecommerce.fashiongallery.repository.tokenRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@RequiredArgsConstructor
//@RequiredArgsConstructor //create a constructor using final keyword
public class JwtAuthenticationFilter extends OncePerRequestFilter { //every time when get a http request,filter need to be active.so we extend this class.

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;
    private final tokenRepository tokenRepository;

    @Override
    protected void doFilterInternal(
                                    @NonNull HttpServletRequest request,//our http request
                                    @NonNull HttpServletResponse response,//response for the request
                                    @NonNull FilterChain filterChain)//chain of responsibility design pattern.this contains list of other filters need to execute.
                                    throws ServletException, IOException {

        final String authHeader=request.getHeader("Authorization");//this is to when we make a call we need to pass the jwt authentication token within the header.
        //this header contains the jwttoken or bearer token
        final String jwtToken;
        if(authHeader==null || !authHeader.startsWith("Bearer ")){
            filterChain.doFilter(request,response); //pass to the next filter
            return;//we don't want to continue the execution
        }

        //extraction of token from the header.
        jwtToken=authHeader.substring(7);//bearer count is 7

        //then need to check user is already within our database or not
        //before that need to call jwtservice to extract username.
        final String userEmail=jwtService.extractUsername(jwtToken);
        //securitycontextholder to check whether the user is already authenticated/connected or not.
        if (userEmail != null &&  SecurityContextHolder.getContext().getAuthentication()==null){
            UserDetails userDetails=this.userDetailsService.loadUserByUsername(userEmail);
            var isTokenValid = tokenRepository.findByToken(jwtToken)
                    .map(t -> !t.isExpired() && !t.isRevoked())
                    .orElse(false);
            if (jwtService.isTokenValid(jwtToken,userDetails) && isTokenValid){
                UsernamePasswordAuthenticationToken authToken=new UsernamePasswordAuthenticationToken(
                        userDetails,
                        null,//when we create a user we dont have credentials
                        userDetails.getAuthorities()
                );
                authToken.setDetails(
                        new WebAuthenticationDetailsSource().buildDetails(request)
                );
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
            filterChain.doFilter(request,response);//everytime need to pass request and response to next filter.
        }

    }
}
