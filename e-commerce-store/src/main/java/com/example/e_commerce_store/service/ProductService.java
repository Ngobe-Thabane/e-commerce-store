package com.example.e_commerce_store.service;

import io.minio.*;
import io.minio.errors.*;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.util.UUID;

@Service
public class ProductService {

    private final MinioClient minioClient;

    @Value("${minio.bucket}")
    private String bucketName;

    public ProductService(MinioClient minioClient){
        this.minioClient = minioClient;
    }

    @PostConstruct
    public void ensureBucketExists() {
        try {
            boolean found = this.minioClient.bucketExists(BucketExistsArgs.builder().bucket(this.bucketName).build());
            if (!found) {
                this.minioClient.makeBucket(MakeBucketArgs.builder().bucket(this.bucketName).build());
            }
        } catch (Exception e){
            throw new RuntimeException("Failed to check or create a bucket", e);
        }

    }

    public String uploadImage(MultipartFile file){
        try (InputStream is = file.getInputStream()){
            String objectName = "images/" + UUID.randomUUID() + "-" + file.getOriginalFilename();
            minioClient.putObject(
                            PutObjectArgs.builder()
                                    .bucket(this.bucketName)
                                    .object(objectName)
                                    .stream(is, file.getSize(), -1)
                                    .contentType(file.getContentType())
                                    .build()
            );

            return  String.format("%s%s/%s", "http://127.0.0.1:9001/", bucketName, objectName);
        } catch (Exception e) {
            throw new RuntimeException("Error uploading to MinIO",e);
        }
    }
}
