
import './addProduct.css';
import axios from 'axios';
import React, { useState } from 'react'

const AddCategory = () => {

  
  const [category, setCategory]=useState({});

  const [subCategory, setSubCategory]=useState({});

  const handleChange = (fieldName, fieldValue) => {
    setCategory(prev => ({ ...prev, [fieldName]: fieldValue ,status:true}));
  }

  const handleChangeSub = (fieldName, fieldValue) => {
    setSubCategory(prev => ({ ...prev, [fieldName]: fieldValue ,status:true}));
  }

    const onSubmit = async e => {   
      e.preventDefault();
      console.log(category)
       const res = await axios.post('http://127.0.0.1:9999/category', category)
    }

    const onSubmitSub = async e => {   
      e.preventDefault();
      console.log(subCategory)
       const res = await axios.post('http://127.0.0.1:9999/subCategory', subCategory)
    }



  return (
    <div>
      <div className="w-auto p-3 gradient">
        <div class="card c2 container margin-top">
          <div>
            <br />
            <br />
            <h1 className="t1">Add Category</h1>
            <hr />
            <form>
              <div class="form-group">
                <label for="categoryName">Category Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="categoryName"
                  id="categoryName"
                  placeholder="categoryName"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                  required
                />
              </div>
              <br />
              <button onClick={onSubmit} class="btn btn-warning">
                Submit
              </button>
              &nbsp;&nbsp;
              <button class="btn btn-warning" type="reset" value="Reset">
                Reset
              </button>
            </form>
          </div>
          <div>
            <br />
            <br />
            <br />
            <br />
            <h1 className="t1">Add SubCategory</h1>
            <hr />
            <form action="/addProduct">
              <div class="form-group">
                <label for="subCategoryName">Sub-Category Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="subCategoryName"
                  placeholder="Enter Sub-Category Name"
                  name="subCategoryName"
                  onChange={(e) => handleChangeSub(e.target.id, e.target.value)}
                  required
                />
              </div>
              <div class="form-group">
                <label for="categoryId">Category Id</label>
                <input
                  type="text"
                  class="form-control"
                  name="categoryId"
                  id="categoryId"
                  placeholder="categoryId"
                  onChange={(e) => handleChangeSub(e.target.id, e.target.value)}
                  required
                />
              </div>
              {/* <div class="form-group dropdown">
                <button
                  type="button"
                  class="btn btn-primary dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Category Id
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">
                    Handloome
                  </a>
                  <a class="dropdown-item" href="#">
                    Teracotta
                  </a>
                  <a class="dropdown-item" href="#">
                    Handloome
                  </a>
                </div>
              </div> */}
              <br />
              <button onClick={onSubmitSub} class="btn btn-warning">Submit</button>&nbsp;&nbsp;
              <button class="btn btn-warning" type="reset" value="Reset">
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
