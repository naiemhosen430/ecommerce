"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SingleProduct({ image, pname, price }) {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);
  return (
    <>
      <div
        className="inline-block bg-slate-300 shadow-md rounded-md p-2"
        data-aos="fade-up"
      >
        <img className="w-full h-80" src={image} alt="" />
        <div className="p-2">
          <h1 className="font-bold py-1">{pname}</h1>
          <h1 className="font-bold text-lg text-slate-900 py-1">$ {price}</h1>
        </div>
      </div>
    </>
  );
}
