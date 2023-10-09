import React from "react";
import Slider from "./Slider";

export default function DoubleProductSlider() {
  return (
    <>
      <div>
        <Slider item={1} />
      </div>
      <div>
        <Slider item={1} />
      </div>
      <div>
        <Slider item={1} />
      </div>
    </>
  );
}
