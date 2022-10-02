package cdac.ecom.seller.repository;

import cdac.ecom.seller.entity.UserMaster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo  extends JpaRepository<UserMaster, Long> {
    @Query("select u  from USER_LIST u where userEmail=:userEmail")
    public UserMaster getUserByUserEmail(@Param("userEmail") String userId);
}
