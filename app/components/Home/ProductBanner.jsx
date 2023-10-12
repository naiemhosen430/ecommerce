"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProductBanner() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div
      data-aos="fade-left"
      className="p-10 my-10 rounded-md bg-slate-700 lg:flex lg:items-start lg:justify-center text-center space-y-4 lg:space-y-0 lg:space-x-8 shadow-md"
    >
      <div
        data-aos="fade-up"
        className="lg:w-5/12 w-12/12 text-center bg-white p-4 pb-20 rounded-md hover:bg-slate-300"
      >
        <h1 className="text-4xl py-4">20% off</h1>
        <h1 className="text-2xl py-4">
          Get an extra 50% discount on premium quality baby clothes. Shop now!
        </h1>
        <Link
          className="text-white text-2xl rounded-xl bg-slate-500 hover:bg-slate-700 py-4 px-8 inline-block my-4"
          href={"/"}
        >
          Shop Now
        </Link>
      </div>
      <div
        data-aos="fade-down"
        className="lg:w-5/12 w-12/12 text-center bg-white p-4 pb-20 rounded-md hover:bg-slate-300"
      >
        <h1 className="text-4xl py-4">50% Off</h1>
        <h1 className="text-2xl py-4">
          Get an extra 50% discount on premium quality baby clothes. Shop now!
        </h1>
        <Link
          className="text-white text-2xl rounded-xl bg-slate-500 hover:bg-slate-700 py-4 px-8 inline-block my-4"
          href={"/"}
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
