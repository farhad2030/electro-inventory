import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const ManageInventory = () => {
  const [inventory, setinventory] = useState();

  // react-router-dom
  const params = useParams();
  const id = params.id;
  const location = useLocation();
  const navigate = useNavigate();

  const [user, loading, error] = useAuthState(auth);

  // for useEffect
  const [updateCount, setupdateCount] = useState(0);

  useEffect(() => {
    const getInventory = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        console.log(token);
        const email = user?.email;

        const { data } = await axios.get(
          `http://localhost:5000/inventory/${id}?email=${email}`,
          {
            headers: {
              authorization: `bearer ${token}`,
            },
          }
        );
        console.log(data);
        setinventory(data);
      } catch (error) {
        console.log(error);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/authentication/login", {
            state: { from: location, Islogin: true },
            replace: true,
          });
        }
      }
    };
    getInventory();
  }, [updateCount]);

  // handel restock

  const handelRestock = (item) => (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj.restock, item);
    if (formDataObj.restock) {
      const newQuantity =
        parseInt(item.quantity) + parseInt(formDataObj.restock);
      console.log(newQuantity);
      axios
        .put(`http://localhost:5000/updateRestock/${item._id}`, {
          quantity: newQuantity,
        })
        .then((res) => {
          console.log(res);
          setupdateCount(updateCount + 1);
          event.target.reset();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // deliver quantity
  const deliverHandeler = (item) => {
    const newQuantity = parseInt(item.quantity) - 1;
    const sold = parseInt(item.sold) + 1;

    const updateinventory = async () => {
      if (parseInt(item.quantity) > 0) {
        console.log("in update");

        try {
          const { data } = await axios.put(
            `http://localhost:5000/updateRestock/${item._id}`,
            {
              quantity: newQuantity,
              sold: sold,
            }
          );
          console.log(data);

          setupdateCount(updateCount + 1);
        } catch (error) {
          console.log(error);
        }
      }
    };
    updateinventory();
  };
  return (
    <div className="mt-5 container">
      <h1>Manage Inventory</h1>
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <div className="rounded border p-3  my-4">
            <h5>{inventory?.name}</h5>
            <img src={inventory?.image} alt="" />
            <p>{inventory?.description}</p>
            <p>Quantity : {inventory?.quantity}</p>
            <p>Sold : {inventory?.sold}</p>
            <button
              className="btn btn-primary my-3 "
              onClick={() => {
                deliverHandeler(inventory);
              }}
            >
              Deliver One item
            </button>
            <form onSubmit={handelRestock(inventory)}>
              <div className="input-group mb-3">
                <input
                  style={{ padding: "0px 5px" }}
                  type="number"
                  className="form-control"
                  name="restock"
                  placeholder="Restock"
                  // onChange={handelInput}
                />
                <button className="btn btn-outline-secondary" type="submit">
                  Restock
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;
