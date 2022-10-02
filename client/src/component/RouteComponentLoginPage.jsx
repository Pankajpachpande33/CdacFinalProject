import React from 'react'
import Footer from '../pages/footer/Footer'
import Header from '../pages/header/Header'
import './router.css'

const RouteComponentLoginPage = ({ children }) => {

  return (
    <div>
        <div className='container-fluid '>
    <Header/>
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

export default RouteComponentLoginPage