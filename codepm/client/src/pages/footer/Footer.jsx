import React from "react";
import './footer.css'
import FooterComponent from "./FooterComponent";

function Footer(){
    return(
       <footer >
        <section class="jumbotron bg-dark" id="mainBanner">
        <div class="container-fluid">
        <div class="row">
        <div class="col-3">
        <a class="navbar-brand"><img className="logo-img" src="img/LOGO1.png"/></a>
            </div>
            <div className="col-2">

            </div>
            <div className="col-7">
            <FooterComponent/>
            </div>
            </div>
            
        </div>
      </section>
       </footer>
    )
}

export default Footer;