import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

//icons
import { FcDeleteDatabase, FcEditImage } from "react-icons/fc";
import { GiCommercialAirplane } from "react-icons/gi";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Inventory = () => {
  // react-router-dom
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  // react-firebase-hook
  const [user, loading, userError] = useAuthState(auth);

  // store inventory
  const [inventory, setinventory] = useState([]);
  const [remainInventory, setremainInventory] = useState([]);

  const [error, seterror] = useState("");

  // for useEffect
  const [updateCount, setupdateCount] = useState(0);

  // get inventory
  useEffect(() => {
    if (!loading) {
      console.log({ email: user?.email });

      const getItems = async () => {
        try {
          if (location.state?.from == "myItems") {
            const token = localStorage.getItem("accessToken");
            console.log(token);
            const email = user?.email;
            const { data } = await axios.get(
              `https://radiant-inlet-16077.herokuapp.com/myInventory?email=${email}`,
              {
                headers: {
                  authorization: `bearer ${token}`,
                },
              }
            );
            console.log(data);
            setinventory(data);
            seterror("");
          } else {
            const { data } = await axios.get(
              `https://radiant-inlet-16077.herokuapp.com/inventory`
            );
            console.log(data);
            seterror("");
            setinventory(data);
          }
        } catch (error) {
          console.log(error);
          setinventory([]);
          seterror(error.message);
        }
      };
      getItems();
    }
  }, [remainInventory, updateCount, location, user, loading]);

  // delete inventory
  const handelDelete = (id, name) => {
    console.log(id);
    if (user) {
      const proceed = window.confirm(`Are you sure to delete ${name}`);
      if (proceed) {
        axios
          .delete(
            `https://radiant-inlet-16077.herokuapp.com/deleteinventory/${id}`
          )
          .then((res) => {
            console.log(res);
            const remaining = inventory.filter((item) => item._id !== id);
            setremainInventory(remaining);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      navigate("/authentication/login", {
        state: { from: location, Islogin: true },
        replace: true,
      });
    }
  };

  return (
    <div className="container">
      <div className="mt-5">
        <h1 className="py-3">
          Inventory
          <button
            className=" btn btn-primary mx-3"
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/addItem");
            }}
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
              <th scope="col">Email</th>
              <th scope="col">Description</th>
              <th scope="col">Image</th>
              <th scope="col">Quantity</th>
              <th scope="col">Sold</th>
              <th colSpan="2" scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item, index) => {
              return (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item._id}</td>
                  <td>{item?.name}</td>
                  <td>{item?.email}</td>
                  <td>{item.description}</td>
                  <td>
                    <img src={item.image} style={{ width: "50px" }} />
                  </td>
                  <td>{item.quantity}</td>
                  <td>{item.sold}</td>

                  {/* <>
                    <td
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        handelDelete(item._id, item.name);
                      }}
                    >
                      Delete
                      <FcDeleteDatabase />
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
                      <FcEditImage />
                    </td>
                    <td
                      onClick={() => {
                        deliverHandeler(item);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      Delivered
                      <GiCommercialAirplane />
                    </td>
                  </> */}
                  <td>
                    <button
                      className="btn btn-secondary "
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate(`/manageInventory/${item._id}`, {
                          state: { path: "editInventory", id: item._id },
                        });
                      }}
                    >
                      Edit item <FcEditImage />
                    </button>
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handelDelete(item._id, item.name);
                    }}
                  >
                    Delete
                    <FcDeleteDatabase />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="text-danger">{error ? error : ""}</p>
      </div>
    </div>
  );
};

export default Inventory;
