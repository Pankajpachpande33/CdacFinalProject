package cdac.ecom.seller.service;

import cdac.ecom.seller.entity.ProductMaster;
import cdac.ecom.seller.model.ProductVM;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import javax.servlet.http.HttpSession;
import java.util.List;

public interface ProductService {

    public List<ProductMaster> getAllProduct();
    public String saveProduct( ProductVM productVM);
    public ProductMaster getProductById(Long productId);
    public String updateProduct(Long id, ProductVM productVM );
    public String deleteProduct(Long id);
}
