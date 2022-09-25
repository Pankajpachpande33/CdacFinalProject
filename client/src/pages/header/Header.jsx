import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import './bootstrap.min.css'
import './Header.css'


function Header(){
  const {  dispatch , currentUser} = useContext(AppContext);
  

    return(
        <div className="w-auto p-3">
        <nav class="navbar navbar-expand-md navbar-light bg-dark fixed-top ">
        
        <a class="navbar-brand"><img class="img-size" src="img/LOGO1.png"/></a>
        
        <button type="button" class="navbar-toggler bg-light" data-toggle="collapse" data-target="#nav">
        
        <span class="navbar-toggler-icon"></span>
        
        </button>
        
        <div class="collapse navbar-collapse justify-content-between" id="nav">
        
        <ul class="navbar-nav">
        
        <li class="nav-item" >
        
        {/* <div className="sellerName"><Link  className="sellerName" to={"/sellerHome"}><button className="btn btn-secondary">Admin</button></Link></div> */}
        
        </li>
        
        <li class="nav-item">
        <centre>
            <a class="nav-link text-light font-weight-bold px-3 nav2" href="/"><img src="img/LOGO_CRAFT_Name.png"/></a>
            </centre>

        </li>
        
        </ul>
        
        <div class="form-group dropdown topDropDown">
                <button
                  type="button"
                  class="btn btn-secondary dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Account
                </button>
                <div class="dropdown-menu tt2">
                <div class="dropdown-item marginHead">
                  <h5>Hi , {currentUser} </h5>
                  
                  </div>  
                <div class="dropdown-item">
                  <Link className="headDetails" to="/sellerLogin">Admin(Seller)</Link>
                  </div>  
                  <div class="dropdown-item">
                  <Link className="headDetails" to="/login">Login</Link>
                  </div>
                  <div class="dropdown-item">
                  <Link className="headDetails" to="/registration">Registration</Link>
                  </div>
                  <div class="dropdown-item">
                  <Link className="headDetails" to="/addAddress">Add Address</Link>
                  </div>
                  <div class="dropdown-item">
                  <Link className="headDetails" to="/">Log Out</Link>
                  </div>
                </div>
              </div>
        {/* <!-- Search bar --> */}
        
        <form onsubmit="event.preventDefault()" class="form-inline "> 
        <input class="form-control" type="text" placeholder="Search"/> 
        <button class="btn btn-secondary" type="submit">Search</button>
         </form>

        
        </div>
        

        </nav>
        </div>
    )
}

export default Header;