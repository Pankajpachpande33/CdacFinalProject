package cdac.ecom.seller.repository.service;

import cdac.ecom.seller.entity.ProductMaster;
import cdac.ecom.seller.entity.SellerMaster;
import cdac.ecom.seller.entity.SubCategoryMaster;
import cdac.ecom.seller.model.ProductVM;
import cdac.ecom.seller.repository.CategoryRepo;
import cdac.ecom.seller.repository.ProductRepo;
import cdac.ecom.seller.repository.SellerRepo;
import cdac.ecom.seller.repository.SubCategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements  ProductService{

    @Autowired
    private ProductRepo productRepo;

    @Autowired
    private CategoryRepo categoryRepo;

    @Autowired
    private SubCategoryRepo subCategoryRepo;

    @Autowired
    private SellerRepo sellerRepo;

    @Override
    public List<ProductMaster> getAllProduct() {
        List<ProductMaster> productMasters=productRepo.findAll();
        return productMasters;
    }

    @Override
    public String saveProduct( ProductVM productVM) {
        ProductMaster productMaster = new ProductMaster();
        productMaster.setProductName(productVM.getProductName());
        Optional<SubCategoryMaster> subCategoryMaster = subCategoryRepo.findById(productVM.getSubCategoryId());
        Optional<SellerMaster> sellerMaster=sellerRepo.findById(productVM.getSellerId());
        if (!subCategoryMaster.isPresent() && !sellerMaster.isPresent())
            return " Category ID and Sub Category ID and Seller Id must be present";
        productMaster.setSubCategoryMaster(subCategoryMaster.get());
        productMaster.setSellerMaster(sellerMaster.get());
        productMaster.setImageUploadPath(productVM.getImageUploadPath());
        productMaster.setProductManufacturingDate(productVM.getProductManufacturingDate());
        productMaster.setProductPrice(productVM.getProductPrice());
        productRepo.save(productMaster);

        return " Product Saved";
    }

    @Override
    public ProductMaster getProductById(Long productId) {
        return productRepo.findById(productId).orElse(null);
    }

    @Override
    public String updateProduct(Long id, ProductVM productVM) {
        ProductMaster productMaster= productRepo.findById(id).orElse(null);
        productMaster.setProductName(productVM.getProductName());
        Optional<SubCategoryMaster> subCategoryMaster = subCategoryRepo.findById(productVM.getSubCategoryId());
        Optional<SellerMaster> sellerMaster=sellerRepo.findById(productVM.getSellerId());
        if (!subCategoryMaster.isPresent() && !sellerMaster.isPresent())
            return " Category ID and Sub Category ID and Seller Id must be present";
        productMaster.setSubCategoryMaster(subCategoryMaster.get());
        productMaster.setSellerMaster(sellerMaster.get());
        productMaster.setProductManufacturingDate(productVM.getProductManufacturingDate());
        productMaster.setProductPrice(productVM.getProductPrice());
        productRepo.save(productMaster);
        return "Product Update";
    }

    @Override
    public String deleteProduct(Long id) {
        productRepo.deleteById(id);
        return "Product Deleted";
    }
}
