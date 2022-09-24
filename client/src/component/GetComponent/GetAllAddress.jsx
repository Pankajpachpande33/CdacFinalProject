import { useContext, useEffect, useState } from "react";
import { getAddress } from "../../action/addressAction";
import { deleteEntity } from "../../action/commonAction";
import './allProduct.css'


import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
// import Loader from "../loader/Loader";

const GetAllAddress = () => {
  const { entity, loading, dispatch } = useContext(AppContext);

  const [formData, setFormData] = useState({ addressStreet:'',addressCity:'',addressState:'',addressCountry:'',addressZip:'' });
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    loadAddress();
  }, []);

  const navigate=useNavigate();

  const loadAddress = async () => {
    await getAddress('address',dispatch)
  };
  const editItem = (id) => {
    console.log(id);
    setFormData(entity.address.find(f => f.addressId === id));
    setIsUpdate(true);
    navigate("/editAddress")
    console.log(formData);
}
const deleteItem = async (id) => {
  const result = await deleteEntity(`address/${id}`);
  if (result) {
      console.log(result)
      loadAddress();
  }
}

  return (
    <div>
      {loading && 'loading...'}
      <div className="card subCat22">
      <table className="table container topmt">
        <thead>
          <tr>
            <th> Address Street </th>
            <th>Address City</th>           
            <th>Address State </th>
            <th>Address country</th>
            <th>Address Zip</th>
            <th>User Name</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {entity.address.length > 0 &&
            entity.address.map((item, index) => (
              <tr key={item.addressId}>
                <td>{item.addressStreet}</td>
                <td>{item.addressCity}</td>
                <td>{item.addressState}</td>
                <td>{item.addressCountry}</td>
                <td>{item.addressZip}</td>
                <td>{item.userMaster.userFirstName}</td>
                <td>
                  &nbsp;&nbsp;<button
                    className="btn btn-primary mr-2"
                     onClick={() => editItem(item.addressId)}
                  >
                    Edit
                  </button><br/><br/>
                  <button
                    className="btn btn-danger ml-2"
                     onClick={() => deleteItem(item.addressId)}
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

export default GetAllAddress;