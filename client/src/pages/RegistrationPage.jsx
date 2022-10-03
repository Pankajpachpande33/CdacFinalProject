import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./registration.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { getUser } from "../action/userAction";

const RegistrationPage = () => {
  const [user, setUser] = useState({});
  const { entity, loading, dispatch } = useContext(AppContext);
  const navigation = useNavigate();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    await getUser("user", dispatch);
  };

  const handleChange = (fieldName, fieldValue) => {
    setUser((prev) => ({ ...prev, [fieldName]: fieldValue }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    const userCurrentEmail = entity.user.filter(
      (id) => id.userEmail === user.userEmail
    );
    if (userCurrentEmail.length === 0) {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}user`, user);
      if (res.data === 200) {
        alert("SuccessFully Registered")
        navigation("/login");
      }
      if (res.data === 1) {
        alert("Wrong" + "\nboth password should match");
      }
    } else {
      alert("Email Already Registered");
    }
  };

  return (
    <div>
      <div className="w-auto p-3 gradient">
        <div class="card c2 container margin-top">
          <br />
          <h1 className="t1">Create Account</h1>
          <hr />
          <br />
          <form class="was-validated">
            <div class="form-group">
              <label for="userFirstName">First Name</label>
              <input
                type="text"
                class="form-control"
                id="userFirstName"
                placeholder="First name"
                name="userFirstName"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label for="userLastName">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="userLastName"
                placeholder="Last name"
                name="userLastName"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label for="userMobile">Mobile Number</label>
              <input
                type="text"
                class="form-control"
                id="userMobile"
                placeholder="Mobile Number"
                name="userMobile"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                maxlength="10"
                required
              />
            </div>
            <div class="form-group">
              <label for="userEmail">Email</label>
              <input
                type="text"
                class="form-control"
                id="userEmail"
                placeholder="Enter email"
                name="userEmail"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                pattern="[a-zA-Z0-9]+@gmail.com" size="30"
                required
              />
            </div>
            <div class="form-group">
              <label for="userPassword">Password:</label>
              <input
                type="password"
                class="form-control"
                id="userPassword"
                placeholder="Enter password"
                name="userPassword"
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

export default RegistrationPage;