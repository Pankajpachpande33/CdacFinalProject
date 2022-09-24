package cdac.ecom.seller.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:3000")
public class ImageController {

    @Value("${uploadPath}")
    private String uploadPath;


    @CrossOrigin(origins = { "http://127.0.0.1:3000" , "http://localhost:3000"})
    @PostMapping("/imageUpload")
    public ResponseEntity<String> uploadimage(@RequestParam("imgReq")MultipartFile requestFile) throws IOException {
        String ext = requestFile.getContentType().split("/")[1];
        UUID uuid =UUID.randomUUID();
        String temp= File.separator+uuid+"."+ext;
        Path path= Paths.get(uploadPath+temp);
        Files.copy(requestFile.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);


        return new ResponseEntity<>(temp, HttpStatus.OK);
    }

}