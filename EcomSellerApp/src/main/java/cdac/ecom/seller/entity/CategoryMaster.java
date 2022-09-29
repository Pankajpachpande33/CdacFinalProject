package cdac.ecom.seller.entity;

import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity(name="CATEGORY_LIST")
@NoArgsConstructor
@ToString
@Getter @Setter
public class CategoryMaster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CATEGORY_ID")
    private Long categoryId;

    @Column(name = "CATEGORY_NAME")
    private String categoryName;

    @Column(name = "STATUS")
    private Boolean status;



    public CategoryMaster(String categoryName, Boolean status) {
        this.categoryName = categoryName;
        this.status = status;
    }
}
