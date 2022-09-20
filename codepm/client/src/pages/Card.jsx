import React from "react";
import './Main.css'

function Card(props) {
  return (
    <div class="col-lg-12">
      <div class="card mb-3 box-shadow">
        <img
          class="card-img-top"
          src="img/product1.png"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-text">{props.children}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-primary">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
