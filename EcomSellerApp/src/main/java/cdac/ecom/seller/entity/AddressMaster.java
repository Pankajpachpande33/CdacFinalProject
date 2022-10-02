package cdac.ecom.seller.entity;


import lombok.*;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@ToString
@Getter @Setter
public class AddressMaster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ADDRESS_ID")
    private Long addressId;

    @Column(name = "ADDRESS_STREET")
    private String addressStreet;

    @Column(name = "ADDRESS_CITY")
    private String addressCity;

    @Column(name = "ADDRESS_STATE")
    private String addressState;

    @Column(name = "ADDRESS_COUNTRY")
    private String addressCountry;

    @Column(name = "ADDRESS_ZIP")
    private Integer addressZip;

    @OneToOne
    @JoinColumn(name = "USER_ID")
    private UserMaster userMaster;

    public AddressMaster(String addressStreet, String addressCity, String addressState, String addressCountry, Integer addressZip, UserMaster userMaster) {
        this.addressStreet = addressStreet;
        this.addressCity = addressCity;
        this.addressState = addressState;
        this.addressCountry = addressCountry;
        this.addressZip = addressZip;
        this.userMaster = userMaster;
    }
}
