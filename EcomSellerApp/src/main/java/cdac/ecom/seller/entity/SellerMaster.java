package cdac.ecom.seller.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity(name = "SELLER")
@NoArgsConstructor
@ToString
@Getter @Setter
public class SellerMaster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SELLER_ID")
    private Long sellerId;

    @Column(name = "SELLER_FIRSTNAME")
    private String sellerFirstName;

    @Column(name = "SELLER_LASTNAME")
    private String sellerLastName;

    @Column(name = "SELLER_MOBILE")
    private String sellerMobileNumber;

    @Column(name = "SELLER_EMAIL")
    private String sellerEmail;

    @Column(name = "SELLER_PASSWORD")
    private String sellerPassword;


    public SellerMaster(String sellerFirstName, String sellerLastName, String sellerMobileNumber, String sellerEmail, String sellerPassword) {
        this.sellerFirstName = sellerFirstName;
        this.sellerLastName = sellerLastName;
        this.sellerMobileNumber = sellerMobileNumber;
        this.sellerEmail = sellerEmail;
        this.sellerPassword = sellerPassword;

    }
}
