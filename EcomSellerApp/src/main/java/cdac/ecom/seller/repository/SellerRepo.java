package cdac.ecom.seller.repository;

import cdac.ecom.seller.entity.SellerMaster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SellerRepo  extends JpaRepository<SellerMaster,Long> {
}
