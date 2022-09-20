import { useContext, useEffect, useState } from "react";
import { deleteEntity } from "../../action/commonAction";
import { getSeller } from "../../action/sellerAction";
import { getUser } from "../../action/userAction";


import { AppContext } from "../../context/AppContext";
// import Loader from "../loader/Loader";

const GetAllUser = () => {
  const { entity, loading, dispatch } = useContext(AppContext);

  const [formData, setFormData] = useState({  });
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    await getUser('user',dispatch)
  };
  const editItem = (id) => {
    console.log(id);
    setFormData(entity.user.find(f => f.userId === id));
    setIsUpdate(true);
    console.log(formData);
}
const deleteItem = async (id) => {
  const result = await deleteEntity(`user/${id}`);
  if (result) {
      console.log(result)
      loadUser();
  }
}

  return (
    <div>
      {loading && 'loading...'}
      <table className="table container">
        <thead>
          <tr>
            <td> User First Name</td>
            <td>User Last Name</td>           
            <td>User Email </td>
            <td>User Mobile Number</td>
          </tr>
        </thead>
        <tbody>
          {entity.user.length > 0 &&
            entity.user.map((item, index) => (
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
                  <button
                    className="btn btn-danger ml-2"
                     onClick={() => deleteItem(item.userId)}
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

export default GetAllUser;