package cdac.ecom.seller.repository;

import cdac.ecom.seller.entity.OrderMaster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepo extends JpaRepository<OrderMaster,Long> {
}
