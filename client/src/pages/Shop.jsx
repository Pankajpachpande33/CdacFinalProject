import React from 'react'
import './shop.css'

function Shop() {
  return (
    <div className='w-auto p-3'>
        <div className='card shop-card shadow mb-5 bg-white '>
            <div className='text'><b>Category</b></div>
            <div className='container-fluid'>
              <div className='row'>
              <br/><br/><div className='col-6'>
              <br/><br/><div class="card shadow mb-5">
  <div class="card-body"><h1 className='t1'><b>Handloom</b></h1><hr/>
  <img src='img/handloom1.jpg'></img>
  </div>
</div>
                </div>
                <br/><br/><div className='col-6'>
                <br/><br/><div class="card shadow mb-5">
  <div class="card-body"><h1 className='t1'><b>Teracota</b></h1><hr/>
  <img src='img/teracotta1.jpg'></img>
  </div>
</div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Shop