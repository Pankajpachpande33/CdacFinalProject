package cdac.ecom.seller.service;

import cdac.ecom.seller.entity.CategoryMaster;
import cdac.ecom.seller.model.CategoryVM;
import cdac.ecom.seller.repository.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService{

    @Autowired
    private CategoryRepo categoryRepo;

    @Override
    public List<CategoryMaster> getAllCategory() {
        List<CategoryMaster> categoryMasters=categoryRepo.findAll();
        return categoryMasters;
    }

    @Override
    public String saveCategory(CategoryVM categoryVM) {
        CategoryMaster categoryMaster=new CategoryMaster();
        categoryMaster.setCategoryName(categoryVM.getCategoryName());
        categoryMaster.setStatus(categoryVM.getStatus());
        categoryRepo.save(categoryMaster);
        return "Category Saved";
    }

    @Override
    public CategoryMaster getCategoryById(Long categoryId) {
        return categoryRepo.findById(categoryId).orElse(null);
    }

    @Override
    public String updateCategory(Long id, CategoryVM categoryVM) {
        CategoryMaster categoryMaster=categoryRepo.findById(id).orElse(null);
        categoryMaster.setCategoryName(categoryVM.getCategoryName());
        categoryMaster.setStatus(categoryVM.getStatus());
        categoryRepo.save(categoryMaster);
        return "Category Update ";
    }

    @Override
    public String deleteCategory(Long id) {
        categoryRepo.deleteById(id);
        return "Category Deleted";
    }
}
