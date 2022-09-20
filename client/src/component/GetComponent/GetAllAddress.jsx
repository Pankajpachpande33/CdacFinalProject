import { useContext, useEffect, useState } from "react";
import { getAddress } from "../../action/addressAction";
import { deleteEntity } from "../../action/commonAction";


import { AppContext } from "../../context/AppContext";
// import Loader from "../loader/Loader";

const GetAllAddress = () => {
  const { entity, loading, dispatch } = useContext(AppContext);

  const [formData, setFormData] = useState({ addressStreet:'',addressCity:'',addressState:'',addressCountry:'',addressZip:'' });
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    loadAddress();
  }, []);

  const loadAddress = async () => {
    await getAddress('address',dispatch)
  };
  const editItem = (id) => {
    console.log(id);
    setFormData(entity.address.find(f => f.addressId === id));
    setIsUpdate(true);
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
      <table className="table container">
        <thead>
          <tr>
            <td> Address Street </td>
            <td>Address City</td>           
            <td>Address State </td>
            <td>Address country</td>
            <td>Address Zip</td>
            <td>User Name</td>
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
                  <button
                    className="btn btn-primary mr-2"
                     onClick={() => editItem(item.addressId)}
                  >
                    Edit
                  </button>
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
  );
};

export default GetAllAddress;