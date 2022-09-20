import { useContext, useEffect, useState } from "react";
import { deleteEntity } from "../../action/commonAction";
import { getSeller } from "../../action/sellerAction";


import { AppContext } from "../../context/AppContext";
// import Loader from "../loader/Loader";

const GetAllSeller = () => {
  const { entity, loading, dispatch } = useContext(AppContext);

  const [formData, setFormData] = useState({  });
  const [isUpdate, setIsUpdate] = useState(false);


  useEffect(() => {
    loadSeller();
  }, []);

  const loadSeller = async () => {
    await getSeller('seller',dispatch)
  };

  const editItem = (id) => {
    console.log(id);
    setFormData(entity.seller.find(f => f.sellerId === id));
    setIsUpdate(true);
    console.log(formData);
}
const deleteItem = async (id) => {
  const result = await deleteEntity(`seller/${id}`);
  if (result) {
      console.log(result)
      loadSeller();
  }
}

  return (
    <div>
      {loading && 'loading...'}
      <table className="table container">
        <thead>
          <tr>
            <td> Seller First Name</td>
            <td>Seller Last Name</td>
            <td>Seller Mobile Number</td>
            <td>Seller Email </td>
            <td>Seller Password</td>
          </tr>
        </thead>
        <tbody>
          {entity.seller.length > 0 &&
            entity.seller.map((item, index) => (
              <tr key={item.sellerId}>
                <td>{item.sellerFirstName}</td>
                <td>{item.sellerLastName}</td>
                <td>{item.sellerMobileNumber}</td>
                <td>{item.sellerEmail}</td>
                <td>{item.sellerPassword}</td>
                <td>
                  <button
                    className="btn btn-primary mr-2"
                     onClick={() => editItem(item.sellerId)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger ml-2"
                     onClick={() => deleteItem(item.sellerId)}
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

export default GetAllSeller;