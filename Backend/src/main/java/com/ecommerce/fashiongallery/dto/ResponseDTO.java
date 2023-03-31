package com.ecommerce.fashiongallery.dto;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ResponseDTO {

    private String token;
    private String code;
    private String message;
    private Object content;
    private String fname;
    private String lname;

}
