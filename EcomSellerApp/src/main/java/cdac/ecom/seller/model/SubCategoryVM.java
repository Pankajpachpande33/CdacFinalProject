package cdac.ecom.seller.model;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@NoArgsConstructor
@ToString
@Getter @Setter
public class SubCategoryVM {


    private Long subCategoryId;

    private String subCategoryName;

    private Boolean status;

    @NonNull
    private Long categoryId;

    public SubCategoryVM(String subCategoryName, Boolean status, @NonNull Long categoryId) {
        this.subCategoryName = subCategoryName;
        this.status = status;
        this.categoryId = categoryId;
    }
}
