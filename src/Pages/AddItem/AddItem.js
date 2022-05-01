import React from "react";
import { Form, Button } from "react-bootstrap";

const AddItem = () => {
  const handelAddItem = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
  };
  return (
    <div className="mt-5 pt-3">
      <Form
        className="my-5 w-75 mx-auto rounded border border-3 p-3"
        onSubmit={handelAddItem}
      >
        <h1 className="py-4">Add Item</h1>

        <Form.Group className="mb-3 inputfield">
          <Form.Control type="text" name="name" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3 inputfield">
          <Form.Control type="text" name="image" placeholder="Image link" />
        </Form.Group>
        <Form.Group className="mb-3 inputfield">
          <Form.Control
            type="text"
            name="description"
            placeholder="Description"
          />
        </Form.Group>
        <Form.Group className="mb-3 inputfield">
          <Form.Control type="text" name="price" placeholder="price" />
        </Form.Group>
        <Form.Group className="mb-3 inputfield">
          <Form.Control type="number" name="quantity" placeholder="Quantity" />
        </Form.Group>
        <Form.Group className="mb-3 inputfield">
          <Form.Control
            type="text"
            name="supplierName"
            placeholder="Supplier Name"
          />
        </Form.Group>
        <Form.Group className="mb-3 inputfield">
          <Form.Control type="text" name="brand" placeholder="Brand" />
        </Form.Group>
        <Form.Group className="mb-3 inputfield">
          <Form.Control type="text" name="sold" placeholder="Sold" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Item
        </Button>
      </Form>
    </div>
  );
};

export default AddItem;
