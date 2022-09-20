package cdac.ecom.seller.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity(name = "SUBCATEGORY_LIST")
@NoArgsConstructor
@ToString
@Getter @Setter
public class SubCategoryMaster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SUBCATEGORY_ID")
    private Long subCategoryId;

    @Column(name = "SUBCATEGORY_NAME")
    private String subCategoryName;

    @Column(name = "STATUS")
    private Boolean status;

    @ManyToOne
    @JoinColumn(name = "CATEGORY_ID")
    private CategoryMaster categoryMaster;

    public SubCategoryMaster(String subCategoryName, Boolean status, CategoryMaster categoryMaster) {
        this.subCategoryName = subCategoryName;
        this.status = status;
        this.categoryMaster = categoryMaster;
    }
}
