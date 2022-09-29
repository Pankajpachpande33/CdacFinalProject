package cdac.ecom.seller.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

@Component
@NoArgsConstructor
@ToString
@Getter @Setter
public class CategoryVM {

    private Long categoryId;

    private String categoryName;

    private Boolean status;

    public CategoryVM(String categoryName, Boolean status) {
        this.categoryName = categoryName;
        this.status = status;
    }
}
