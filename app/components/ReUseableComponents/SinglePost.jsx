"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SinglePost() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);
  return (
    <>
      <div
        className="p-4 lg:w-3/12 w-12/12 inline-block rounded-lg hover:bg-slate-300 shadow-md"
        data-aos="fade-up"
      >
        <Image className="w-full h-40" src={""} data-aos="fade-left" />
        <h1
          className="py-5 text-left hover:text-slate-400 text-xl font-bold"
          data-aos="fade-right"
        >
          Eco-Friendly Children's Clothing: 5 Sustainable Brands
        </h1>
        <p className="py-5 text-left text-slate-600" data-aos="fade-left">
          Prioritize sustainability with 5 eco-friendly brands that offer
          organic cotton and recycled materials for children's clothing
        </p>
        <button
          data-aos="fade-up"
          className="py-2 px-4 hover:bg-slate-500 hover:text-white font-bold rounded-full shadow-md inline-block my-5"
        >
          Keep Reading
        </button>
      </div>
    </>
  );
}
