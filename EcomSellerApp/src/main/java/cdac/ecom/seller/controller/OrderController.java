package cdac.ecom.seller.controller;

import cdac.ecom.seller.entity.OrderMaster;
import cdac.ecom.seller.model.OrderVM;
import cdac.ecom.seller.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController("/order")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/order")
    public List getAllOrder(){
        List<OrderMaster> orderMasters=orderService.getAllOrders();
        return orderMasters;
    }

    @PostMapping("/order")
    public String addOrder(@RequestBody OrderVM orderVM){
        orderService.saveOrder(orderVM);
        return " Order Saved ";
    }

    @GetMapping("/order/{id}")
    public OrderMaster getOrder(@PathVariable Long id){
        return orderService.getOrderById(id);
    }

    @PutMapping("/order/{id}")
    public String updateOrder(@PathVariable Long id, @RequestBody OrderVM orderVM){
        orderService.updateOrder(id,orderVM);
        return "Order Update";
    }

    @DeleteMapping("/order/{id}")
    public String deleteOrder(@PathVariable Long id){
        orderService.deleteOrder(id);
        return "Order Deleted";
    }


}
