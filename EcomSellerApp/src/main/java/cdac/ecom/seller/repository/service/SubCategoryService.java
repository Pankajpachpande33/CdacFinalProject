package cdac.ecom.seller.repository.service;

import cdac.ecom.seller.entity.SubCategoryMaster;
import cdac.ecom.seller.model.SubCategoryVM;

import java.util.List;

public interface SubCategoryService {

    public List<SubCategoryMaster> getAllSubCategory();
    public String saveSubCategory(SubCategoryVM subCategoryVM);
    public SubCategoryMaster getSubCategoryById(Long subCategoryId);
    public  String updateSubCategory(Long id,SubCategoryVM subCategoryVM);
    public String deleteSubCategory(Long id);
}
