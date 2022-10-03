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

const DisplayProductDetails = () => {
  // let  data ={id:1}

  const { entity, loading, dispatch, singleProduct, currentProduct } =
    useContext(AppContext);
  const IMG_URL1 = process.env.REACT_APP_API_IMG_URL;

  const [formData, setFormData] = useState({});
  // const [isUpdate, setIsUpdate] = useState(false);

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

  // const loadProduct = async () => {
  //   await getProduct('product',dispatch)
  // };
  console.log(currentProduct);

  const location = useLocation();

  const loadProduct = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}product/${location.state.pid}`
      );
      // if(result.data.length > 0)
      // {result.data.map((item, index) => (
      //   setFormData([item])))

      // }
      //data = result.data
      // console.log(data)
      // console.log(formData)

      dispatch({ type: LOAD_SINGLE_PRODUCT_SUCCESS, payload: result.data });
      //console.log(entity.product)
      //console.log(result);
      // setFormData(result.data)
      // console.log(result)
    } catch (error) {}
    console.log(location);
  };
  //   const editItem = (id) => {
  //    setFormData(entity.product.find(f => f.productId === id));
  //      console.log(id);
  //     setIsUpdate(true);
  //     console.log(formData);
  // }
  // const deleteItem = async (id) => {
  //   const result = await deleteEntity(`product/${id}`);
  //   if (result) {
  //       console.log(result)
  //       loadProduct();
  //   }
  //}

  return (
    <div>
      {loading && "loading..."}
      {/* <table className="table container">
        <thead>
          <tr>
            <td> Product Name</td>
            <td>Category</td>
            <td>SubCategory</td>
            <td>productManufacturingDate</td>
            <td>productPrice</td>
          </tr>
        </thead>
        <tbody>
          {entity.product.length > 0 &&
            entity.product.map((item, index) => (
              <tr key={item.productId}>
                <td>{item.productName}</td>
                <td>{item.categoryMaster.categoryName}</td>
                <td>{item.subCategoryMaster.subCategoryName}</td>
                <td>{item.productManufacturingDate}</td>
                <td>{item.productPrice}</td>
                <td>
                  <button
                    className="btn btn-primary mr-2"
                     onClick={() => editItem(item.productId)}
                  >
                    Buy
                  </button>
                  <button
                    className="btn btn-danger ml-2"
                     onClick={() => deleteItem(item.productId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table> */}

      {/* <div class="cards12">
             {entity.product.length > 0 &&
            entity.product.map((item, index) => (
              <div key={item.productId}>
    <article class="card shadow-5 card25">
          <img className="imgDiv"
          class="card-img-top"
          src={`${IMG_URL}/${item.imageUploadPath}`}
          alt="No Image For This Product"
             />
        
        <div class="content">
        <br/>
        <div>&nbsp;<b>Product Name :</b> {item.productName}</div>
             <div>&nbsp;<b>Category Name :</b> {item.categoryMaster.categoryName}</div>
                <div>&nbsp;<b>Price :</b> {item.productPrice} ₹</div><br/>&nbsp;&nbsp;
                <button onClick={onSubmit} className="btn-primary">Add To Cart</button>
        </div>           
    </article>
</div>
    ))} 
</div>
 */}
      <div>
        <div className="w-auto p-3">
          <div className="container-fluid margin3">
            <div className="container background2">
              <div className="row">
                <div className="col-4"><br/><br/>
                  <img
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
                          {currentProduct?.productName}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="h6 mt-4">
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
                    </tr><br/>
                    <tr>
                      <td>
                        <button onClick={onSubmit} class="btn btn-primary mt-4">
                          Order Now
                        </button>
                      </td>
                    </tr>
                  </table><br/><br/>
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

export default DisplayProductDetails;
