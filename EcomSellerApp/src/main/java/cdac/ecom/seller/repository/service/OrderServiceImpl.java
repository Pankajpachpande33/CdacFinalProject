package cdac.ecom.seller.repository.service;

import cdac.ecom.seller.entity.OrderMaster;
import cdac.ecom.seller.entity.ProductMaster;
import cdac.ecom.seller.entity.UserMaster;
import cdac.ecom.seller.model.OrderVM;
import cdac.ecom.seller.repository.OrderRepo;
import cdac.ecom.seller.repository.ProductRepo;
import cdac.ecom.seller.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl implements  OrderService {

    @Autowired
    private OrderRepo orderRepo;

    @Autowired
    private ProductRepo productRepo;

    @Autowired
    private UserRepo userRepo;

    @Override
    public List<OrderMaster> getAllOrders() {
        List<OrderMaster> orderMasters=orderRepo.findAll();
        return orderMasters;
    }

    @Override
    public String saveOrder(OrderVM orderVM) {
        OrderMaster orderMaster=new OrderMaster();
        Optional<ProductMaster> productMaster=productRepo.findById(orderVM.getProductId());
        Optional<UserMaster> userMaster=userRepo.findById(orderVM.getUserId());
        if (!productMaster.isPresent() && !userMaster.isPresent())
            return "Required Product ID and User Id ";
        orderMaster.setProductMaster(productMaster.get());
        orderMaster.setUserMaster(userMaster.get());
        orderMaster.setOrderDate(orderVM.getOrderDate());
        orderMaster.setOrderQuantity(orderVM.getOrderQuantity());
        orderRepo.save(orderMaster);
        return "Order Saved";
    }

    @Override
    public OrderMaster getOrderById(Long orderId) {

        return orderRepo.findById(orderId).orElse(null);
    }

    @Override
    public String updateOrder(Long id, OrderVM orderVM) {
        OrderMaster orderMaster=orderRepo.findById(id).orElse(null);
        Optional<ProductMaster> productMaster=productRepo.findById(orderVM.getProductId());
        Optional<UserMaster> userMaster=userRepo.findById(orderVM.getUserId());
        if (!productMaster.isPresent() && !userMaster.isPresent())
            return "Required Product ID and User Id ";
        orderMaster.setProductMaster(productMaster.get());
        orderMaster.setUserMaster(userMaster.get());
        orderMaster.setOrderDate(orderVM.getOrderDate());
        orderMaster.setOrderQuantity(orderVM.getOrderQuantity());
        orderRepo.save(orderMaster);
        return "Order Updated";
    }

    @Override
    public String deleteOrder(Long id) {
        orderRepo.deleteById(id);
        return "Order Deleted";
    }
}
