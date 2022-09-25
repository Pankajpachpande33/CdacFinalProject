package cdac.ecom.seller.repository;

import cdac.ecom.seller.entity.SellerMaster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface SellerRepo  extends JpaRepository<SellerMaster,Long> {
    @Query("select u  from SELLER u where SELLER_EMAIL=:userEmail")
    public SellerMaster getUserBySellerEmail(@Param("userEmail")String sellerId);
}
