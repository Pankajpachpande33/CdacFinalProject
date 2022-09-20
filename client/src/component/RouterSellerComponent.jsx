import React from 'react'
import Footer from '../pages/footer/Footer'
import Header from '../pages/header/Header'
import SellerRightSideBar from '../pages/SellerRightSideBar'

function RouterSellerComponent({ children }) {
  return (
    <div >
            <Header/>
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