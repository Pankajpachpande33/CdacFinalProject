package cdac.ecom.seller.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "order")
@NoArgsConstructor
@ToString
@Getter @Setter
public class OrderMaster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ORDER_ID")
    private Long orderId;

    @Column(name = "ORDER_DATE")
    @Temporal(TemporalType.DATE)
    @DateTimeFormat(style = "yyyy-MM-dd")
    private Date orderDate;

    @Column(name = "ORDER_QUANTITY")
    private int orderQuantity;

    @ManyToOne
    @JoinColumn(name = "PRODUCT_ID")
    private ProductMaster productMaster;

    @ManyToOne
    @JoinColumn(name = "user_master_user_id")
    private UserMaster userMaster;

    @Column(name="order_status")
    private String orderStatus;

    public OrderMaster(Date orderDate, int orderQuantity, ProductMaster productMaster, UserMaster userMaster, String orderStatus) {
        this.orderDate = orderDate;
        this.orderQuantity = orderQuantity;
        this.productMaster = productMaster;
        this.userMaster = userMaster;
        this.orderStatus = orderStatus;
    }
}
