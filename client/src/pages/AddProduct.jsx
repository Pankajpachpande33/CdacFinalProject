import React, { useState } from "react";
import './addProduct.css'
import axios from 'axios';
import FileUpload from "./FileUpload";

const AddProduct = () => {

  const [product, setProduct] = useState({});
  const [imagePath, setImagePath]=useState({});

  const pulldata =(data)=>{
      
    setImagePath(data)
    
  }

  const handleChange = (fieldName, fieldValue) => {
    setProduct((prev) => ({ ...prev, [fieldName]: fieldValue, imageUploadPath: imagePath }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(product);
   const res = await axios.post('http://127.0.0.1:9999/product', product)
  };



  return (
    <div>
      <div className="w-auto p-3 gradient">
        <div class="card c2 container margin-top">
          <h1 className="t1">Add Product</h1>
          <div>
          <FileUpload func={pulldata}/>
          </div>
          <form class="was-validated">
            <div class="form-group">
              <label for="productName">Product Name</label>
              <input
                type="text"
                class="form-control"
                id="productName"
                placeholder="Product Name"
                name="productName"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label for="categoryId">Product Category</label>
              <input
                type="number"
                class="form-control"
                id="categoryId"
                placeholder="Product Category"
                name="categoryId"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label for="subCategoryId">Product SubCategory</label>
              <input
                type="number"
                class="form-control"
                id="subCategoryId"
                placeholder="subCategoryId "
                name="subCategoryId"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label for="sellerId">Product Seller Id</label>
              <input
                type="number"
                class="form-control"
                id="sellerId"
                placeholder="Product Seller Id"
                name="sellerId"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label for="productManufacturingDate">Product Manufacturing Date</label>
              <input
                type="Date"
                class="form-control"
                id="productManufacturingDate"
                placeholder="Product Manufacturing Date"
                name="productManufacturingDate"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label for="productPrice">Product Price</label>
              <input
                type="number"
                class="form-control"
                id="productPrice"
                placeholder="Product Price"
                name="productPrice"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                required
              />
            </div>

            
            <button onClick={onSubmit} class="btn btn-warning">Continue</button>&nbsp;&nbsp;
            <button class="btn btn-warning" type="reset" value="Reset">
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
