import React, { useEffect,useState } from 'react'
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';



export const EditOrder = () => {

    const [order, setOrder] = useState({});
    const location = useLocation()
    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault();

        console.log(order);
       
        const res = await axios.put(`http://127.0.0.1:9999/order/${location.state.orderId}`, order);
        navigate("/displayOrder")
      };

      const handleChange = (fieldName, fieldValue) => {
        setOrder((prev) => ({ ...prev, [fieldName]: fieldValue, status: true }));
      };

      useEffect(() => {
        setOrder(location.state);
        
    },[location.state])
    
    console.log(location.state)
    
 
    return (


    
      <div>
      <div className="w-auto p-3 gradient">
        <div class="card c2 container margin-top">
          <div>
            <br />
            <br />
            <h1 className="t1">Update Order</h1>
            <hr />
            <form>
              <div class="form-group">
                <label for="orderDate">Order Date</label>
                <input
                  type="Date"
                  class="form-control"
                  name="orderDate"
                  id="orderDate"
                 // value={location.state.categoryName}
                  placeholder="Order Date"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                   required
                />
              </div>
              <br />
              <div class="form-group">
                <label for="orderQuantity">Order Quantity</label>
                <input
                  type="tel"
                  class="form-control"
                  name="orderQuantity"
                  id="orderQuantity"
                 // value={location.state.categoryName}
                  placeholder="Order Quantity"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                   required
                />
              </div>
              <br />
              <div class="form-group">
                <label for="productName">Product Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="productName"
                  id="productName"
                 // value={location.state.categoryName}
                  placeholder="Product Name"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                   required
                />
              </div>
              <br />
              <button onClick={onSubmit} class="btn btn-warning">
                Submit
              </button>
              &nbsp;&nbsp;
              <button class="btn btn-warning" type="reset" value="Reset">
                Reset
              </button>
            </form>
          </div>
          
            </div>  
    </div>
    </div>
  )
}

