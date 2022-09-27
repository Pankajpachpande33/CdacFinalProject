package cdac.ecom.seller.repository.service;

import cdac.ecom.seller.entity.AddressMaster;
import cdac.ecom.seller.entity.UserMaster;
import cdac.ecom.seller.model.AddressVM;
import cdac.ecom.seller.repository.AddressRepo;
import cdac.ecom.seller.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AddressServiceImpl  implements  AddressService{

    @Autowired
    private AddressRepo addressRepo;

    @Autowired
    private UserRepo userRepo;

    @Override
    public List<AddressMaster> getAllAddress() {
        List<AddressMaster> addressMasters=addressRepo.findAll();
        return addressMasters;
    }

    @Override
    public String saveAddress(AddressVM addressVM) {
        AddressMaster addressMaster=new AddressMaster();
        Optional<UserMaster> userMaster=userRepo.findById(addressVM.getUserId());
        if(!userMaster.isPresent())
            return "User Must be Present";
        addressMaster.setUserMaster(userMaster.get());
        addressMaster.setAddressStreet(addressVM.getAddressStreet());
        addressMaster.setAddressCity(addressVM.getAddressCity());
        addressMaster.setAddressState(addressVM.getAddressState());
        addressMaster.setAddressCountry(addressVM.getAddressCountry());
        addressMaster.setAddressZip(addressVM.getAddressZip());
        addressRepo.save(addressMaster);
        return " Address Saved";
    }

    @Override
    public AddressMaster getAddressById(Long addressId) {

        return addressRepo.findById(addressId).orElse(null);
    }

    @Override
    public String updateAddress(Long id, AddressVM addressVM) {
        AddressMaster addressMaster=addressRepo.findById(id).orElse(null);
        Optional<UserMaster> userMaster=userRepo.findById(addressVM.getUserId());
        if(!userMaster.isPresent())
            return "User Must Be Present";
        addressMaster.setUserMaster(userMaster.get());
        addressMaster.setAddressStreet(addressVM.getAddressStreet());
        addressMaster.setAddressCity(addressVM.getAddressCity());
        addressMaster.setAddressState(addressVM.getAddressState());
        addressMaster.setAddressCountry(addressVM.getAddressCountry());
        addressMaster.setAddressZip(addressVM.getAddressZip());
        addressRepo.save(addressMaster);
        return "Address Update";
    }

    @Override
    public String deleteAddress(Long id) {
        addressRepo.deleteById(id);
        return "Address Deleted";
    }
}
