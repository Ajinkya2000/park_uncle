import React from "react";

import SlotForm from "./SlotForm";

const AddSlot = () => {
  return (
    <div
      className="container section"
      style={{ minHeight: "100vh", display: "grid" }}
    >
      <h2 className="has-text-centered is-size-3"> Add Parking Location</h2>
      <SlotForm />
    </div>
  );
};

export default AddSlot;
