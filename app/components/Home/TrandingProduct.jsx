import React from "react";
import ProductBox from "../ReUseableComponents/ProductBox";

export default function TrandingProduct() {
  return (
    <>
      <div className="p-2 w-10/12 m-auto py-20">
        <div className="flex items-center">
          <h1 className="text-slate-500 w-12/12 p-2 text-2xl">
            TRENDING PRODUCTS
          </h1>
        </div>
        <div className="text-center">
          <ProductBox totalitems={8} />
        </div>
      </div>
    </>
  );
}
