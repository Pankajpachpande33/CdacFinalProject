import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./registration.css";
import axios from "axios";
import { AlertContainer, alert } from "react-custom-alert";
import { getProduct } from "../action/productAction";
import { AppContext } from "../context/AppContext";

function MyOrders() {
  const buyerId = localStorage.getItem("userId");

  const [order, setOrder] = useState({});

  const { entity, loading, dispatch, currentUser } = useContext(AppContext);

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    await getProduct("product", dispatch);
  };

  const handleChange = (fieldName, fieldValue) => {
    setOrder((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
      productId: location.state.productId,
      userId: buyerId,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
        alert("Successfully")
        navigate("/displayAllOrder");
        const res = await axios.post("http://127.0.0.1:9999/order", order);
      
  };

  return (
    <div className="w-auto p-3">
      {currentUser && "Hello"}
      <div className="w-auto p-3 gradient">
        <div class="card c2 container margin-top">
          <br />
          <h1 className="t1">Order Form</h1>
          <hr />
          <h2 className="text-center font-weight-bold">
            {location.state.productName}
          </h2>
          <br />
          <form class="was-validated">
            <div class="form-group">
              <label for="orderDate">Order date</label>
              <input
                type="Date"
                class="form-control"
                id="orderDate"
                placeholder="Order date"
                name="orderDate"
                //  value={new Date().toJSON().slice(0, 10)}
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label for="orderQuantity">Order Quantity</label>
              <input
                type="number"
                class="form-control"
                id="orderQuantity"
                placeholder="Order Quantity"
                name="orderQuantity"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                required
              />
            </div>
            {/* <div class="form-group">
                <label for="productId">Choose Product Name : </label>

                <select name="productId"
                  id="productId"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}>
                    <option value="##" >Select</option>
                  {entity.product.length>0 &&
                  entity.product.map((item,index)=>(
                    <option value={item.productId}>{item.productName}</option>
                  ))}
                </select>
            </div> */}
            <div class="form-group">
              {/* <label for="productId">product Name : </label> */}
              <input
                type="hidden"
                class="form-control"
                id="productId"
                placeholder={location.state.productName}
                name="productId"
                value={location.state.productId}
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                required
              />
              {/* <div>
                {location.state.productName}
              </div> */}
            </div>
            <div class="form-group">
              <label for="userId"></label>
              <input
                type="hidden"
                class="form-control"
                id="userId"
                placeholder="Enter User Id"
                name="userId"
                value={buyerId}
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                required
              />
            </div>
            <br />
            <button onClick={onSubmit} class="btn btn-warning">
              Continue
            </button>
            &nbsp;&nbsp;
            <button class="btn btn-warning" type="reset" value="Reset">
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MyOrders;
