import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAddress } from "../../action/addressAction";
import { deleteEntity } from "../../action/commonAction";
import { getOrder } from "../../action/orderAction";

import { AppContext } from "../../context/AppContext";
// import Loader from "../loader/Loader";

const GetAllOrder = () => {
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
  const [formData, setFormData] = useState({ categoryName: "", status: "" });
  const [isUpdate, setIsUpdate] = useState(false);

  const navigate = useNavigate();

  const editItem = (id) => {
    const order = entity.order.find((f) => f.orderId === id);
    setFormData(order);
    setIsUpdate(true);
    navigate("/editOrder", { state: order });
    //console.log(entity.category,id,category)
  };
  console.log(FormData);
  const deleteItem = async (id) => {
    console.log(id);
    const result = await deleteEntity(`order/${id}`);
    if (result) {
      console.log(result);
      loadOrder();
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
              <th> Order Date</th>
              <th>Order Quantity</th>
              <th>Product Name</th>
              <th>Street Address</th>
              <th>City</th>
              <th>Edit/Delete</th>

              {/* <td>User Name</td> */}
            </tr>
          </thead>
          <tbody>
            {entity.order.length > 0 &&
              // entity.order.filter(id=>id.user_master_user_id===currentUser).map((item, index) => (
              entity.order
                .filter((id) => id.userMaster.userId == buyerId)
                .map((item, index) => (
                  <tr key={item.orderId}>
                    <td>{item.orderDate}</td>
                    <td>{item.orderQuantity}</td>
                    <td>{item.productMaster.productName}</td>
                    {/* <td>{item.userMaster.userName}</td> */}
                    <td>{currentAddress[0]?.addressState}</td>
                    <td>{currentAddress[0]?.addressCity}</td>
                    <td>
                      <button
                        className="btn btn-danger ml-2"
                        onClick={() => deleteItem(item.orderId)}
                      >
                        Cancel Order
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

export default GetAllOrder;
