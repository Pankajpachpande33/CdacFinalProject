import React, { useEffect,useState } from 'react'
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';



export const EditUser = () => {

    const [user, setUser] = useState({});
    const location = useLocation()
    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault();
       
        const res = await axios.put(`http://127.0.0.1:9999/user/${location.state.userId}`, user);
        navigate("/displayCategory")
      };

      const handleChange = (fieldName, fieldValue) => {
        setUser((prev) => ({ ...prev, [fieldName]: fieldValue, status: true }));
      };

      useEffect(() => {
        setUser(location.state);
        
    },[location.state])
    
    console.log(location.state)
    
 
    return (
      <div>
      <div className="w-auto p-3 gradient">
        <div class="card c2 container margin-top">
          <div>
            <br />
            <br />
            <h1 className="t1">Update User</h1>
            <hr />
            <form>
              <div class="form-group">
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
  )
}

