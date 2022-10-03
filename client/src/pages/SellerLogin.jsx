import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOAD_CURRENTUSER_SUCCESS } from "../constants/ApplicationTypes";
import { AppContext } from "../context/AppContext";
import "./login.css";

const SellerLogin = () => {
  const [user, setUser] = useState({});
  const { dispatch, currentUser } = useContext(AppContext);

  const navigate = useNavigate();
  const handleChange = (fieldName, fieldValue) => {
    setUser((prev) => ({ ...prev, [fieldName]: fieldValue }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const res = await axios.post("http://127.0.0.1:9999/sellerLogin", user);
      if (res.data > 0) {
        dispatch({ type: LOAD_CURRENTUSER_SUCCESS, payload: user.username });
        alert(user.username + "  " + " Login Successfull !");
        localStorage.setItem("userId", res.data);

        navigate("/sellerHome");
      }
      if (res.data === 0) {
        alert("Wrong username and password");
      }
    } catch (error) {
      alert(" Wrong UserName And Password  ");
      console.log(error);
    }
  };
  const gotoSellerRegistration = () => {
    navigate("/sellerRegistration");
  };
  return (
    <div className="container-fluid w-auto p-3 gradient">
      <div class="card crd3 container margin-top">
        <br />
        <h1 className="txt34"> Seller Account</h1>
        <hr />
        <br />
        <form class="was-validated">
          <div class="form-group">
            <label for="username">User Name</label>
            <input
              type="email"
              class="form-control"
              id="username"
              placeholder="User name"
              name="username"
              onChange={(e) => handleChange(e.target.id, e.target.value)}
              pattern="[a-zA-Z0-9]+@gmail.com" size="30"
              required
            />
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                name="password"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                maxLength="8"
                required
              />
            </div>
            <div class="form-group form-check">
              <label class="form-check-label">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="remember"
                />{" "}
                Remember me
              </label>
              <br />
              By continuing, you agree to LOGO Craft's
              <br />
              Conditions of Use and Privacy Notice.
            </div>
            <br />
            <button onClick={onSubmit} class="btn btn-warning">
              Sign in
            </button>
            &nbsp;&nbsp;
            <button class="btn btn-warning" type="reset" value="Reset">
              Reset
            </button>
            <div class="space"></div>
            <br />
          </div>
        </form>

        <form>
          <div class="form-group">
            <button
              onClick={() => gotoSellerRegistration()}
              class="btn btn-light"
            >
              Create your LOGO Craft Seller account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellerLogin;