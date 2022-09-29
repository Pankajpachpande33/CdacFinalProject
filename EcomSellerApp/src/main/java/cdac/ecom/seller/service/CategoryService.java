package cdac.ecom.seller.service;

import cdac.ecom.seller.entity.CategoryMaster;
import cdac.ecom.seller.model.CategoryVM;

import java.util.List;

public interface CategoryService {

    public List<CategoryMaster> getAllCategory();
    public String saveCategory(CategoryVM categoryVM);
    public CategoryMaster getCategoryById(Long categoryId);
    public String updateCategory(Long id,CategoryVM categoryVM);
    public String deleteCategory(Long id);
}
