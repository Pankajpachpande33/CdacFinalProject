package cdac.ecom.seller.repository.service;

import cdac.ecom.seller.entity.OrderMaster;
import cdac.ecom.seller.model.OrderVM;

import java.util.List;

public interface OrderService {

    public List<OrderMaster> getAllOrders();
    public String saveOrder(OrderVM orderVM);
    public OrderMaster getOrderById(Long orderId);
    public String updateOrder(Long id, OrderVM orderVM);
    public String deleteOrder(Long id);
}
