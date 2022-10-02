package cdac.ecom.seller.repository;

import cdac.ecom.seller.entity.ProductMaster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepo  extends JpaRepository<ProductMaster,Long> {
}
