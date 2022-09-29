import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export const EditSeller = () => {
  const [seller, setSeller] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log(seller);

    const res = await axios.put(
      `http://127.0.0.1:8080/seller/${location.state.sellerId}`,
      seller
    );
    navigate("/displaySeller");
  };

  const handleChange = (fieldName, fieldValue) => {
    setSeller((prev) => ({ ...prev, [fieldName]: fieldValue, status: true }));
  };

  useEffect(() => {
    setSeller(location.state);
  }, [location.state]);

  console.log(location.state);

  return (
    <div>
      <div className="w-auto p-3 gradient">
        <div class="card c2 container margin-top">
          <div>
            <br />
            <br />
            <h1 className="t1">Update Seller</h1>
            <hr />
            <form>
              <div class="form-group">
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
                <label for="sellerMobileNumber">Mobile Number</label>
                <input
                  type="tel"
                  class="form-control"
                  name="sellerMobileNumber"
                  id="sellerMobileNumber"
                  // value={location.state.categoryName}
                  placeholder="Mobile Number"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                  required
                />
              </div>
              <div class="form-group">
                <label for="sellerEmail">Email</label>
                <input
                  type="email"
                  class="form-control"
                  name="sellerEmail"
                  id="sellerEmail"
                  // value={location.state.categoryName}
                  placeholder="Email Id"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                  required
                />
              </div>
              <div class="form-group">
                <label for="sellerPassword">Password</label>
                <input
                  type="password"
                  class="form-control"
                  name="sellerPassword"
                  id="sellerPassword"
                  // value={location.state.categoryName}
                  placeholder="password"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                  required
                />
              </div>
              <div class="form-group">
                <label for="confirmPass">Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  name="confirmPass"
                  id="confirmPass"
                  // value={location.state.categoryName}
                  placeholder="Confirm Password"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
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
