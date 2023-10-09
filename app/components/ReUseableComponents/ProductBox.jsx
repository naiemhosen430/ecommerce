import React from "react";
import SingleProduct from "./SingleProduct";

export default function ProductBox({ totalitems }) {
  return (
    <>
      <div className="text-center">
        {/* {totalitems.map((item, i) => (
          ))} */}
        <SingleProduct key={i} />
      </div>
    </>
  );
}
