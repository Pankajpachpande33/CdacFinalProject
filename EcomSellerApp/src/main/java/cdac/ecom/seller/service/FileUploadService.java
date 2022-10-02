package cdac.ecom.seller.service;


import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface FileUploadService {

    public boolean saveFiles(MultipartFile fileToSave, String imgPath) throws IOException;
    public boolean deleteFile(String filePath);
    public String getFileName(MultipartFile fileToSave);


}
