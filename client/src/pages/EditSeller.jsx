import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { getSeller } from "../action/sellerAction";

export const EditSeller = () => {
  const getServiceAPIURL = () => `${process.env.REACT_APP_API_URL}`;
  const currentSellerId = localStorage.getItem("userId");

  const { entity, loading, dispatch } = useContext(AppContext);

  const [formData, setFormData] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    loadSeller();
  }, []);

  const loadSeller = async () => {
    await getSeller("seller", dispatch);
  };

  const navigate = useNavigate();

  const handleChange = (fieldName, fieldValue) => {
    setFormData((prev) => ({ ...prev, [fieldName]: fieldValue, 
      sellerPassword:currentSeller[0].sellerPassword,
      confirmPass:currentSeller[0].confirmPass,
      
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.put(
      `${process.env.REACT_APP_API_URL}seller/${currentSeller[0].sellerId}`,
      formData
    );
    navigate("/displayAllSeller");
  };
  const currentSeller=entity.seller.filter((id)=>id.sellerId==currentSellerId);

  console.log(currentSeller);

  return (
    <div>
      <div className="w-auto p-3 gradient">
        <div class="card c2 container margin-top">
          <div>
            <br />
            <br />
            <h1 className="t1">Update Seller</h1>
            <hr />
            <form class="was-validated">
              <div class="form-group">
                <h5>old First Name : {currentSeller[0]?.sellerFirstName}</h5>
                <label for="sellerFirstName">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="sellerFirstName"
                  id="sellerFirstName"
                  // value={location.state.categoryName}
                  placeholder="First Name"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                  required
                />
              </div>
              <br />
              <div class="form-group">
              <h5>old Last Name : {currentSeller[0]?.sellerLastName}</h5>
                <label for="sellerLastName">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="sellerLastName"
                  id="sellerLastName"
                  // value={location.state.categoryName}
                  placeholder="Last Name"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                  required
                />
              </div>
              <div class="form-group">
              <h5>old Mobile No : {currentSeller[0]?.sellerMobileNumber}</h5>
                <label for="sellerMobileNumber">Mobile Number</label>
                <input
                  type="tel"
                  class="form-control"
                  name="sellerMobileNumber"
                  id="sellerMobileNumber"
                  // value={location.state.categoryName}
                  placeholder="Mobile Number"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                  maxLength="10"
                  required
                />
              </div>
              <div class="form-group">
              <h5>old Email : {currentSeller[0]?.sellerEmail}</h5>
                <label for="sellerEmail">Email</label>
                <input
                  type="email"
                  class="form-control"
                  name="sellerEmail"
                  id="sellerEmail"
                  // value={location.state.categoryName}
                  placeholder="Email Id"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                  pattern="[a-zA-Z0-9]+@gmail.com" size="30"
                  required
                />
              </div>
             
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
  );
};