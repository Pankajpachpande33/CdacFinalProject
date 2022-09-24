import React from 'react'
import Footer from '../pages/footer/Footer'
import SellerHeader from '../pages/header/SellerHeader'
import SellerRightSideBar from '../pages/SellerRightSideBar'

function RouterSellerComponent({ children }) {
  return (
    <div >
            <SellerHeader/>
            <div className='container-fluid mtop34'>
                <div className='row'>
                <div className='col-10'>
                {children}
                </div>
               <div className='col-2'>
                <SellerRightSideBar/>
               </div>
               </div>
            </div>
            <Footer/>
        </div>
  )
}

export default RouterSellerComponent