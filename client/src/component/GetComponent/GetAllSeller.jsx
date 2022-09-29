import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteEntity } from "../../action/commonAction";
import { getSeller } from "../../action/sellerAction";


import { AppContext } from "../../context/AppContext";
// import Loader from "../loader/Loader";

const GetAllSeller = () => {
  const sellerid = localStorage.getItem("userId");

  const { entity, loading, dispatch } = useContext(AppContext);

  const [formData, setFormData] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    loadSeller();
  }, []);

  const loadSeller = async () => {
    await getSeller("seller", dispatch);
  };

  const navigate = useNavigate();

  const editItem = (id) => {
    console.log(id);
    setFormData(entity.seller.find((f) => f.sellerId === id));
    setIsUpdate(true);
    navigate("/editSeller");
    console.log(formData);
  };
  const deleteItem = async (id) => {
    const result = await deleteEntity(`seller/${id}`);
    if (result) {
      console.log(result);
      loadSeller();
    }
  };

  console.log(entity.seller);
  console.log(sellerid);

  return (
    <div>
      <div className="card subCat22">
        {loading && "loading..."}
        <table className="table container-fluid topmt">
          <thead>
            <tr>
              <th> Seller First Name</th>
              <th>Seller Last Name</th>
              <th>Seller Mobile Number</th>
              <th>Seller Email </th>
              <th>Seller Password</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {entity.seller.length > 0 &&
              entity.seller
                .filter((id) => id.sellerId == sellerid)
                .map((item, index) => (
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
                        className="btn btn-danger ml-2 "
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
    </div>
  );
};

export default GetAllSeller;