package cdac.ecom.seller.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

import javax.persistence.Column;

@Component
@NoArgsConstructor
@ToString
@Getter @Setter
public class SellerVM {

    private Long sellerId;
    private String sellerFirstName;
    private String sellerLastName;


    private String sellerMobileNumber;


    private String sellerEmail;


    private String sellerPassword;

    private String confirmPass;

    public SellerVM(String sellerFirstName, String sellerLastName, String sellerMobileNumber, String sellerEmail, String sellerPassword, String confirmPass) {
        this.sellerFirstName = sellerFirstName;
        this.sellerLastName = sellerLastName;
        this.sellerMobileNumber = sellerMobileNumber;
        this.sellerEmail = sellerEmail;
        this.sellerPassword = sellerPassword;
        this.confirmPass = confirmPass;
    }
}
