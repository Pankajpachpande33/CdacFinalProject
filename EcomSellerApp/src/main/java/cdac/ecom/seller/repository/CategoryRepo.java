package cdac.ecom.seller.repository;

import cdac.ecom.seller.entity.CategoryMaster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepo extends JpaRepository<CategoryMaster,Long> {
}
