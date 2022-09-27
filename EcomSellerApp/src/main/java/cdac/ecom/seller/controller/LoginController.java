package cdac.ecom.seller.controller;

import cdac.ecom.seller.model.LoginVM;
import cdac.ecom.seller.repository.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping("/userLogin")
    public Long login(@RequestBody LoginVM loginVM){
        Long id=loginService.buyerLogin(loginVM);
        if(id>0){
            return id;
        }else{
            return 0l;
        }
    }

    @PostMapping("/sellerLogin")
    public Long seller(@RequestBody LoginVM loginVM){
        Long id=loginService.sellerLogin(loginVM);
        if(id>0){
            return id;
        }else{
            return 0l;
        }
    }
}
