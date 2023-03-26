package com.ecommerce.fashiongallery;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
public class FashiongalleryApplication {

	public static void main(String[] args) {
		SpringApplication.run(FashiongalleryApplication.class, args);
	}

}
