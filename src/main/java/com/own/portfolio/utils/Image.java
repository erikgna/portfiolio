package com.own.portfolio.utils;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class Image {
    public static void saveFile(MultipartFile imageFile) throws IOException {
        byte[] bytes = imageFile.getBytes();
        Path path = Paths.get("C:/images/" + "temp.jpg");
        Files.write(path, bytes);

    }
    public static void saveAtBucket(String token) {
        String bucket_name = "erik-na-portfolio";
        String file_path = "C:/images/temp.jpg";
        //String key_name = Paths.get(file_path).getFileName().toString();

        final AmazonS3 s3 = AmazonS3ClientBuilder.standard().withRegion(Regions.US_EAST_1).build();
        try {
            s3.putObject(bucket_name, token, new File(file_path));
        } catch (AmazonServiceException e) {
            System.err.println(e.getErrorMessage());
            System.exit(1);
        }
    }
}
