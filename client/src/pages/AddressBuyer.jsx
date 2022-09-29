import axios from "axios";
import React, { useState } from "react";
import "./addressBuyer.css";

const AddressBuyer = () => {
  const [address, setAddress] = useState({});

  //   const [subCategory, setSubCategory]=useState({});

  const handleChange = (fieldName, fieldValue) => {
    setAddress((prev) => ({ ...prev, [fieldName]: fieldValue }));
  };

  //   const handleChangeSub = (fieldName, fieldValue) => {
  //     setSubCategory(prev => ({ ...prev, [fieldName]: fieldValue ,status:true}));
  //   }

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(address);
    alert(
      address.addressStreet +
        "\n " +
        address.addressCity +
        "\n " +
        address.addressState +
        "\n " +
        address.addressCountry +
        "\n " +
        address.addressZip +
        "\n " +
        address.userId +
        "\nsuccessfully Added Your Address"
    );
    const res = await axios.post("http://127.0.0.1:8080/address", address);
  };

  // const onSubmitSub = async e => {
  //   e.preventDefault();
  //   console.log(subCategory)
  //    const res = await axios.post('http://127.0.0.1:9999/subCategory', subCategory)
  // }

  return (
    <div>
      <div className="w-auto p-3 gradient">
        <div class="card c2 container margin-top addressDiv">
          <br />
          <h1 className="t1">Address Details</h1>
          <hr />
          <br />
          <form>
            <div class="form-group">
              <label for="addressStreet">Street Name</label>
              <input
                type="text"
                class="form-control"
                id="addressStreet"
                placeholder="Enter Street Name"
                name="addressStreet"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label for="addressCity">City Name</label>
              <input
                type="text"
                class="form-control"
                id="addressCity"
                placeholder="Enter City Name"
                name="addressCity"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label for="addressState">State Name</label>
              <input
                type="text"
                class="form-control"
                id="addressState"
                placeholder="Enter State Name "
                name="addressState"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label for="addressCountry">Country Name</label>
              <input
                type="text"
                class="form-control"
                id="addressCountry"
                placeholder="Product Seller Id"
                name="addressCountry"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label for="addressZip">Zip Code</label>
              <input
                type="tel"
                class="form-control"
                id="addressZip"
                placeholder="Enter Zip Code"
                name="addressZip"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label for="userId">User Id</label>
              <input
                type="tel"
                class="form-control"
                id="userId"
                placeholder="Enter User ID"
                name="userId"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                required
              />
            </div>
            {/* <button onClick={onSubmit} class="btn btn-warning">Continue</button>&nbsp;&nbsp;
             */}
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
        <br />
        <br />
      </div>
    </div>
  );
};

export default AddressBuyer;
