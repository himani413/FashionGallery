package com.ecommerce.fashiongallery;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FashiongalleryApplication {

	public static void main(String[] args) {
		SpringApplication.run(FashiongalleryApplication.class, args);
		System.setProperty("tomcat.util.http.parser.HttpParser.requestTargetAllow", "{}");
	}

}
