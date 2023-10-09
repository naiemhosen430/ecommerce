'use client'
import Link from "next/link";
import React, { useState } from "react";
import List from "../ReUseableComponents/List";
import ProductBox from "../ReUseableComponents/ProductBox";



export default function CetagorySection() {
  const [cetagoryBox, setCetagoryBox] = useState(false)

  // hundle onclick
const showCetagoryBox = () => {
  if (cetagoryBox === true){
    setCetagoryBox(false)
  }else{
    setCetagoryBox(true)
  }
}
  return (
    <>
      <div>
        <div className="flex items-center w-10/12 m-auto justify-center">
          <h1 className="w-9/12 text-lg font-bold text-slate-600">
            SHOP BY CATEGORY
          </h1>
          <Link href={"/"} className="w-3/12 text-center font-bold py-2 px-4">
            SEE ALL
          </Link>
        </div>
        <div className="lg:flex lg:justify-center w-10/12 m-auto lg:items-start">
          <div className="lg:w-3/12 w-12/12">
            <button onClick={showCetagoryBox} className="rounded-full py-2 px-4 bg-slate-500 text-white font-bold block lg:hidden">Cetagory</button>
            {cetagoryBox && <List className="" />}
            <div className="hidden lg:block md:hidden sm:hidden">
            <List />
            </div>
          </div>
          <div className="lg:w-9/12 w-12/12">
            <ProductBox totalitems={6} />
          </div>
        </div>
      </div>
    </>
  );
}
