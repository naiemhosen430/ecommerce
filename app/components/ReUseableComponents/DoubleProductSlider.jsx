import React from "react";
import SingleProductSlider from "./SingleProductSlider";

export default function DoubleProductSlider() {
  return (
    <>
      <div className="w-12/12">
        <SingleProductSlider item={1} />
      </div>
      <div className="w-12/12">
        <SingleProductSlider item={1} />
      </div>
    </>
  );
}
