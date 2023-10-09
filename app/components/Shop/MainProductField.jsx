import React from "react";
import FilterBar from "./FilterBar";
import ProductBox from "../ReUseableComponents/ProductBox";

export default function MainProductField() {
  return (
    <>
      <div className="lg:flex py-20 w-10/12 m-auto lg:items-start lg:justify-center">
        <div className="lg:w-3/12 w-12/12">
          <FilterBar />
        </div>
        <div className="lg:w-9/12 w-12/12">
          <ProductBox totalitems={10} />
        </div>
      </div>
    </>
  );
}
