package cdac.ecom.seller.service;

import cdac.ecom.seller.entity.AddressMaster;
import cdac.ecom.seller.model.AddressVM;

import java.util.List;

public interface AddressService {

    public List<AddressMaster> getAllAddress();
    public String saveAddress(AddressVM addressVM);

    public AddressMaster getAddressById(Long addressId);

    public String updateAddress(Long id,AddressVM addressVM);

    public String deleteAddress(Long id);

}
