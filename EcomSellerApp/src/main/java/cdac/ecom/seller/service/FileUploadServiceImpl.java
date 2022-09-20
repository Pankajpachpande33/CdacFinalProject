package cdac.ecom.seller.service;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Service
public class FileUploadServiceImpl implements FileUploadService{

    @Value("${uploadPath}")
    private String uploadPath;

    @Override
    public boolean saveFiles(MultipartFile fileToSave, String imgPath) throws IOException {
//        String ext= fileToSave.getContentType().split("/")[1];
//        UUID uuid=UUID.randomUUID();
        Path path= Paths.get(uploadPath+ imgPath);
        Files.copy(fileToSave.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
        return true;
    }



    @Override
    public boolean deleteFile(String filePath) {
        return false;
    }

    @Override
    public String getFileName(MultipartFile fileToSave) {
        String ext= fileToSave.getContentType().split("/")[1];
        UUID uuid=UUID.randomUUID();
        return File.separator+uuid+"."+ext;
    }


}
