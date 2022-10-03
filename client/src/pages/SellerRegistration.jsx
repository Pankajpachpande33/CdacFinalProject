import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./registration.css";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { getSeller } from "../action/sellerAction";

const SellerRegistration = () => {
  const [user, setUser] = useState({});
  const { entity, loading, dispatch } = useContext(AppContext);
  const navigation = useNavigate();

  useEffect(() => {
    loadSeller();
  }, []);

  const loadSeller = async () => {
    await getSeller("seller", dispatch);
  };


  const handleChange = (fieldName, fieldValue) => {
    setUser((prev) => ({ ...prev, [fieldName]: fieldValue }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    const sellerCurrentEmail = entity.seller.filter(
      (id) => id.sellerEmail === user.sellerEmail
    );
    if (sellerCurrentEmail.length === 0) {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}seller`, user);
    if (res.data === 200) {
      alert(
        user.sellerFirstName +
        "\n " + 
        user.sellerLastName +
        "\n " + 
        user.sellerMobileNumber + 
        "\n " +
        user.sellerEmail + 
        "\n successfully Added Your seller"   
      )
      navigation("/sellerLogin");
    }
    if (res.data === 1) {
      alert("Wrong"+"\nboth password should match");
    }
    }else{
        alert("Email Already Registered")
    }
  };

  return (
    <div>
      <div className="w-auto p-3 gradient">
        <div class="card c2 container margin-top">
          <br />
          <h1 className="t1">Create Seller Account</h1>
          <hr />
          <br />
          <form class="was-validated">
            <div class="form-group">
              <label for="sellerFirstName"> First Name</label>
              <input
                type="text"
                class="form-control"
                id="sellerFirstName"
                placeholder=" Seller First name"
                name="sellerFirstName"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label for="sellerLastName">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="sellerLastName"
                placeholder="Last name"
                name="sellerLastName"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label for="sellerMobileNumber">Mobile Number</label>
              <input
                type="text"
                class="form-control"
                id="sellerMobileNumber"
                placeholder="Mobile Number"
                name="sellerMobileNumber"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                maxlength="10"
                required
              />
            </div>
            <div class="form-group">
              <label for="sellerEmail">Email</label>
              <input
                type="text"
                class="form-control"
                id="sellerEmail"
                placeholder="Enter email"
                name="sellerEmail"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                pattern="[a-zA-Z0-9]+@gmail.com" size="30"
                required
              />
            </div>
            <div class="form-group">
              <label for="sellerPassword">Password:</label>
              <input
                type="password"
                class="form-control"
                id="sellerPassword"
                placeholder="Enter password"
                name="sellerPassword"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                maxLength="8"
                required
              />
            </div>
            <div class="form-group">
              <label for="confirmPass">Confirm Password:</label>
              <input
                type="password"
                class="form-control"
                id="confirmPass"
                placeholder="Enter Confirm password"
                name="confirmPass"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                maxLength="8"
                required
              />
            </div>
            <div class="form-group form-check">
              <label class="form-check-label" />
              <br />
              <input
                class="form-check-input"
                type="checkbox"
                name="remember"
              />{" "}
              Remember me
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
};

export default SellerRegistration;