import React from "react";
import Slider from "../ReUseableComponents/Slider";

export default function OurCustomers() {
  return (
    <>
      <div className="text-center py-20">
        <h1 className="text-3xl text-left px-20 py-5">Our Customers</h1>
        <div className="p-10">
          <Slider item={2} />
        </div>
      </div>
    </>
  );
}
