import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOAD_CURRENTUSER_SUCCESS } from "../constants/ApplicationTypes";
import { AppContext } from "../context/AppContext";

const Login = () => {
  const [user, setUser] = useState({});
  const { dispatch, currentUser } = useContext(AppContext);
  const navigate=useNavigate();
  const handleChange = (fieldName, fieldValue) => {
    setUser((prev) => ({ ...prev, [fieldName]: fieldValue }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const res = await axios.post('http://127.0.0.1:9999/userLogin', user)
      if(res.data>0){
        alert(user.username +"  "+ " Login Successfull !")
        dispatch({ type: LOAD_CURRENTUSER_SUCCESS, payload: res.data });
      navigate("/")
   }
      
    } catch (error) {
      alert(" Wrong UserName And Password  ");
      console.log(error);
    }
   
  };
  return (
    <div>
      <div className="container-fluid w-auto p-3 gradient">
        <div class="card crd3 container margin-top">
          <br />
          <h1 className="txt34">Sign-in</h1>
          <hr />
          <br />
          <form  class="was-validated">
            <div class="form-group">
              <label for="username">User Name</label>
              <input
                type="email"
                class="form-control"
                id="username"
                placeholder="User name"
                name="username"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                name="password"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
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
            <br />
            <button onClick={onSubmit} class="btn btn-warning">Continue</button>&nbsp;&nbsp;
            <button class="btn btn-warning" type="reset" value="Reset">
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
