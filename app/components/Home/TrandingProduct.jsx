"use client";
import React, { useEffect } from "react";
import ProductBox from "../ReUseableComponents/ProductBox";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TrandingProduct() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <div className="p-2 lg:w-10/12 m-auto py-20" data-aos="fade-up">
        <div className="flex items-center">
          <h1 className="text-slate-500 w-12/12 p-2 text-2xl">You may like</h1>
        </div>
        <div className="text-center">
          <ProductBox totalitems={8} />
        </div>
      </div>
    </>
  );
}
