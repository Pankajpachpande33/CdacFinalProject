import React from "react";
import './buyerRightSideBar.css'
import { Link } from 'react-router-dom'

function BuyerRightSideBar() {
  return (
    <>
    <div className="container-fluid wid3">
      <div className="row">
        <div className="col-12">
        </div>
      <div class="background1 bg-dark">
        <div class="font-size color1 margin-left">
          <div class="margin2"><Link className="color1" to="/">Home</Link></div>
          <div class="margin2"><Link className="color1" to="/buyerHome">Product List</Link></div>
          <div class="margin2"><Link className="color1" to="/shop">Shop</Link></div>
          <div class="margin2"><Link className="color1" to="/ourStory">Our Story</Link></div>
          <div class="margin2"><Link className="color1" to="/contact">Contact</Link></div>
          <div class="margin2"><Link className="color1" to="/yourCart">Your Cart</Link></div>
          <div class="margin2"><Link className="color1" to="/myOrders">My Order</Link></div>
          <div class="margin2"><Link className="color1" to="/login">Login</Link></div>
          <div class="margin2"><Link className="color1" to="/registration">Registration</Link></div>
          <div class="margin2"><Link className="color1" to="/addProduct">Add Product</Link></div>
          <div class="margin2"><Link className="color1" to="/addCategory">Add Category</Link></div>
        </div>
        </div>
        
      </div>
    </div>
    </>
  );
}

export default BuyerRightSideBar;
