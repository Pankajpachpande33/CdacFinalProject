package cdac.ecom.seller.controller;

import cdac.ecom.seller.entity.SellerMaster;
import cdac.ecom.seller.model.SellerVM;
import cdac.ecom.seller.service.SellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SellerController {

    @Autowired
    private SellerService sellerService;

    @GetMapping("/seller")
    public List getAllSeller(){
        return sellerService.getAllSeller();
    }

    @PostMapping("/seller")
    public int saveSeller( @RequestBody  SellerVM sellerVM){
       int result= sellerService.saveSeller(sellerVM);
        return result;
    }

    @GetMapping("/seller/{id}")
    public SellerMaster getSellerById(@PathVariable Long sellerId){
         return sellerService.getSellerById(sellerId);
    }

    @PutMapping("/seller/{id}")
    public String updateSeller(@PathVariable Long id,@RequestBody SellerVM sellerVM){
        sellerService.updateSeller(id,sellerVM);
        return "Seller Update";
    }

    @DeleteMapping("/seller/{id}")
    public String deleteSeller(@PathVariable Long id){
        sellerService.deleteSeller(id);
        return "Seller Deleted";
    }
}
