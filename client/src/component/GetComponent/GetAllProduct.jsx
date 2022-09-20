import { useContext, useEffect, useState } from "react";
import { deleteEntity } from "../../action/commonAction";
import { getProduct } from "../../action/productAction";

import { AppContext } from "../../context/AppContext";
// import Loader from "../loader/Loader";

const GetAllProduct = () => {
  const { entity, loading, dispatch } = useContext(AppContext);

  const [formData, setFormData] = useState({ productName:'',categoryMaster:'',subCategoryMaster:'',sellerMaster:'',productManufacturingDate:'',productPrice:'',imageUploadPath:'' });
  const [isUpdate, setIsUpdate] = useState(false);


  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    await getProduct('product',dispatch)
  };
  const editItem = (id) => {
    console.log(id);
    setFormData(entity.product.find(f => f.productId === id));
    setIsUpdate(true);
    console.log(formData);
}
const deleteItem = async (id) => {
  const result = await deleteEntity(`product/${id}`);
  if (result) {
      console.log(result)
      loadProduct();
  }
}

  return (
    <div>
      {loading && 'loading...'}
      <table className="table container">
        <thead>
          <tr>
            <td> Product Name</td>
            <td>Category</td>
            <td>SubCategory</td>
            {/* <td>Seller Name</td> */}
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
                {/* <td>{item.sellerMaster.sellerFirstName}</td> */}
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
      </table>
    </div>
  );
};

export default GetAllProduct;