package cdac.ecom.seller.controller;

import cdac.ecom.seller.entity.CategoryMaster;
import cdac.ecom.seller.model.CategoryVM;
import cdac.ecom.seller.repository.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController("/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;


    @GetMapping("/category")
    public List getAllCategory(){
        List<CategoryMaster> categoryMasters=categoryService.getAllCategory();
        return categoryMasters;
    }

    @PostMapping("/category")
    public String addCategory(@RequestBody CategoryVM categoryVM){
        categoryService.saveCategory(categoryVM);
        return "Saved";
    }

    @GetMapping("/category/{id}")
    public CategoryMaster getCategory(@PathVariable Long id){
        return categoryService.getCategoryById(id);
    }

    @PutMapping("/category/{id}")
    public String updateCategory(@PathVariable Long id, @RequestBody CategoryVM categoryVM){
        categoryService.updateCategory(id, categoryVM);
        return "Update Successfully";
    }

    @DeleteMapping("/category/{id}")
    public String deleteCategory(@PathVariable Long id){
        categoryService.deleteCategory(id);
        return "Category Deleted";
    }

}
