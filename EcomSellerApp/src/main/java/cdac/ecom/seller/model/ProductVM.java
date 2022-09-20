package cdac.ecom.seller.model;

//import cdac.ecom.seller.entity.ImageMaster;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;
import java.util.Set;

@Component
@NoArgsConstructor
@ToString
@Getter @Setter
public class ProductVM {

    private Long productId;

    private String productName;

    @NonNull
    private Long categoryId;

    @NonNull
    private Long subCategoryId;

    @NonNull
    private Long sellerId;



    @Temporal(TemporalType.DATE)
    @DateTimeFormat(style = "yyyy-MM-dd")
    private Date productManufacturingDate;

    private Float productPrice;

    private String imageUploadPath;

    public ProductVM(String productName, @NonNull Long categoryId, @NonNull Long subCategoryId, @NonNull Long sellerId, Date productManufacturingDate, Float productPrice, String imageUploadPath) {
        this.productName = productName;
        this.categoryId = categoryId;
        this.subCategoryId = subCategoryId;
        this.sellerId = sellerId;
        this.productManufacturingDate = productManufacturingDate;
        this.productPrice = productPrice;
        this.imageUploadPath = imageUploadPath;
    }
}
