import React from 'react'
import { Link } from 'react-router-dom'

function SellerRightSideBar() {
  return (
    <>
    <div className="container-fluid wid3">
      <div className="row">
        <div className="col-12">
        </div>
        <div className='background1 bg-dark'>
          <div class="font-size color1 margin-left">
        <ul class="font-size">
          <div class="margin2"><Link className="color1" to="/sellerHome">Home</Link></div>
          <div class="margin2"><Link className="color1" to="/ourStory">Our Story</Link></div>
          <div class="margin2"><Link className="color1" to="/contact">Contact</Link></div>
          <div class="margin2"><Link className="color1" to="/addProduct">Add Product</Link></div>
          <div class="margin2"><Link className="color1" to="/">Current Orders</Link></div>
          <div class="margin2"><Link className="color1" to="/">Total Orders</Link></div>
          <div class="margin2"><Link className="color1" to="/">Total Balance</Link></div>
          <div class="margin2"><Link className="color1" to="/">Manage Inventory</Link></div>
          <div class="margin2"><Link className="color1" to="/">Feedback</Link></div>
          <div class="margin2"><Link className="color1" to="/">Logout</Link></div>
        </ul>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SellerRightSideBar