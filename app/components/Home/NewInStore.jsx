"use client";

import React, { useState } from "react";
import ProductBox from "../ReUseableComponents/ProductBox";

export default function NewInStore() {
  return (
    <>
      <div className="p-2 lg:w-10/12 m-auto py-20 space-2">
        <h1 className="text-3xl p-4 font-bold text-center">Populer Product</h1>
        <ProductBox totalitems={3} />
      </div>
    </>
  );
}
