package cdac.ecom.seller.service;

import cdac.ecom.seller.model.LoginVM;
import cdac.ecom.seller.repository.UserRepo;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;

public interface LoginService {


    public Long buyerLogin(LoginVM loginVM);

    public Long sellerLogin(LoginVM loginVM);

}
