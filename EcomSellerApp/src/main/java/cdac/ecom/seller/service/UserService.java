package cdac.ecom.seller.service;

import cdac.ecom.seller.entity.UserMaster;
import cdac.ecom.seller.model.UserVM;

import java.util.List;

public interface UserService {

    public List<UserMaster> getAllUser();
    public int saveUser(UserVM userVM);
    public UserMaster getUserById(Long userId);
    public String updateUser(Long id,UserVM userVM);
    public String deleteUser(Long id);
}
