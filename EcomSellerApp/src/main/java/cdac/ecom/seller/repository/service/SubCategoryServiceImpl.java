package cdac.ecom.seller.repository.service;

import cdac.ecom.seller.entity.CategoryMaster;
import cdac.ecom.seller.entity.SubCategoryMaster;
import cdac.ecom.seller.model.SubCategoryVM;
import cdac.ecom.seller.repository.CategoryRepo;
import cdac.ecom.seller.repository.SubCategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SubCategoryServiceImpl implements SubCategoryService {

    @Autowired
    private SubCategoryRepo subCategoryRepo;

    @Autowired
    private CategoryRepo categoryRepo;

    @Override
    public List<SubCategoryMaster> getAllSubCategory() {
        List<SubCategoryMaster> subCategoryMasters=subCategoryRepo.findAll();
        return subCategoryMasters;
    }

    @Override
    public String saveSubCategory(SubCategoryVM subCategoryVM) {
        SubCategoryMaster subCategoryMaster=new SubCategoryMaster();
        Optional<CategoryMaster> categoryMaster=categoryRepo.findById(subCategoryVM.getCategoryId());
        if(!categoryMaster.isPresent())
            return "category is mandetory";
        subCategoryMaster.setCategoryMaster(categoryMaster.get());
        subCategoryMaster.setSubCategoryName(subCategoryVM.getSubCategoryName());
        subCategoryMaster.setStatus(subCategoryVM.getStatus());
        subCategoryRepo.save(subCategoryMaster);

        return "SubCategory Saved";
    }

    @Override
    public SubCategoryMaster getSubCategoryById(Long subCategoryId) {
        return subCategoryRepo.findById(subCategoryId).orElse(null);
    }

    @Override
    public String updateSubCategory(Long id,SubCategoryVM subCategoryVM) {
        SubCategoryMaster subCategoryMaster=subCategoryRepo.findById(id).orElse(null);
        subCategoryMaster.setSubCategoryName(subCategoryVM.getSubCategoryName());
        subCategoryMaster.setStatus(subCategoryVM.getStatus());
        subCategoryRepo.save(subCategoryMaster);
        return "SubCategory Update";
    }

    @Override
    public String deleteSubCategory(Long id) {
        subCategoryRepo.deleteById(id);
        return "SubCategory Delted";
    }
}
