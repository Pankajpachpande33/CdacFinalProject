import React from 'react'
import Footer from '../pages/footer/Footer'
import SellerHeader from '../pages/header/SellerHeader'
import './router.css'

const RouteComponentSellerLoginPage = ({ children }) => {

  return (
    <div>
        <div className='container-fluid '>
    <SellerHeader/>
    <div className='container-fluid mtop34'>
        <div className='row'>
        <div className='col-12'>
        {children}
        </div>      
       </div>
    </div>
    <Footer/>
</div></div>
  )
}

export default RouteComponentSellerLoginPage