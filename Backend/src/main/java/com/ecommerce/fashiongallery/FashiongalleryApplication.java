package com.ecommerce.fashiongallery;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@EntityScan
@ComponentScan
@SpringBootApplication
public class FashiongalleryApplication {

	public static void main(String[] args) {
		SpringApplication.run(FashiongalleryApplication.class, args);
	}

}
