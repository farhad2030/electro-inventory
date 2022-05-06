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
    <div className="container">
      <div className="mt-5">
        <h1 className="py-3">ManageInventory</h1>

        <table className="table table-striped table-dark table-hover ">
          <thead>
            <tr>
              <th className=" " scope="col">
                No
              </th>
              <th className=" " scope="col">
                Id
              </th>
              <th className=" " scope="col">
                Name
              </th>
              <th className=" " scope="col">
                Image
              </th>
              <th colspan="2" className=" " scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item, index) => {
              return (
                <tr key={item._id} className="">
                  <td className=" ">{index + 1}</td>
                  <td className=" ">{item._id}</td>
                  <td className=" ">{item.name}</td>
                  <td className=" ">
                    <img src={item.image} style={{ width: "50px" }} />
                  </td>
                  <td
                    className=" "
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handelDelete(item._id, item.name);
                    }}
                  >
                    Delete
                  </td>
                  <td
                    className=" "
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate("/editInventory", {
                        state: { path: "editInventory", id: item._id },
                      });
                    }}
                  >
                    Edit
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
