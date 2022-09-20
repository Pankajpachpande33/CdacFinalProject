package cdac.ecom.seller.controller;

import cdac.ecom.seller.entity.SubCategoryMaster;
import cdac.ecom.seller.model.SubCategoryVM;
import cdac.ecom.seller.service.SubCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController("/subCategory")
public class SubCategoryController {

    @Autowired
    private SubCategoryService subCategoryService;

    @GetMapping("/subCategory")
    public List getAllSubCategory(){
        List<SubCategoryMaster> subCategoryMasters=subCategoryService.getAllSubCategory();
        return  subCategoryMasters;
    }

    @PostMapping("/subCategory")
    public String addSubCategory(@RequestBody SubCategoryVM subCategoryVM){
        subCategoryService.saveSubCategory(subCategoryVM);
        return "SubCategory Saved";
    }

    @GetMapping("/subCategory/{id}")
    public SubCategoryMaster getSubCategory(@PathVariable Long id){
        return subCategoryService.getSubCategoryById(id);
    }

    @PutMapping("/subCategory/{id}")
    public String updateSubCategory(@PathVariable Long id,@RequestBody SubCategoryVM subCategoryVM){
        subCategoryService.updateSubCategory(id, subCategoryVM);
        return "SubCategory Update Successfully";
    }

    @DeleteMapping("/subCategory/{id}")
    public String deleteSubCategory(@PathVariable Long id){
        subCategoryService.deleteSubCategory(id);
        return "SubCategory Deleted";
    }

}
