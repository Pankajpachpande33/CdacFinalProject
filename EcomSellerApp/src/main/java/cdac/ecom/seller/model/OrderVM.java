package cdac.ecom.seller.model;

import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Component;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;

@Component
@NoArgsConstructor
@ToString
@Getter @Setter
public class OrderVM {

    private Long orderId;

    @Temporal(TemporalType.DATE)
    @DateTimeFormat(style = "yyyy-MM-dd")
    private Date orderDate;

    private int orderQuantity;

    @NonNull
    private Long productId;

    @NonNull
    private Long userId;

    public OrderVM(Date orderDate, int orderQuantity, @NonNull Long productId, @NonNull Long userId) {
        this.orderDate = orderDate;
        this.orderQuantity = orderQuantity;
        this.productId = productId;
        this.userId = userId;
    }
}
