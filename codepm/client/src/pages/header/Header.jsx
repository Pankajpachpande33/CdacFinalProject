import React from "react";
import './bootstrap.min.css'
import './Header.css'


function Header(){
    return(

        <nav class="navbar navbar-expand-md navbar-light bg-dark fixed-top ">
        
        <a class="navbar-brand"><img class="img-size" src="img/LOGO1.png"/></a>
        
        <button type="button" class="navbar-toggler bg-light" data-toggle="collapse" data-target="#nav">
        
        <span class="navbar-toggler-icon"></span>
        
        </button>
        
        <div class="collapse navbar-collapse justify-content-between" id="nav">
        
        <ul class="navbar-nav">
        
        <li class="nav-item" >
        
        <a class="nav-link text-light font-weight-bold px-3" href="#"></a>
        
        </li>
        
        <li class="nav-item">
        <centre>
            <a class="nav-link text-light font-weight-bold px-3 nav2" href="/"><img src="img/LOGO_CRAFT_Name.png"/></a>
            </centre>

        </li>
        
        </ul>
        
        
        {/* <!-- Search bar --> */}
        
        <form onsubmit="event.preventDefault()" class="form-inline my-2 my-lg-0"> 
        <input class="form-control mr-sm-2" type="text" placeholder="Search"/> 
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
         </form>

        
        </div>
        <div class="margin-left dropdown">  
            <a class="navbar-brand"><img src="img/accountIMG1.png"/><span class="glyphicon glyphicon-chevron-down"></span></a>
            <ul class="dropdown-menu">
    <li><a href="#">Login</a></li>
    <li><a href="#">Sign Up</a></li>
    <li><a href="#">JavaScript</a></li>
  </ul>
            </div>

        </nav>
    )
}

export default Header;