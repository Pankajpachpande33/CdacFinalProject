import React, { useContext, useEffect, useState } from "react";
import "./addProduct.css";
import axios from "axios";
import FileUpload from "./FileUpload";
import { AppContext } from "../context/AppContext";
import { getCategory } from "../action/categoryActions";
import { getSubCategory } from "../action/subcategoryAction";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const getServiceAPIURL = (url) => `${process.env.REACT_APP_API_URL}`;
  const currentSellerId = localStorage.getItem("userId");
  const [product, setProduct] = useState({});
  const [imagePath, setImagePath] = useState({});

  const { entity, loading, dispatch } = useContext(AppContext);

  const [formData, setFormData] = useState({ categoryName: "", status: "" });
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    loadSubCategory();
  }, []);

  const loadSubCategory = async () => {
    await getSubCategory("subCategory", dispatch);
  };

  useEffect(() => {
    loadCategory();
  }, []);

  const loadCategory = async () => {
    await getCategory("category", dispatch);
  };
  const navigate = useNavigate();

  const pulldata = (data) => {
    setImagePath(data);
  };

  const handleChange = (fieldName, fieldValue) => {
    setProduct((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
      imageUploadPath: imagePath,
      sellerId:currentSellerId
    }));
    // console.log(fieldValue);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(product);
    const res = await axios.post(`${process.env.REACT_APP_API_URL}product`, product);
    console.log("This is Response " + res);
    if (res) {
      navigate("/sellerHome");
      alert(
        "\nProduct Name : " +
          product.productName +
          "\nSubCategory Name : " +
          product.subCategoryId +
          "\nSeller id : " +
          product.sellerId +
          "\nManufacturing date : " +
          product.productManufacturingDate +
          "\nPrice : " +
          product.productPrice +
          " " +
          "\nSuccessfully Your Product"
      );
    }
  };

  return (
    <div>
      <div className="w-auto p-3 gradient">
        <div class="card c2 container margin-top productDiv">
          <br />
          <br />
          <div>
            <FileUpload func={pulldata} />
          </div>
          <h1 className="t1">Add Product</h1>
          <br />
          <br />
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
            {/* <div>
                <label for="categoryId">Choose Category Name : </label>

                <select name="categoryId"
                  id="categoryId"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}>
                  {entity.category.length>0 &&
                  entity.category.map((item,index)=>(
                    <option value={item.categoryId}>{item.categoryName}</option>
                  ))}
                </select>
              </div> */}
            <br />
            <div class="form-group">
              <label for="subCategoryId">Choose Sub-Category Name : </label>

              <select
                name="subCategoryId"
                id="subCategoryId"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
              >
                <option>Select</option>
                {entity.subCategory.length > 0 &&
                  entity.subCategory.map((item, index) => (
                    <option value={item.subCategoryId}>
                      {item.subCategoryName}
                    </option>
                  ))}
              </select>
            </div>
            <br />
            <div class="form-group">
              {/* <label for="sellerId"></label> */}
              <input
                type="hidden"
                class="form-control"
                id="sellerId"
                placeholder="Product Seller Id"
                name="sellerId"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label for="productManufacturingDate">
                Product Manufacturing Date
              </label>
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
                type="tel"
                class="form-control"
                id="productPrice"
                placeholder="Product Price"
                name="productPrice"
                onChange={(e) => handleChange(e.target.id, e.target.value)}
                required
              />
            </div>
            <br />
            <button onClick={onSubmit} class="btn btn-warning">
              Continue
            </button>
            &nbsp;&nbsp;
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