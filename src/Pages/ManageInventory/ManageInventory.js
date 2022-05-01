import axios from "axios";
import React, { useEffect, useState } from "react";

const ManageInventory = () => {
  const [inventory, setinventory] = useState([]);

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
  }, []);
  const handelDelete = (id) => {
    axios
      .delete(`http://localhost:5000/deleteinventory`, { id })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
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
                handelDelete(item._id);
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
