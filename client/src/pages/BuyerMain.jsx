import React from "react";
import Card from './Card'
import './Main.css'
import Carousel from 'react-bootstrap/Carousel';
import BuyerMainComponent from "./BuyerMainComponent";


function BuyerMain(){
    return( 
<div className="w-auto p-3">
 <div class="container-fluid tm1">
    <div class="row">
        
<div class="col-4">
            <Card>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit longer
            </Card>
  </div>
  <div class="col-4">
            <Card>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit longer
            </Card>
  </div>
  <div class="col-4">
            <Card>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit longer
            </Card>
  </div>
  
  </div>

  <div class="container-fluid c2">
    <div class="row">
      <div class="col-12">
      <BuyerMainComponent/>
      </div>
      </div>
      </div>
  </div>



  <div class="container-fluid tm1">
    <div class="row">
        
    <div class="col-4">
            <Card>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit longer
            </Card>
  </div>
  <div class="col-4">
            <Card>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit longer
            </Card>
  </div>
  <div class="col-4">
            <Card>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit longer
            </Card>
  </div>
  </div>
</div>
  
    
</div>)
}

export default BuyerMain;