package cdac.ecom.seller.controller;

import cdac.ecom.seller.entity.AddressMaster;
import cdac.ecom.seller.model.AddressVM;
import cdac.ecom.seller.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController("/address")
public class AddressController {

    @Autowired
    private AddressService addressService;

    @GetMapping("/address")
    public List<AddressMaster> getAllAddresses(){
        List<AddressMaster> addressMasters=addressService.getAllAddress();
        return addressMasters;
    }

    @PostMapping("/address")
    public String addAddress(@RequestBody AddressVM addressVM){
        addressService.saveAddress(addressVM);
        return "Address Saved";
    }

    @GetMapping("/address/{id}")
    public AddressMaster getAddress(@PathVariable Long id){
         return addressService.getAddressById(id);
    }

    @PutMapping("/address/{id}")
    public String updateAddress(@PathVariable Long id, @RequestBody AddressVM addressVM){
        addressService.updateAddress(id,addressVM);
        return "Address Updated";
    }

    @DeleteMapping("/address/{id}")
    public String deleteAddress(@PathVariable Long id){
        addressService.deleteAddress(id);
        return "Address Deleted";
    }

}
