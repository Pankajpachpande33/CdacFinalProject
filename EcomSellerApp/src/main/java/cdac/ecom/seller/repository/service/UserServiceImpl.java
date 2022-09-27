package cdac.ecom.seller.repository.service;

import cdac.ecom.seller.entity.UserMaster;
import cdac.ecom.seller.model.UserVM;
import cdac.ecom.seller.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Override
    public List<UserMaster> getAllUser() {
        List<UserMaster> userMasters=userRepo.findAll();
        return userMasters;
    }

    @Override
    public String saveUser(UserVM userVM) {
        UserMaster userMaster=new UserMaster();
        userMaster.setUserFirstName(userVM.getUserFirstName());
        userMaster.setUserLastName(userVM.getUserLastName());
        userMaster.setUserPassword(userVM.getUserPassword());
        userMaster.setUserEmail(userVM.getUserEmail());
        userMaster.setUserMobile(userVM.getUserMobile());
        userRepo.save(userMaster);
        return "User Saved";
    }

    @Override
    public UserMaster getUserById(Long userId) {

        return userRepo.findById(userId).orElse(null);
    }

    @Override
    public String updateUser(Long id, UserVM userVM) {
        UserMaster userMaster=userRepo.findById(id).orElse(null);
        userMaster.setUserFirstName(userVM.getUserFirstName());
        userMaster.setUserLastName(userVM.getUserLastName());
        userMaster.setUserPassword(userVM.getUserPassword());
        userMaster.setUserEmail(userVM.getUserEmail());
        userMaster.setUserMobile(userVM.getUserMobile());
        userRepo.save(userMaster);
        return "User Update";
    }

    @Override
    public String deleteUser(Long id) {
        userRepo.deleteById(id);
        return "User Deleted";
    }
}
