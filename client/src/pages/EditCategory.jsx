import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export const EditCategory = () => {
  const [category, setCategory] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log(category);

    const res = await axios.put(
      `http://127.0.0.1:9999/category/${location.state.categoryId}`,
      category
    );
    navigate("/displayCategory");
  };

  const handleChange = (fieldName, fieldValue) => {
    setCategory((prev) => ({ ...prev, [fieldName]: fieldValue, status: true }));
  };

  useEffect(() => {
    setCategory(location.state);
  }, [location.state]);

  console.log(location.state);

  return (
    <div>
      <div className="w-auto p-3 gradient">
        <div class="card c2 container margin-top">
          <div>
            <br />
            <br />
            <h1 className="t1">Update Category</h1>
            <hr />
            <form>
              <div class="form-group">
                <label for="categoryName">Category Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="categoryName"
                  id="categoryName"
                  // value={location.state.categoryName}
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
        </div>
      </div>
    </div>
  );
};
