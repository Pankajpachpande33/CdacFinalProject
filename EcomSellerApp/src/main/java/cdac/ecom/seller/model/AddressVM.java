package cdac.ecom.seller.model;

import cdac.ecom.seller.entity.UserMaster;
import lombok.*;
import org.springframework.stereotype.Component;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Component
@NoArgsConstructor
@ToString
@Getter @Setter
public class AddressVM {

    private Long addressId;
    private String addressStreet;


    private String addressCity;


    private String addressState;


    private String addressCountry;


    private Integer addressZip;

    @NonNull
    private Long userId;

    public AddressVM(String addressStreet, String addressCity, String addressState, String addressCountry, Integer addressZip, @NonNull Long userId) {
        this.addressStreet = addressStreet;
        this.addressCity = addressCity;
        this.addressState = addressState;
        this.addressCountry = addressCountry;
        this.addressZip = addressZip;
        this.userId = userId;
    }
}
