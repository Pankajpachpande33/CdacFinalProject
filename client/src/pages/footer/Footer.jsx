import React from "react";
import { Link } from "react-router-dom";
import './footer.css'

function Footer(){
    return(
       <footer>
        <section class="jumbotron bg-dark w-auto p-3" id="mainBanner">
        <div class="container-fluid">
        <div class="row">
        <div class="col-3">
        <a class="navbar-brand b1"><img className="logo-img" src="img/LOGO1.png"/></a>
            </div>
            <div className="col-9">
            <div className='container-fluid margin-top1'>
            <div className='row'>
        <div class="col-4 text-color">
    <b>THE COMPANY </b><br/> <br/>          
        <div class="text-size"><Link className="txtFooter" to={"/ourStory"} >Our Story</Link></div>
        <div class="text-size">Terms of Use</div>
        <div class="text-size">Site Map</div>
    </div>
    <div class="col-4 text-color">
    <b>ORDER AND SUPPORT</b> <br/> <br/>
    <div class="text-size"><Link className="txtFooter"  to={"/contact"} >Contact Us</Link></div>
        <div class="text-size">Bulk Orders</div>
        <div class="text-size">Rewards</div>
        <div class="text-size">FAQ's</div>
    </div>
    <div class="col-4 text-color">
    <b>SOCIAL MEDIA</b> <br/> <br/>
    <div class="text-size">Facebook&nbsp;&nbsp;<img className="logo-size" src="img/facebook (3).png"/></div>
        <div class="text-size">Instagram&nbsp;&nbsp;<img className="logo-size" src="img/instagram (1).png"/></div>
        <div class="text-size">Pinterest&nbsp;&nbsp;<img className="logo-size" src="img/pint (1).png"/></div>
        <div class="text-size">Linkedin&nbsp;&nbsp;<img className="logo-size" src="img/in (3).png"/></div>
    </div>
    </div>
    </div>
            </div>
            </div>        
        </div>
      </section>
       </footer>
    )
}

export default Footer;