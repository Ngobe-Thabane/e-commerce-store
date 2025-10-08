package com.example.e_commerce_store.config;


import io.minio.MinioClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MiniConfig {

    @Value("${minio.url}")
    private String minoUrl;

    @Value("${minio.access-key}")
    private String accessKey;

    @Value("${minio.secret-key}")
    private String secretKey;


    @Bean
    public MinioClient minioClient(){
        return  MinioClient.builder()
                .endpoint(minoUrl)
                .credentials(accessKey, secretKey)
                .build();
    }

}
