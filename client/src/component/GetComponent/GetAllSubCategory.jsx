import { useContext, useEffect, useState } from "react";
import { deleteEntity } from "../../action/commonAction";
import { getSubCategory } from "../../action/subcategoryAction";

import { AppContext } from "../../context/AppContext";
// import Loader from "../loader/Loader";

const GetAllSubCategory = () => {
  const { entity, loading, dispatch } = useContext(AppContext);

  const [formData, setFormData] = useState({ subCategoryName: '', status: '', categoryMaster: '' });
  const [isUpdate, setIsUpdate] = useState(false);


  useEffect(() => {
    loadSubCategory();
  }, []);

  const loadSubCategory = async () => {
    await getSubCategory('subCategory',dispatch)
  };
  const editItem = (id) => {
    console.log(id);
    setFormData(entity.subCategory.find(f => f.subCategoryId === id));
    setIsUpdate(true);
    console.log(formData);
}
const deleteItem = async (id) => {
  const result = await deleteEntity(`subCategory/${id}`);
  if (result) {
      console.log(result)
      loadSubCategory();
  }
}
  return (
    <div>
      {loading && 'loading...'}
      <table className="table container">
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Action</td>
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
  );
};

export default GetAllSubCategory;