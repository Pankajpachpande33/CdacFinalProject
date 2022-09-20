import React from "react";
import './buyerRightSideBar.css'
import { Link } from 'react-router-dom'

function BuyerRightSideBar() {
  return (
    <div>
      <div class="background1 bg-dark">
        <ul class="font-size color1 margin-left">
          <div class="margin2">
            
            <Link className="color1" to="/">Home</Link></div>
          <div class="margin2"><Link className="color1" to="/shop">Shop</Link></div>
          <div class="margin2"><Link className="color1" to="/ourStory">Our Story</Link></div>
          <div class="margin2"><Link className="color1" to="/contact">Contact</Link></div>
          <div class="margin2"><Link className="color1" to="/offers">Offers</Link></div>
          <div class="margin2"><Link className="color1" to="/yourCart">Your Cart</Link></div>
          <div class="margin2"><Link className="color1" to="/category">ManageCategory</Link></div>
          <div class="margin2"><Link className="color1" to="/product">ManageProduct</Link></div>
          <div class="margin2"><Link className="color1" to="/user">User</Link></div>
          <div class="margin2"><Link className="color1" to="/order">OrderList</Link></div>
          <div class="margin2"><Link className="color1" to="/logout">Logout</Link></div>
        </ul>
      </div>
    </div>
  );
}

export default BuyerRightSideBar;
