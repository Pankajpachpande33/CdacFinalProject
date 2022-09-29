package cdac.ecom.seller.repository;

import cdac.ecom.seller.entity.SubCategoryMaster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubCategoryRepo extends JpaRepository<SubCategoryMaster,Long> {
}
