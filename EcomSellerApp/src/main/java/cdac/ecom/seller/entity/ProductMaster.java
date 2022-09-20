package cdac.ecom.seller.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity(name = "PRODUCT_LIST")
@NoArgsConstructor
@ToString
@Getter @Setter
public class ProductMaster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PRODUCT_ID")
    private Long productId;

    @Column(name = "PRODUCT_NAME")
    private String productName;

    @ManyToOne
    @JoinColumn(name = "CATEGORY_ID")
    private CategoryMaster categoryMaster;

    @ManyToOne
    @JoinColumn(name = "SUBCATEGORY_ID")
    private SubCategoryMaster subCategoryMaster;


    @ManyToOne
    @JoinColumn(name = "seller_master_seller_id")
    private SellerMaster  sellerMaster;

    @Column(name = "PRODUCT_DATE")
    @Temporal(TemporalType.DATE)
    @DateTimeFormat(style = "yyyy-MM-dd")
    private Date productManufacturingDate;

    @Column(name = "PRODUCT_PRICE")
    private Float productPrice;

    @Column(name = "IMAGE_PATH")
    private String imageUploadPath;

    public ProductMaster(String productName, CategoryMaster categoryMaster, SubCategoryMaster subCategoryMaster, SellerMaster sellerMaster, Date productManufacturingDate, Float productPrice, String imageUploadPath) {
        this.productName = productName;
        this.categoryMaster = categoryMaster;
        this.subCategoryMaster = subCategoryMaster;
        this.sellerMaster = sellerMaster;
        this.productManufacturingDate = productManufacturingDate;
        this.productPrice = productPrice;
        this.imageUploadPath = imageUploadPath;
    }
}
