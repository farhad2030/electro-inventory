import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Form, Button, Toast } from "react-bootstrap";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddItem = () => {
  // useLocation
  const location = useLocation();
  const path = location?.state?.path;
  const id = location?.state?.id;

  //
  const [inventory, setinventory] = useState([]);

  // react-firebase-hook
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://radiant-inlet-16077.herokuapp.com/inventory/${id}`)
        .then((res) => {
          console.log(res.data);
          setinventory(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const handelAddItem = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);

    if (!loading && user) {
      if (path === "editInventory") {
        axios
          .put(
            `https://radiant-inlet-16077.herokuapp.com/updateInventory/${id}`,
            formDataObj
          )
          .then((res) => {
            // console.log(res);
            if (res.statusText == "OK") {
              toast("Data is updated");
              event.target.reset();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        const addData = { ...formDataObj, email: user.email };
        axios
          .post(
            "https://radiant-inlet-16077.herokuapp.com/addInventory",
            addData
          )
          .then((res) => {
            console.log(res);
            if (res.data.acknowledged) {
              event.target.reset();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      toast("Not add");
    }
  };
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
  return (
    <div className="mt-5 pt-3">
      <Form
        className="my-5 w-75 mx-auto rounded border border-3 p-3"
        onSubmit={handelAddItem}
      >
        <h1 className="py-4">
          {path === "editInventory" ? "Edit inventory" : "Add Item"}
        </h1>

        <Form.Group className="mb-3 inputfield">
          <Form.Control
            type="text"
            name="name"
            value={inventory?.name || ""}
            onChange={handelInput}
            placeholder="Name"
          />
        </Form.Group>
        <Form.Group className="mb-3 inputfield">
          <Form.Control
            type="text"
            name="image"
            placeholder="Image link"
            value={inventory?.image || ""}
            onChange={handelInput}
          />
        </Form.Group>
        <Form.Group className="mb-3 inputfield">
          <Form.Control
            type="text"
            name="description"
            placeholder="Description"
            value={inventory?.description || ""}
            onChange={handelInput}
          />
        </Form.Group>
        <Form.Group className="mb-3 inputfield">
          <Form.Control
            type="text"
            name="price"
            placeholder="price"
            value={inventory?.price || ""}
            onChange={handelInput}
          />
        </Form.Group>
        <Form.Group className="mb-3 inputfield">
          <Form.Control
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={inventory?.quantity || ""}
            onChange={handelInput}
          />
        </Form.Group>
        <Form.Group className="mb-3 inputfield">
          <Form.Control
            type="text"
            name="supplierName"
            placeholder="Supplier Name"
            value={inventory?.supplierName || ""}
            onChange={handelInput}
          />
        </Form.Group>
        <Form.Group className="mb-3 inputfield">
          <Form.Control
            type="text"
            name="brand"
            placeholder="Brand"
            value={inventory?.brand || ""}
            onChange={handelInput}
          />
        </Form.Group>
        <Form.Group className="mb-3 inputfield">
          <Form.Control
            type="text"
            name="sold"
            placeholder="Sold"
            value={inventory?.sold || ""}
            onChange={handelInput}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          {path === "editInventory" ? "Edit Item" : "Add Item"}
        </Button>
      </Form>
    </div>
  );
};

export default AddItem;
