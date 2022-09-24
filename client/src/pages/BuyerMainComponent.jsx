import React from 'react'
import './Main.css'
import Carousel from 'react-bootstrap/Carousel';

function BuyerMainComponent() {
  return (
    <div className='w-auto p-3 '>
        <div class="container-fluid c2">
    <div class="row">
      <div class="col-6">
      <div class="card height-width shadow p-3 mb-5 bg-white rounded background-color1">
    <div class="card-body">
  <section id="mainBanner">
        
          <h4>Our Mission</h4>
          <h1>Every purchase<br/>has a purpose</h1>
          <p>
            Your gallery is an asset to your business. Use it to post examples
            of your photography, or your school's facilities and students work.
            Watermark your photos and enable sharing with the social options
            feature.
          </p>
          <p>
            <a href="#" class="btn btn-primary my-2">
              Main call to action
            </a>
            <a href="#" class="btn btn-secondary my-2">
              Secondary action
            </a>
          </p>
        
      </section> 
      </div>
      </div>
      </div>
      <div class="col-6 margin-top ">
      <div>
      <Carousel className='mTop t2'>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="img/product3.jpeg"
            alt="Image One"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="img/product9.jpg"
            alt="Image Two"
          />
        </Carousel.Item>
      </Carousel>
      </div>
      </div>
      </div>
      </div>
  </div>
    
  )
}

export default BuyerMainComponent