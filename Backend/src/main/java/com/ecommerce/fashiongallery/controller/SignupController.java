package com.ecommerce.fashiongallery.controller;

import com.ecommerce.fashiongallery.dto.ResponseDTO;
import com.ecommerce.fashiongallery.dto.SignupDTO;
import com.ecommerce.fashiongallery.service.EmailConfirmationService;
import com.ecommerce.fashiongallery.service.SignupService;
import com.ecommerce.fashiongallery.util.StringList;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class SignupController {

    @Autowired
    private SignupService signupService;
    private ResponseDTO responseDTO;
    @Autowired
    private EmailConfirmationService confirmationService;

    @PostMapping("/signup")
    public ResponseEntity<ResponseDTO> signup(@RequestBody SignupDTO signupDTO){

        try{
            return ResponseEntity.ok(signupService.signup(signupDTO));

        }catch (Exception e){
            responseDTO.setCode(StringList.RSP_ERROR);
            responseDTO.setMessage(e.getMessage());
            responseDTO.setContent(e);
            return ResponseEntity.badRequest().body(null);
        }
    }

    @PostMapping("/confirm")
    public ResponseEntity<ResponseDTO> confirm(@RequestParam("token") String token) {
        try {
            return ResponseEntity.ok(confirmationService.confirmToken(token));
        } catch (Exception e) {
            responseDTO.setCode(StringList.RSP_ERROR);
            responseDTO.setMessage(e.getMessage());
            responseDTO.setContent(e);
            return ResponseEntity.badRequest().body(null);
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
