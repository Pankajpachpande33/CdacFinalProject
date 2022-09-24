import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import './registration.css'
import axios from 'axios';
import { AlertContainer, alert } from 'react-custom-alert';
import { getProduct } from "../action/productAction";
import { AppContext } from "../context/AppContext";


function MyOrders() {

  const [order, setOrder] = useState({});

  const { entity, loading, dispatch ,pageId} = useContext(AppContext);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    await getProduct('product',dispatch)
  };

  const handleChange = (fieldName, fieldValue) => {
    setOrder((prev) => ({ ...prev, [fieldName]: fieldValue }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(order);
    // alert(user.userFirstName +" " +user.userLastName +"\nsuccessfully Register");
   const res = await axios.post('http://127.0.0.1:9999/order', order)
  };

  return (
    <div className='w-auto p-3'>
      
      <div className="w-auto p-3 gradient">
        <div class="card c2 container margin-top">
          <br />
          <h1 className="t1">Order Form</h1>
          <hr />
          <br />
          <form  class="was-validated">
            <div class="form-group">
              <label for="orderDate">Order date</label>
              <input
                type="Date"
                class="form-control"
                id="orderDate"
                placeholder="Order date"
                name="orderDate"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label for="orderQuantity">Order Quantity</label>
              <input
                type="tel"
                class="form-control"
                id="orderQuantity"
                placeholder="Order Quantity"
                name="orderQuantity"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                required
              />
            </div>
            <div class="form-group">
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
            </div>
            {/* <div class="form-group">
              <label for="productId">product Name : </label>
              <input
                type="tel"
                class="form-control"
                id="productId"
                placeholder="product Id"
                name="productId"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                required
              />
            </div> */}
            <div class="form-group">
              <label for="userId">user Id</label>
              <input
                type="tel"
                class="form-control"
                id="userId"
                placeholder="Enter email"
                name="userId"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                required
              />
            </div>
            <br />
            <button onClick={onSubmit} class="btn btn-warning">Continue</button>&nbsp;&nbsp;
            <button class="btn btn-warning" type="reset" value="Reset">
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MyOrders