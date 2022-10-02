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
public class UserVM {


    private Long userId;

    private String userFirstName;

    private String userLastName;

    private String userPassword;

    private String confirmPass;
    private String userEmail;

    private String userMobile;

    public UserVM(String userFirstName, String userLastName, String userPassword, String confirmPass, String userEmail, String userMobile) {
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
        this.userPassword = userPassword;
        this.confirmPass = confirmPass;
        this.userEmail = userEmail;
        this.userMobile = userMobile;
    }
}
