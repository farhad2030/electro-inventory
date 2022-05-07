import React from "react";

const FaqSection = () => {
  return (
    <div className="container mb-5">
      <h1 className="py-5 mt-5">Some Important Information </h1>
      <div className=" text-start">
        <p> 1. To add a inventory one have to login or register </p>
        <p>2. Login is required to delete an item </p>

        <p>3. You can see inventory list with out login</p>

        <p>4. Login user can see his/her added inventory.</p>
      </div>
    </div>
  );
};

export default FaqSection;
