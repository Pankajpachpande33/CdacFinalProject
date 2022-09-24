package cdac.ecom.seller.service;

import cdac.ecom.seller.entity.SellerMaster;
import cdac.ecom.seller.model.SellerVM;

import java.util.List;

public interface SellerService {

    public List<SellerMaster> getAllSeller();
    public String saveSeller(SellerVM sellerVM);

    public SellerMaster getSellerById(Long sellerId);

    public String updateSeller(Long id,SellerVM sellerVM);

    public String deleteSeller(Long id);
}
