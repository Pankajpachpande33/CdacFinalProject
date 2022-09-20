import { useContext, useEffect, useState } from "react";
import { getCategory } from "../../action/categoryActions";
import { deleteEntity } from "../../action/commonAction";
import { AppContext } from "../../context/AppContext";
// import Loader from "../loader/Loader";

const GetAllCategory = () => {
  const { entity, loading, dispatch } = useContext(AppContext);

  const [formData, setFormData] = useState({ categoryName: '', status: '' });
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    loadCategory();
  }, []);

  const loadCategory = async () => {
    await getCategory('category',dispatch)
  };

  const editItem = (id) => {
    console.log(id);
    setFormData(entity.category.find(f => f.categoryId === id));
    setIsUpdate(true);
    console.log(formData);
}
const deleteItem = async (id) => {
  const result = await deleteEntity(`category/${id}`);
  if (result) {
      console.log(result)
      loadCategory();
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
          {entity.category.length > 0 &&
            entity.category.map((item, index) => (
              <tr key={item.categoryId}>
                <td>{item.categoryName}</td>
                <td>{item.status ? "Active" : "InActive"}</td>
                <td>
                  <button
                    className="btn btn-primary mr-2"
                     onClick={() => editItem(item.categoryId)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger ml-2"
                     onClick={() => deleteItem(item.categoryId)}
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

export default GetAllCategory;