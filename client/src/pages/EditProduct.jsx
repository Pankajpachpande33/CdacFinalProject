import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import FileUpload from "./FileUpload";
import { getProduct } from "../action/productAction";
import { AppContext } from "../context/AppContext";

const EditProduct = () => {
  const currentSellerId = localStorage.getItem("userId");
  const [product, setProduct] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const { entity, loading, dispatch } = useContext(AppContext);

  console.log(location);
  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.put(
      `http://127.0.0.1:9999/product/${location.state.productId}`,
      product
    );
    navigate("/sellerHome");
  };

  const handleChange = (fieldName, fieldValue) => {
    setProduct((prev) => ({ ...prev, [fieldName]: fieldValue, 
      subCategoryId:currentProduct[0].subCategoryMaster.subCategoryId,
      productManufacturingDate:currentProduct[0].productManufacturingDate,
      imageUploadPath:currentProduct[0].imageUploadPath,
      sellerId:currentSellerId,
      
    }));
  };

  const currentProduct=entity.product.filter((id)=>id.productId==location.state.productId);

  console.log(currentProduct);

  useEffect(() => {
    loadProduct();
  }, []);
  console.log(location.state);

  const loadProduct = async () => {
    await getProduct("product", dispatch);
  };

  return (
    <div>
      <div className="w-auto p-3 gradient">
        <div class="card c2 container margin-top">
          <div>
            <br />
            <br />
            <h1 className="t1">Update Product</h1>
            <hr />
            <form>
              <div class="form-group"> 
              <h5>old Product Name : {currentProduct[0]?.productName}</h5>
                <label for="productName">Product Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="productName"
                  id="productName"
                  // value={location.state.categoryName}
                  placeholder="Product Name"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                  required
                />
              </div>
              <br />
              <div class="form-group">
              <h5>old Product Price : {currentProduct[0]?.productPrice}</h5>
                <label for="productPrice">Product Price</label>
                <input
                  type="tel"
                  class="form-control"
                  name="productPrice"
                  id="productPrice"
                  // value={location.state.categoryName}
                  placeholder="Product Price"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                  required
                />
              </div>
              <button onClick={onSubmit} class="btn btn-warning">
                Submit
              </button>
              &nbsp;&nbsp;
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

export default EditProduct;
