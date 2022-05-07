import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ManageInventory = () => {
  // react-router-dom
  const navigate = useNavigate();

  // store inventory
  const [inventory, setinventory] = useState([]);
  const [remainInventory, setremainInventory] = useState([]);

  // for useEffect
  const [updateCount, setupdateCount] = useState(0);

  // get inventory
  useEffect(() => {
    axios
      .get(`http://localhost:5000/inventory`)
      .then((res) => {
        console.log(res);
        setinventory(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [remainInventory, updateCount]);

  // delete inventory
  const handelDelete = (id, name) => {
    console.log(id);
    const proceed = window.confirm(`Are you sure to delete ${name}`);

    if (proceed) {
      axios
        .delete(`http://localhost:5000/deleteinventory/${id}`)
        .then((res) => {
          console.log(res);
          const remaining = inventory.filter((item) => item._id !== id);
          setremainInventory(remaining);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // for input handeler
  const handelInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    // console.log(name);
    const item = { [name]: value };
    console.log(item);

    const updateInventory = { ...inventory, [name]: value };

    // console.log(updateInventory);
    setinventory(updateInventory);
  };

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
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="container">
      <div className="mt-5">
        <h1 className="py-3">
          ManageInventory
          <button
            className=" btn btn-primary mx-3"
            style={{ cursor: "pointer" }}
          >
            Add new Item
          </button>
        </h1>

        <table className="table table-striped table-dark table-hover ">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Image</th>
              <th scope="col">Quantity</th>
              <th colSpan="3" scope="col">
                Action
              </th>
              <th scope="col">Restock</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item, index) => {
              return (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>
                    <img src={item.image} style={{ width: "50px" }} />
                  </td>
                  <td>{item.quantity}</td>

                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handelDelete(item._id, item.name);
                    }}
                  >
                    Delete
                  </td>

                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate("/editInventory", {
                        state: { path: "editInventory", id: item._id },
                      });
                    }}
                  >
                    Edit
                  </td>
                  <td style={{ cursor: "pointer" }}>Delivered</td>
                  <td style={{ cursor: "pointer" }}>
                    <form onSubmit={handelRestock(item)}>
                      <div className="input-group mb-3">
                        <input
                          style={{ padding: "0px 5px" }}
                          type="number"
                          className="form-control"
                          name="restock"
                          placeholder="Restock"
                          // onChange={handelInput}
                        />
                        <button
                          className="btn btn-outline-secondary"
                          type="submit"
                        >
                          Restock
                        </button>
                      </div>
                    </form>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageInventory;
