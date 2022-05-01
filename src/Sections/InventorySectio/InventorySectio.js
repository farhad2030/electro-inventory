import axios from "axios";
import React, { useEffect, useState } from "react";

const InventorySectio = () => {
  const [inventory, setinventory] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/inventory?limit=6`)
      .then((res) => {
        console.log(res);
        setinventory(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="mt-5">
      <h1>Inventory</h1>
      {inventory.map((item) => {
        return <p key={item._id}>{item.name}</p>;
      })}
    </div>
  );
};

export default InventorySectio;
