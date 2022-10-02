import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAddress } from "../../action/addressAction";
import { deleteEntity } from "../../action/commonAction";
import { getOrder } from "../../action/orderAction";

import { AppContext } from "../../context/AppContext";
// import Loader from "../loader/Loader";

const GetAllOrderForSeller = () => {
  const buyerId = localStorage.getItem("userId");
  const { entity, loading, dispatch, currentUser } = useContext(AppContext);

  useEffect(() => {
    loadOrder();
    loadAddress();
  }, []);

  const loadAddress = async () => {
    await getAddress('address',dispatch)
  };
  const loadOrder = async () => {
    await getOrder("order", dispatch);
  };

  console.log(entity.address)
  const currentAddress=entity.address.filter((id)=>id.userMaster.userId==buyerId);

  console.log(currentAddress);
  const [order, setOrder] = useState({});
  const [formData, setFormData] = useState({ categoryName: "", status: "" });
  const [isUpdate, setIsUpdate] = useState(false);

  const navigate = useNavigate();
  console.log(entity.order)

  const editItem = (id) => {
    const order = entity.order.find((f) => f.orderId === id);
    setFormData(order);
    setIsUpdate(true);
    navigate("/editOrder", { state: order });
    //console.log(entity.category,id,category)
  };
  console.log(FormData);
  const deleteItem = async (id) => {
    const currentorder=entity.order.filter((oid)=>oid.orderId==id)
    console.log(id);
    setOrder({orderDate:currentorder[0].orderDate,orderQuantity:currentorder[0].orderQuantity,productId:currentorder[0].productMaster.productId,
      userId:currentorder[0].userMaster.userId,orderStatus:"dispatch"})
    console.log(currentorder)
    try {
      const result = await axios.put(`http://127.0.0.1:9999/order/${id}`,order);
    if (result) {
     console.log(result);
     loadOrder();
    }
    } catch (error) {
      
    }

 };

  
  console.log(buyerId);

  return (
    <div>
      {currentUser === 0 && alert("You must login first")}
      {loading && "loading..."}

      <div className="card subCat22">
        <table className="table container topmt">
          <thead>
            {entity.order < 1 && (
              <div className="danger">No order is Available</div>
            )}
            <tr>
              <th>Buyer Name</th>
              <th> Order Date</th>
              <th>Order Quantity</th>
              <th>Product Name</th>
             
              
              <th>Status</th>
              <th> Order Status</th>

              {/* <td>User Name</td> */}
            </tr>
          </thead>
          <tbody>
            {entity.order.length > 0 &&
              // entity.order.filter(id=>id.user_master_user_id===currentUser).map((item, index) => (
              entity.order
                .filter((id) => id.productMaster.sellerMaster.sellerId == buyerId)
                .map((item, index) => (
                  <tr key={item.orderId}>
                    <td> {item.userMaster.userFirstName + " " + item.userMaster.userLastName}</td>
                    <td>{item.orderDate}</td>
                    <td>{item.orderQuantity}</td>
                    <td>{item.productMaster.productName}</td>
                    {/* <td>{item.userMaster.userName}</td> */}
                  
                
                    
                    <td> 
                       <button className="btn btn-primary"> 
                       <b> {item?.orderStatus}   </b> 
                       </button>
                    
                    </td>
                    <td>
                      <button
                        className="btn btn-danger ml-2"
                       onClick={() => deleteItem(item.orderId)}
                      >
                      Change Order Status
                      </button>
                    </td>
                  </tr>
                  
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetAllOrderForSeller;
