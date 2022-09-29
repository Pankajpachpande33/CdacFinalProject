import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const [product, setProduct] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.put(
      `http://127.0.0.1:8080/product/${location.state.productId}`,
      product
    );
    navigate("/displaySubCategory");
  };

  const handleChange = (fieldName, fieldValue) => {
    setproduct((prev) => ({ ...prev, [fieldName]: fieldValue, status: true }));
  };

  useEffect(() => {
    setproduct(location.state);
  }, [location.state]);

  console.log(location.state);

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
                <label for="subCategoryId">Sub-Category Id</label>
                <input
                  type="tel"
                  class="form-control"
                  name="subCategoryId"
                  id="subCategoryId"
                  // value={location.state.categoryName}
                  placeholder="Sub-Category Id"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                  required
                />
              </div>
              <div class="form-group">
                <label for="sellerId">Seller Id</label>
                <input
                  type="tel"
                  class="form-control"
                  name="sellerId"
                  id="sellerId"
                  // value={location.state.categoryName}
                  placeholder="Seller Id"
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
                  name="productManufacturingDate"
                  id="productManufacturingDate"
                  // value={location.state.categoryName}
                  placeholder="Product Manufacturing Date"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                  required
                />
              </div>
              <div class="form-group">
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
              <div class="form-group">
                <div
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                >
                  <FileUpload func={pulldata} />
                </div>
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
