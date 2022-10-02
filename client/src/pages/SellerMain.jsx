import React from 'react'
import Card from './Card'
import SellerRightSideBar from './SellerRightSideBar'

function SellerMain() {
  return (
        <main id="main" role="main">
         <div class="container-fluid topmargin">
            <div class="row">
                
        <div class="col-4 leftmargin">
                    <Card>
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit longer
                    </Card>
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
                    <Card>
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit longer
                    </Card> 
          </div>
          <div class="container-fluid">
            <div class="row">
              <div class="col-6">
              <div class="card height-width shadow p-3 mb-5 bg-white rounded background-color1">
            <div class="card-body">
          <section id="mainBanner">
                
                  <h4>Our Mission</h4>
                  <h1>
        Every purchase<br/>
        has a purpose</h1>
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
              <div class="col-6 margin-top">
              <div class="carousel1">
            
              
              {/*  */}
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="img/carasel3.jpg" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="img/carasel3.jpg" class="d-block" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="img/carasel3.jpg" class="d-block" alt="..."/>
            </div>
          </div>
        </div>
              {/*  */}
            
          </div>
              </div>
              </div>
              </div>
          </div>
        
        </div>
 
        </main>
  )
}

export default SellerMain