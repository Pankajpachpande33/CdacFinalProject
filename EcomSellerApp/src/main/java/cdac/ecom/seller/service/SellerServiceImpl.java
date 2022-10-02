package cdac.ecom.seller.service;

import cdac.ecom.seller.entity.SellerMaster;
import cdac.ecom.seller.model.SellerVM;
import cdac.ecom.seller.repository.SellerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SellerServiceImpl implements SellerService {

    @Autowired
    private SellerRepo sellerRepo;

    @Override
    public List<SellerMaster> getAllSeller() {
//        List<SellerMaster> sellerMasters=sellerRepo.findAll();
//        return sellerMasters ;

        return sellerRepo.findAll();
    }

    @Override
    public int saveSeller(SellerVM sellerVM) {
        if(sellerVM.getSellerPassword().equals(sellerVM.getConfirmPass())){
            SellerMaster sellerMaster=new SellerMaster();
            sellerMaster.setSellerFirstName(sellerVM.getSellerFirstName());
            sellerMaster.setSellerLastName(sellerVM.getSellerLastName());
            sellerMaster.setSellerEmail(sellerVM.getSellerEmail());
            sellerMaster.setSellerPassword(sellerVM.getSellerPassword());
            sellerMaster.setSellerMobileNumber(sellerVM.getSellerMobileNumber());
            sellerRepo.save(sellerMaster);
            return 200;
        }else {
            return 1;
        }

    }

    @Override
    public SellerMaster getSellerById(Long sellerId) {
        return sellerRepo.findById(sellerId).orElse(null);
    }

    @Override
    public String updateSeller(Long id, SellerVM sellerVM) {
        SellerMaster sellerMaster=sellerRepo.findById(id).orElse(null);
        sellerMaster.setSellerFirstName(sellerVM.getSellerFirstName());
        sellerMaster.setSellerLastName(sellerVM.getSellerLastName());
        sellerMaster.setSellerEmail(sellerVM.getSellerEmail());
        sellerMaster.setSellerPassword(sellerVM.getSellerPassword());
        sellerMaster.setSellerMobileNumber(sellerVM.getSellerMobileNumber());
        sellerRepo.save(sellerMaster);
        return "Update Seller";
    }

    @Override
    public String deleteSeller(Long id) {
        sellerRepo.deleteById(id);
        return "Seller Deleted";
    }
}
