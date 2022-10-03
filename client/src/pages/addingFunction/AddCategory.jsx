import "./addProduct.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { getCategory } from "../action/categoryActions";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const [category, setCategory] = useState({});

  const [subCategory, setSubCategory] = useState({});

  const { entity, loading, dispatch } = useContext(AppContext);

  const [formData, setFormData] = useState({ categoryName: "", status: "" });
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    loadCategory();
  }, []);

  const loadCategory = async () => {
    await getCategory("category", dispatch);
  };

  const navigate = useNavigate();

  const handleChange = (fieldName, fieldValue) => {
    setCategory((prev) => ({ ...prev, [fieldName]: fieldValue, status: true }));
  };

  const handleChangeSub = (fieldName, fieldValue) => {
    setSubCategory((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
      status: true,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(category);
    const res = await axios.post(`${process.env.REACT_APP_API_URL}category`, category);
  };

  const onSubmitSub = async (e) => {
    e.preventDefault();
    console.log(subCategory);
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}subCategory`,
      subCategory
    );
    if (res) {
      navigate("/addProduct");
    }
  };

  return (
    <div>
      <div className="w-auto p-3 gradient">
        <div class="card c2 container margin-top">
          <div>
            <br />
            <br />
            <h1 className="t1">Add Category</h1>
            <hr />
            <form>
              <div class="form-group">
                <label for="categoryName">Category Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="categoryName"
                  id="categoryName"
                  placeholder="categoryName"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                  required
                />
              </div>
              <br />
              <button onClick={onSubmit} class="btn btn-warning">
                Submit
              </button>
              &nbsp;&nbsp;
              <button class="btn btn-warning" type="reset" value="Reset">
                Reset
              </button>
            </form>
          </div>
          <div>
            <br />
            <br />
            <br />
            <br />
            <h1 className="t1">Add SubCategory</h1>
            <hr />
            <form action="/addProduct">
              <div class="form-group">
                <label for="subCategoryName">Sub-Category Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="subCategoryName"
                  placeholder="Enter Sub-Category Name"
                  name="subCategoryName"
                  onChange={(e) => handleChangeSub(e.target.id, e.target.value)}
                  required
                />
              </div>
              {/* <div class="form-group">
                <label for="categoryId">Category Id</label>
                <input
                  type="text"
                  class="form-control"
                  name="categoryId"
                  id="categoryId"
                  placeholder="categoryId"
                  onChange={(e) => handleChangeSub(e.target.id, e.target.value)}
                  required
                />
              </div> */}
              {/* {entity.category.length > 0 &&
            entity.category.map((item, index) => (
              <tr key={item.categoryId}>
                <td>{item.categoryName}</td>
                <td>{item.status ? "Active" : "InActive"}</td>
                <td></td> */}
              <div>
                <label for="categoryId">Choose Category : </label>

                <select
                  name="categoryId"
                  id="categoryId"
                  onChange={(e) => handleChangeSub(e.target.id, e.target.value)}
                >
                  <option>Select</option>
                  {entity.category.length > 0 &&
                    entity.category.map((item, index) => (
                      <option value={item.categoryId}>
                        {item.categoryName}
                      </option>
                    ))}
                  {/* <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option> */}
                </select>
              </div>
              <br />
              <button onClick={onSubmitSub} class="btn btn-warning">
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

export default AddCategory;
