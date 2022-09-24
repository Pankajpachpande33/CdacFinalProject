package cdac.ecom.seller.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity(name = "USER_LIST")
@NoArgsConstructor
@ToString
@Getter @Setter
public class UserMaster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "USER_ID")
    private Long userId;

    @Column(name = "FIRST_NAME")
    private String userFirstName;

    @Column(name = "LAST_NAME")
    private String userLastName;



    @Column(name = "USER_PASSWORD", length = 15)
    private String userPassword;

    @Column(name = "USER_EMAIL")
    private String userEmail;

    @Column(name = "USER_MOBILE")
    private String userMobile;

    public UserMaster(String userFirstName, String userLastName, String userPassword, String userEmail, String userMobile) {
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
        this.userPassword = userPassword;
        this.userEmail = userEmail;
        this.userMobile = userMobile;
    }
}
