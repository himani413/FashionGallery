package com.ecommerce.fashiongallery.controller;

import com.ecommerce.fashiongallery.dto.ResponseDTO;
import com.ecommerce.fashiongallery.dto.SignupDTO;
import com.ecommerce.fashiongallery.repository.UserRepository;
import com.ecommerce.fashiongallery.service.EmailConfirmationService;
import com.ecommerce.fashiongallery.service.SignupService;
import com.ecommerce.fashiongallery.util.StringList;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class SignupController {

    private final UserRepository userRepository;
    private final SignupService signupService;
    ResponseDTO responseDTO;
    private final EmailConfirmationService confirmationService;

    @PostMapping("/signup")
    public ResponseEntity<ResponseDTO> signup(@RequestBody SignupDTO signupDTO){

        try{
            if(userRepository.findByEmail(signupDTO.getEmail()).isPresent()){
                return ResponseEntity.badRequest().body(
                        ResponseDTO.builder()
                                .code(StringList.RSP_DUPLICATED)
                                .message("Username is already taken")
                                .build()
                );
            }
            else{
                return ResponseEntity.ok().body(
                        signupService.signup(signupDTO)
                );
            }

        }catch (Exception e){
            responseDTO.setCode(StringList.RSP_ERROR);
            responseDTO.setMessage(e.getMessage());
            responseDTO.setContent(e);
            return ResponseEntity.badRequest().body(null);
        }
    }

    @PostMapping("/confirm")
    public ResponseEntity<ResponseDTO> confirm(@RequestParam("token") String token) {

        if (token == null) {
            responseDTO.setMessage("Invalid Token");
            return ResponseEntity.badRequest().body(null);
        }
        else {
            try {
                return ResponseEntity.ok()
                        .body(confirmationService.confirmToken(token));
            } catch (Exception e) {
                responseDTO.setCode(StringList.RSP_ERROR);
                responseDTO.setMessage(e.getMessage());
                responseDTO.setContent(e);
                return ResponseEntity.badRequest().body(null);
            }
        }
    }




 //   @GetMapping(value = "confirm")
 //   public String confirm(@RequestParam("token") String token) {
 //       return signupService.confirmToken(token);
 //   }


//    @PutMapping(value = "/updateUser")
//    public ResponseEntity updateUser(@RequestBody SignupDTO signupDTO){
//        try {
//            String result=userService.updateUser(signupDTO);
//            if (result.equals("00")){
//                signupResponseDTO.setCode(StringList.RSP_SUCCESS);
//                signupResponseDTO.setMessage("result updated");
//                signupResponseDTO.setContent(signupDTO);
//                return new ResponseEntity(signupResponseDTO, HttpStatus.ACCEPTED);
//            }
//            else if (result.equals("01")){
//                signupResponseDTO.setCode(StringList.RSP_NO_DATA_FOUND);
//                signupResponseDTO.setMessage("Employee details not found");
//                signupResponseDTO.setContent(null);
//                return new ResponseEntity(signupResponseDTO, HttpStatus.BAD_REQUEST);
//            }
//            else {
//                signupResponseDTO.setCode(StringList.RSP_FAIL);
//                signupResponseDTO.setMessage("Error");
//                signupResponseDTO.setContent(null);
//                return new ResponseEntity(signupResponseDTO, HttpStatus.BAD_REQUEST);
//            }
//        }catch (Exception e){
//            signupResponseDTO.setCode(StringList.RSP_ERROR);
//            signupResponseDTO.setMessage(e.getMessage());
//            signupResponseDTO.setContent(e);
//            return new ResponseEntity(signupResponseDTO, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
//
//    public User updateUser(@RequestBody SignupDTO signupDTO){
//        User user=new User(signupDTO);
//        return userService.updateUser(user);
//    }
//
//    @DeleteMapping(value = "/deleteUser")
//
//
//    public User deleteUser(@RequestBody SignupDTO signupDTO){
//        User user=new User(signupDTO);
//        return userService.deleteUser(user);
//    }
//
//    @GetMapping(value = "/getUser")
//    public Object getUser(@RequestBody SignupDTO signupDTO){
//        User user=new User(signupDTO);
//        return userService.getUserByEmail(user);
//    }

}
