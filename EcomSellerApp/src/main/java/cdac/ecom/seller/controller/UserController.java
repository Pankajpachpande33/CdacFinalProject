package cdac.ecom.seller.controller;

import cdac.ecom.seller.entity.UserMaster;
import cdac.ecom.seller.model.UserVM;
import cdac.ecom.seller.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/user")
    public List getAllUsers(){
        List<UserMaster> userMasters=userService.getAllUser();
        return userMasters;
    }

    @PostMapping("/user")
    public int addUser(@RequestBody UserVM userVM){
        int result =userService.saveUser(userVM);
        return result;
    }

    @GetMapping("/user/{id}")
    public UserMaster getUser(@PathVariable Long id){
        return userService.getUserById(id);
    }

    @PutMapping("/user/{id}")
    public String updateUser(@PathVariable Long id, @RequestBody UserVM userVM){
        userService.updateUser(id,userVM);
        return "User Update";
    }

    @DeleteMapping("/user/{id}")
    public String deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
        return "User Deleted";
    }
}
