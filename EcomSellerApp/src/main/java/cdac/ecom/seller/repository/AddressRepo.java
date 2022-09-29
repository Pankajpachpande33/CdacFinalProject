package cdac.ecom.seller.repository;

import cdac.ecom.seller.entity.AddressMaster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressRepo  extends JpaRepository<AddressMaster,Long> {
}
