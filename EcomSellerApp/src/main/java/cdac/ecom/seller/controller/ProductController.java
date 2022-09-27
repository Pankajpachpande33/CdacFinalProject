package cdac.ecom.seller.controller;

//import cdac.ecom.seller.entity.ImageMaster;
import cdac.ecom.seller.entity.ProductMaster;
import cdac.ecom.seller.model.ProductVM;
import cdac.ecom.seller.repository.service.FileUploadService;
import cdac.ecom.seller.repository.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController("/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private FileUploadService fileUploadService;



    @GetMapping("/product")
    public List getAllProduct(){
        List<ProductMaster> productMasters=productService.getAllProduct();
        return productMasters;
    }

    @PostMapping("/product")
    public String saveProduct(@RequestBody ProductVM productVM){
        productService.saveProduct(productVM);
        return "Product Saved";
    }

    @GetMapping("/product/{id}")
    public ProductMaster getProduct(@PathVariable Long id){
        return productService.getProductById(id);
    }

    @PutMapping("/product/{id}")
    public String updateProduct(@PathVariable Long id,@RequestBody ProductVM productVM){
        productService.updateProduct(id,productVM);
        return "Product Update SuccessFully";
    }

    @DeleteMapping("/product/{id}")
    public String deleteProduct(@PathVariable Long id){
        productService.deleteProduct(id);
        return "Product Deleted";
    }

//    @PostMapping("/product")
//    public ResponseEntity<String> saveProduct(@RequestParam("requestImg")MultipartFile requestFile,@RequestBody ProductVM productVM) throws IOException{
//
//        if(requestFile.isEmpty())
//            return ResponseEntity.badRequest().body("File Can not empty");
//        if(requestFile.getContentType().equals("image/jpg") ||requestFile.getContentType().equals("image/png")){
//            String fileName=fileUploadService.getFileName(requestFile);
//            productService.saveProduct(productVM,fileName);
//            fileUploadService.saveFiles(requestFile,fileName);
//        }
//        return  ResponseEntity.ok("working");
//    }



}
