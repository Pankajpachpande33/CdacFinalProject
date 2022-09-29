import React from "react";

function Card(props) {
  return (
    <div className="w-auto p-3">
    <div class="col-lg-12">
      <div class="card mb-2 box-shadow">
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
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Card;
