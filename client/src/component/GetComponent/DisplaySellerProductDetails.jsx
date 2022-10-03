import React from "react";
import { useContext, useEffect, useState } from "react";
import { deleteEntity } from "../../action/commonAction";
import { getProduct } from "../../action/productAction";
import "./displayProductDetails.css";
import { AppContext } from "../../context/AppContext";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  LOAD_PRODUCT_SUCCESS,
  LOAD_SINGLE_PRODUCT_SUCCESS,
} from "../../constants/ApplicationTypes";

const DisplaySellerProductDetails = () => {
  // let  data ={id:1}

  const { entity, loading, dispatch, singleProduct, currentProduct } =
    useContext(AppContext);
  const IMG_URL1 = process.env.REACT_APP_API_IMG_URL;

  const [formData, setFormData] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);

  const [prod, setProd] = useState();
  const IMG_URL = process.env.REACT_APP_API_IMG_URL;

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    navigate("/myOrders", {
      state: {
        productName: currentProduct.productName,
        productId: currentProduct.productId,
      },
    });
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const editItem = (id) => {
    // const product= entity.product.find(f => f.productId === id)
    // setFormData(product);
    // setIsUpdate(true);
    navigate("/editProduct", {
      state: {
        productId: currentProduct.productId,
      },
    });
    //console.log(entity.category,id,category)
   
}
console.log(formData);
const deleteItem = async (id) => {
  const result = await axios.delete(`${process.env.REACT_APP_API_URL}product/${currentProduct.productId}`);
  if (result) {
    alert("Product Deleted Successfully");
    navigate("/sellerHome");
      console.log(result)
      loadProduct();
  }
}
  console.log(currentProduct);

  const location = useLocation();

  const loadProduct = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}product/${location.state.pid}`
      );

      dispatch({ type: LOAD_SINGLE_PRODUCT_SUCCESS, payload: result.data });
   
    } catch (error) {}
    console.log(location);
  };
 
  return (
    <div>
      {loading && "loading..."}
    
      <div>
        <div className="w-auto p-3">
          <div className="container-fluid margin3">
            <div className="container background2">
              <div className="row">
                <div className="col-4">
                <br/><br/><br/> <img
                    className="singleProd"
                    src={`${IMG_URL}/${currentProduct?.imageUploadPath}`}
                    alt="image not found"
                  />
                </div>
                <div className="col-8">
                  {/* {entity.product.length > 0 &&
            entity.product.map((item, index) => (
              <div key={item.productId}> */}
                  <table>
                    <tr>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="h1 font-weight-bold">
                        <div className="mt-4">
                         Title : {currentProduct?.productName}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="h6 mt-4"><br/>
                          <h5><h3><b>Product Description</b></h3><br/>
                            Wooden Engraved Tealight Holder (Large) - Circle.
                            (Candles not included). Beautiful wooden block
                            carved tea light holders that will always be
                            appreciated for their unique and rustic appeal. They
                            also look lovely as table curios. Artistic woodwork
                            and wood inlay work began as a temple and palace
                            craft, and flourished alongside architecture and
                            sculpture. Depending on local availability,
                            different woods were used for wood carving, and
                            fashioned into religious, decorative and functional
                            articles.
                          </h5>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="h5 mt-4 font-weight-bold">
                          Price - ₹ {currentProduct?.productPrice} INR
                        </div>
                      </td>
                    </tr><br/><br/>
                    <tr>
                      <td>
                        <button class="btn btn-warning" onClick={editItem}>Edit</button> &nbsp; &nbsp;
                        <button class="btn btn-warning" onClick={deleteItem}>Delete</button>
                      </td>
                    </tr><br/><br/>
                  </table>
                </div>
                {/* ))} </div>  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplaySellerProductDetails;
