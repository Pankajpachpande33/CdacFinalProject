import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

function FooterComponent() {
  return (
    <div>
        <div className='container-fluid margin-top1'>
            <div className='row'>
        <div class="col-4 text-color">
    <b>THE COMPANY </b><br/> <br/>          
        <div class="text-size"><Link to={"/ourStory"} >Our Story</Link></div>
        <div class="text-size">Terms of Use</div>
        <div class="text-size">Site Map</div>
    </div>
    <div class="col-4 text-color">
    <b>ORDER AND SUPPORT</b> <br/> <br/>
    <div class="text-size"><Link to={"/contact"} >Contact Us</Link></div>
        <div class="text-size">Bulk Orders</div>
        <div class="text-size">Rewards</div>
        <div class="text-size">FAQ's</div>
    </div>
    <div class="col-4 text-color">
    <b>SOCIAL MEDIA</b> <br/> <br/>
    <div class="text-size">Facebook&nbsp;&nbsp;<img className="logo-size" src="img/Facebook.svg"/></div>
        <div class="text-size">Instagram&nbsp;&nbsp;<img className="logo-size" src="img/instagram1.png"/></div>
        <div class="text-size">Pinterest&nbsp;&nbsp;<img className="logo-size" src="img/Pinterest.png"/></div>
        <div class="text-size">Linkedin&nbsp;&nbsp;<img className="logo-size" src="img/linkedin.png"/></div>
    </div>
    </div>
    </div>
    </div>
   
  )
}

export default FooterComponent