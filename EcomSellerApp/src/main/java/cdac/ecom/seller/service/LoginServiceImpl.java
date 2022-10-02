package cdac.ecom.seller.service;

import cdac.ecom.seller.entity.SellerMaster;
import cdac.ecom.seller.entity.UserMaster;
import cdac.ecom.seller.model.LoginVM;
import cdac.ecom.seller.repository.SellerRepo;
import cdac.ecom.seller.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private SellerRepo sellerRepo;

    @Override
    public Long buyerLogin(LoginVM loginVM) {
        UserMaster userMaster=userRepo.getUserByUserEmail(loginVM.getUsername());
        if(userMaster.getUserEmail().equals(loginVM.getUsername()) && userMaster.getUserPassword().equals(loginVM.getPassword())){
            return userMaster.getUserId();
        }else {
            return 0l;
        }
    }

    @Override
    public Long sellerLogin(LoginVM loginVM) {
        SellerMaster sellerMaster=sellerRepo.getUserBySellerEmail((loginVM.getUsername()));
        if(sellerMaster.getSellerEmail().equals(loginVM.getUsername()) && sellerMaster.getSellerPassword().equals(loginVM.getPassword())){
            return sellerMaster.getSellerId();
        }else {
            return 0l;
        }
    }
}
