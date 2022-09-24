import { useContext, useEffect, useState } from "react";
import { deleteEntity } from "../../action/commonAction";
import { getProduct } from "../../action/productAction";
import './allProduct.css'
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { LOAD_PAGEID_SUCCESS } from "../../constants/ApplicationTypes";
// import Loader from "../loader/Loader";

const GetAllProduct = () => {

  const navigate = useNavigate()

  const editItem = (id) => {
     //const product= entity.product.find(f => f.productId === id)
    // setFormData(category);
    // setIsUpdate(true);
    console.log(id)
	navigate("/displayProductDetails", {state:{pid:id}});
    //console.log(entity.category,id,category)
   
}

  const { entity, loading, dispatch } = useContext(AppContext);

  const [formData, setFormData] = useState({ productName:'',categoryMaster:'',subCategoryMaster:'',sellerMaster:'',productManufacturingDate:'',productPrice:'',imageUploadPath:'' });
  const [isUpdate, setIsUpdate] = useState(false);
  

  const IMG_URL = process.env.REACT_APP_API_IMG_URL;

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    await getProduct('product',dispatch)
    
  };

  console.log(entity)
//   const editItem = (id) => {
//     console.log(id);
//     setFormData(entity.product.find(f => f.productId === id));
//     setIsUpdate(true);
//     console.log(formData);
// }
// const deleteItem = async (id) => {
//   const result = await deleteEntity(`product/${id}`);
//   if (result) {
//       console.log(result)
//       loadProduct();
//   }
// }

// const onSubmitID = (id) => {
//   console.log(id);
//   dispatch({type:LOAD_PAGEID_SUCCESS,payload:id})
//   navigation("/displayProductDetails",{pageId : id})
// };

  return (
    <div>
      {loading && 'loading...'}
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

             <div class="cards12">
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
             {/* <div>&nbsp;<b>Category Name :</b> {item.categoryMaster.categoryName}</div> */}
                {/* <div>{item.subCategoryMaster.subCategoryName}</div> */}
                {/* <td>{item.sellerMaster.sellerFirstName}</td> */}
                {/* <div>{item.productManufacturingDate}</div> */}
                <div>&nbsp;<b>Price :</b> {item.productPrice} ₹</div><br/>&nbsp;&nbsp;
                <button onClick={() => editItem(item.productId)} className="btn-primary">Add To Cart</button>
                
        </div>           
    </article>
</div>
    ))} 
</div>






    </div>
  );
};

export default GetAllProduct;