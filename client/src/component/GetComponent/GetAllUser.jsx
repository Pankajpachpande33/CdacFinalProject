import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteEntity } from "../../action/commonAction";
import { getSeller } from "../../action/sellerAction";
import { getUser } from "../../action/userAction";

import { AppContext } from "../../context/AppContext";
// import Loader from "../loader/Loader";

const GetAllUser = () => {
  const { entity, loading, dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    await getUser("user", dispatch);
  };
  const editItem = (id) => {
	navigate("/editUser");
    //console.log(entity.category,id,category)
   
};

  const buyerId = localStorage.getItem("userId");

  return (
    <div>
      {loading && "loading..."}
      <table className="table container topmt">
        <thead>
          <tr>
            <th> User First Name</th>
            <th>User Last Name</th>
            <th>User Email </th>
            <th>User Mobile Number</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {entity.user.length > 0 &&
            entity.user
              .filter((id) => id.userId == buyerId)
              .map((item, index) => (
                <tr key={item.userId}>
                  <td>{item.userFirstName}</td>
                  <td>{item.userLastName}</td>
                  <td>{item.userEmail}</td>
                  <td>{item.userMobile}</td>
                  <td>
                    <button
                      className="btn btn-primary mr-2"
                      onClick={() => editItem(item.userId)}
                    >
                      Edit
                    </button>
                    
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetAllUser;
