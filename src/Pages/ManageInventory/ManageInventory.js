import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ManageInventory = () => {
  const [inventory, setinventory] = useState([]);
  const [remainInventory, setremainInventory] = useState([]);
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
  }, [remainInventory]);
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

  return (
    <div className="mt-5">
      <h1 className="py-3">ManageInventory</h1>
      {inventory.map((item) => {
        return (
          <p key={item._id}>
            {item.name}{" "}
            <span
              onClick={() => {
                handelDelete(item._id, item.name);
              }}
            >
              Delete
            </span>
          </p>
        );
      })}
    </div>
  );
};

export default ManageInventory;
