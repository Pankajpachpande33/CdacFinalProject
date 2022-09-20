import React from 'react'
import BuyerRightSideBar from '../pages/BuyerRightSideBar'
import Footer from '../pages/footer/Footer'
import Header from '../pages/header/Header'


import Sidebar from '../pages/Sidebar'

const RouteComponent = ({ children }) => {
    return (
        <div>
            <Header/>
            <div className='container-fluid'>
                <div className='row'>
                <div className='col-10'>
                {children}
                </div>
               <div className='col-2'>
                <BuyerRightSideBar/>
               </div>
               </div>
            </div>
            <Footer/>
        </div>
    )
}

export default RouteComponent