import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { getUser } from "../action/userAction";
import './edituser.css';

export const EditUser = () => {
  const currentUserId = localStorage.getItem("userId");

  const { entity, loading, dispatch } = useContext(AppContext);

  const [formData, setFormData] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    await getUser("user", dispatch);
  };

  const navigate = useNavigate();

  const handleChange = (fieldName, fieldValue) => {
    setFormData((prev) => ({ ...prev, [fieldName]: fieldValue, 
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.put(
      `http://127.0.0.1:9999/user/${currentUser[0].userId}`,
      formData
    );
    navigate("/displayAllUser");
  };
  const currentUser=entity.user.filter((id)=>id.userId==currentUserId);

  console.log(currentUser);
  return (
    <div>
      <div className="w-auto p-3 gradient">
        <div class="card UserCardSize container margin-top">
          <div>
            <br />
            <br />
            <h1 className="t1">Update User</h1>
            <hr />
            <form>
              <div class="form-group">
                <h5>Old First Name : {currentUser[0]?.userFirstName}</h5>
                <label for="userFirstName">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="userFirstName"
                  id="userFirstName"
                  // value={location.state.categoryName}
                  placeholder="First Name"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                  required
                />
              </div>
              <br />
              <div class="form-group">
              <h5>Old Last Name : {currentUser[0]?.userLastName}</h5>
                <label for="userLastName">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="userLastName"
                  id="userLastName"
                  // value={location.state.categoryName}
                  placeholder="Last Name"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                  required
                />
              </div>
              <div class="form-group">
              <h5>Old Mobile No : {currentUser[0]?.userMobile}</h5>
                <label for="userMobile">Mobile Number</label>
                <input
                  type="tel"
                  class="form-control"
                  name="userMobile"
                  id="userMobile"
                  // value={location.state.categoryName}
                  placeholder="Mobile Number"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                  required
                />
              </div>
              <div class="form-group">
              <h5>Old Email : {currentUser[0]?.userEmail}</h5>
                <label for="userEmail">Email</label>
                <input
                  type="email"
                  class="form-control"
                  name="userEmail"
                  id="userEmail"
                  // value={location.state.categoryName}
                  placeholder="Email Id"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                  required
                />
              </div>
              <div class="form-group">
              <h5>Old Password : {currentUser[0]?.userPassword}</h5>
                <label for="userPassword">Password</label>
                <input
                  type="password"
                  class="form-control"
                  name="userPassword"
                  id="userPassword"
                  // value={location.state.categoryName}
                  placeholder="password"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                  required
                />
              </div>
              <div class="form-group">
              <h5>Old Confirm Password : {currentUser[0]?.confirmPass}</h5>
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
