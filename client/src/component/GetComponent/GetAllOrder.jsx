import { useContext, useEffect, useState } from "react";
import { getOrder } from "../../action/orderAction";


import { AppContext } from "../../context/AppContext";
// import Loader from "../loader/Loader";

const GetAllOrder = () => {
  const { entity, loading, dispatch } = useContext(AppContext);

  useEffect(() => {
    loadOrder();
  }, []);

  const loadOrder = async () => {
    await getOrder('order',dispatch)
  };

  return (
    <div>
      {loading && 'loading...'}
      <table className="table container">
        <thead>
          <tr>
            <td> Order Date</td>
            <td>Order Quantity</td>
            <td>Product Name</td>
            {/* <td>User Name</td> */}
          </tr>
        </thead>
        <tbody>
          {entity.order.length > 0 &&
            entity.order.map((item, index) => (
              <tr key={item.orderId}>
                <td>{item.orderDate}</td>
                <td>{item.orderQuantity}</td>
                <td>{item.productMaster.productName}</td>
                {/* <td>{item.userMaster.userName}</td> */}
                <td>
                  <button
                    className="btn btn-primary mr-2"
                    // onClick={() => editItem(item._id)}
                  >
                    Buy
                  </button>
                  <button
                    className="btn btn-danger ml-2"
                    // onClick={() => deleteItem(item._id)}
                  >
                    Back
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetAllOrder;