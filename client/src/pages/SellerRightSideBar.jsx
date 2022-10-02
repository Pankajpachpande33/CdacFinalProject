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
          <div class="margin2"><Link className="color1" to="/sellerOurStory">Our Story</Link></div>
          <div class="margin2"><Link className="color1" to="/sellerContact">Contact</Link></div>
          <div class="margin2"><Link className="color1" to="/addProduct">Add Product</Link></div>
          <div class="margin2"><Link className="color1" to="/addCategory">Add Category</Link></div>
          <div class="margin2"><Link className="color1" to="/displayAllSubCategory">All Sub-Category</Link></div>
          <div class="margin2"><Link className="color1" to="/displayAllCategory">All Category</Link></div>
          <div class="margin2"><Link className="color1" to="/displayAllSeller">Seller Details</Link></div>
          <div class="margin2"><Link className="color1" to="/displayAllSellerOrder">Seller Order</Link></div>
          <div class="margin2"></div>
        </ul>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SellerRightSideBar