import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul>
                <li>
                    <Link to="/managecategory">Manage Category</Link>
                    {/* <a href='/managecategory'>Manage Category</a> */}
                </li>
                <li><Link to="/manageproduct">Manage Product</Link></li>
                <li><Link to="/placeorder">Place Order</Link></li>
                <li><Link to="/orderlist">Order List</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar