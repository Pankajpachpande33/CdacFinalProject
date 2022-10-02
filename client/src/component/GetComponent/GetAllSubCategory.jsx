import { useContext, useEffect, useState } from "react";
import { deleteEntity } from "../../action/commonAction";
import { getSubCategory } from "../../action/subcategoryAction";
import './updateAllSubCategory.css'

import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import Loader from "../loader/Loader";

const GetAllSubCategory = () => {
  const { entity, loading, dispatch } = useContext(AppContext);

  useEffect(() => {
    loadSubCategory();
  }, []);

  const loadSubCategory = async () => {
    await getSubCategory('subCategory',dispatch)
  };
  const [formData, setFormData] = useState({ subCategoryName: '',categoryName:'', status: '' });
  const [isUpdate, setIsUpdate] = useState(false);

  
  const navigate = useNavigate();

const editItem = (id) => {
    const subCategory= entity.subCategory.find(f => f.subCategoryId === id)
    setFormData(subCategory);
    setIsUpdate(true);
	navigate("/editSubCategory", {state:subCategory});
    //console.log(entity.category,id,category)
   
}

console.log(FormData);
const deleteItem = async (id) => {
  const result = await axios.delete(`http://127.0.0.1:9999/subCategory/${id}`);
  if (result) {
      console.log(result)
      loadSubCategory();
  }
}

  return (
    <div>
      <div className="card subCat22">
      {loading && 'loading...'}
      <table className="table container topmt">
        <thead>
          <tr>
            <th>Sub-Category Name</th>
            <th>Status</th>
            <th>Category Name</th>
            <th>Edit/Delete</th><br/>
          </tr>
        </thead>
        <tbody>
          {entity.subCategory.length > 0 &&
            entity.subCategory.map((item, index) => (
              <tr key={item.subCategoryId}>
                <td>{item.subCategoryName}</td>
                <td>{item.status ? "Active" : "InActive"}</td>
                <td>{item.categoryMaster.categoryName}</td>
                <td>
                  <button
                    className="btn btn-primary mr-2"
                     onClick={() => editItem(item.subCategoryId)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger ml-2"
                     onClick={() => deleteItem(item.subCategoryId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      </div>

    </div>
  );
};

export default GetAllSubCategory;