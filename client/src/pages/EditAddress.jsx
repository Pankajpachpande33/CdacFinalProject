import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export const EditAddress = () => {
  const getServiceAPIURL = () => `${process.env.REACT_APP_API_URL}`;
  const [address, setAddress] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.put(
      `${process.env.REACT_APP_API_URL}address/${location.state.addressId}`,
      address
    );
    navigate("/displayAllAddress");
  };

  const handleChange = (fieldName, fieldValue) => {
    setAddress((prev) => ({ ...prev, [fieldName]: fieldValue, status: true}));
  };

  useEffect(() => {
    setAddress(location.state);
  }, [location.state]);

  console.log(location.state);

  return (
    <div>
      <div className="w-auto p-3 gradient">
        <div class="card c2 container margin-top">
          <div>
            <br />
            <br />
            <h1 className="t1">Update User Address</h1>
            <hr />
            <form>
              <div class="form-group">
                <label for="addressStreet">Address Street</label>
                <input
                  type="text"
                  class="form-control"
                  name="addressStreet"
                  id="addressStreet"
                  // value={location.state.categoryName}
                  placeholder="Address Street"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                  required
                />
              </div>
              <br />
              <div class="form-group">
                <label for="addressCity">Address City</label>
                <input
                  type="text"
                  class="form-control"
                  name="addressCity"
                  id="addressCity"
                  // value={location.state.categoryName}
                  placeholder="Address City"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                  required
                />
              </div>
              <div class="form-group">
                <label for="addressState">Address State</label>
                <input
                  type="text"
                  class="form-control"
                  name="addressState"
                  id="addressState"
                  // value={location.state.categoryName}
                  placeholder="Address State"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                  required
                />
              </div>
              <div class="form-group">
                <label for="addressCountry">Address Country</label>
                <input
                  type="text"
                  class="form-control"
                  name="addressCountry"
                  id="addressCountry"
                  // value={location.state.categoryName}
                  placeholder="Address Country"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                  required
                />
              </div>
              <div class="form-group">
                <label for="addressZip">Address Zip</label>
                <input
                  type="tel"
                  class="form-control"
                  name="addressZip"
                  id="addressZip"
                  // value={location.state.categoryName}
                  placeholder="Address Zip"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                  required
                />
              </div>
              <div class="form-group">
              <label for="userId">userId</label>
              <input
                type="text"
                class="form-control"
                id="userId"
                placeholder="Enter User Id"
                name="userId"
                // value={buyerId}
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
