import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const InventorySectio = () => {
  const navigate = useNavigate();
  const [inventory, setinventory] = useState([]);
  useEffect(() => {
    axios
      .get(`https://radiant-inlet-16077.herokuapp.com/inventory?limit=6`)
      .then((res) => {
        console.log(res);
        setinventory(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container">
      <div className="mt-5">
        <h1>Inventory</h1>
        <div className="row">
          {inventory.map((item) => {
            return (
              <div key={item._id} className="col-12 col-md-6 col-lg-3  ">
                <div className="border p-3 rounded ">
                  <h6>{item.name}</h6>
                  <p>{item.description}</p>
                  <img src={item.image} style={{ width: "150px" }} />

                  <p> Quantity : {item.quantity}</p>
                  <p> Supplier : {item.supplierName}</p>
                  <p>
                    <button
                      className="btn btn-primary m-3"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate(`/manageInventory/${item._id}`, {
                          state: { path: "editInventory", id: item._id },
                        });
                      }}
                    >
                      Edit Inventory
                    </button>
                  </p>
                </div>
              </div>
            );
          })}

          <div className="col-12 col-md-6 col-lg-3 my-auto ">
            <Link class="btn btn-info " to="inventory">
              All Inventories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventorySectio;
