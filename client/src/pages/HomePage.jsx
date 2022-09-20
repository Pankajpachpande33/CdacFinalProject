import React from 'react'
import './homePage.css'
import Carousel from 'react-bootstrap/Carousel';

function HomePage() {
  return (
    <div className='w-auto p-3'>
        <div className='container-fluid'>
            <div className='container-fluid'>
            <div className='row'>
                <div className='col-6'>
                <br/><br/><br/><br/><h1 className='font1'>Embrace the<br/>
                    spirit of India</h1><br/><br/><br/><br/>
                    <p>An unparalleled legacy that spans millennia. Pure, authentic craft sourced from artisans across the Indian sub-continent. Our vast collection of over 80 different craft forms celebrates a heritage of some of the world’s oldest handicrafts.</p>
                </div><br/><br/>
                <div className='col-6'>
                    <div>
                    <br/><br/>
                    <Carousel className='mTop'>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
src="img/product3.jpeg"
            alt="Image One"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
src="img/product9.jpg"
            alt="Image Two"
          />
        </Carousel.Item>
      </Carousel>
                    <br/><br/>
                    </div>
                </div>
            </div>
            </div>
        </div>

        {/* <div className='container-fluid Homebackground2'>
            <div className='container container-size'>
            <div className='row mTop'>
                <div className='col-12'>
                <Carousel className='mTop'>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
src="img/Handcraft1.jpg"
            alt="Image One"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
src="img/HandCraft1.jpg"
            alt="Image Two"
          />
        </Carousel.Item>
      </Carousel>
                </div>
                </div>
            </div>
        </div> */}
<br/><br/><br/>
        <div className='container-fluid Homebackground3'>
            <div className='row'>
                <div className='col-5'>
                <br/><br/><br/><br/><h1 className='font1'>
                Our Mission<br/>
                Every purchase<br/>
                has a purpose<br/>
                </h1><br/><br/><br/><br/>
                <p>We have direct partnerships with over 320 Indian artisans and over 2000 indirectly. As a social enterprise that seeks to offer a fair-trade platform, our primary purpose is to support handicraft workers. With each purchase you make, you can help make a difference.</p>
                <br/><br/></div>
                <div className='col-7'>
                <div>
                    <br/><br/><img src='img/product5.jpg'/><br/><br/>
                    </div>
                </div>
            </div>
        </div>
        <br/><br/><br/>
        <div className='container-fluid Homebackground4'>
            <div className='row'>
                <div className='col-6'>
                <br/><br/><h1 className='font1'>Trending & New</h1><br/><br/>
                <div>
                    <img className="img-m2" src='img/Handcraft3.png'/><br/><br/>
                </div>
                </div>
                
            </div>
        </div>
        <br/><br/><br/>
        <div className='container-fluid Homebackground5'>
            <div className='row'>
                <div className='col-6'>
                <br/><br/><br/><br/><h1 className='font1'>The world’s<br/>
                    oldest craft form</h1>
                    <br/><br/><br/><br/><br/>
                    <p>Dhokra Metal Craft. Dhokra is amongst the oldest traditional techniques of metal casting in India, practiced for over 4,000 years, said to date back to the era of the Indus Valley Civilisation. The lost wax technique or ‘cire-perdue’ has been the medium of metal workers in Madhya Pradesh, Chhattisgarh, Orissa and West Bengal. Entirely handcrafted, the unique 13-stage process of Dhokra /Bell-metal making today, is an outcome of the original craft instinct handed down through the centuries. Dhokra or Bell metal is an alloy of brass, and other metals that impart an antique effect to the castings.</p>
                    <br/><br/></div>
                <div className='col-6'>
                    <div>
                <br/><br/><img className='img5' src='img/product9.jpg'/><br/><br/>
                </div>
                </div>
            </div>
        </div>
        <br/><br/><br/>
        <div className='container-fluid Homebackground6'>
            <div className='row'>
            <div className='col-5'>
                    <div>
                <br/><br/><img src='img/Handcraft41.png'/><br/><br/>
                </div>
                </div>
                <div className='col-6'>
                <br/><br/><h1 className='font1'>Place a bulk<br/>
order with us</h1>
                    <br/><br/><br/>
<p>Whether you want to place a large customised order for a single item or a large assortment of multiple craft products, we can sort it out for you! For years we have also worked on custom orders for our clients – it is one of the many benefits of having direct relationships with our artisans. Just drop us a note!</p>                    
<br/><br/></div>
            </div>
        </div>
        <br/><br/><br/>
    </div>
  )
}

export default HomePage