import React from "react";
import SingleProduct from "./SingleProduct";

export default function ProductBox({ totalitems }) {
  return (
    <>
      <div className="text-center">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </div>
    </>
  );
}
