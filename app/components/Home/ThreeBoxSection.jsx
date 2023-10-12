"use client";
import React, { useEffect } from "react";
import DoubleProductSlider from "../ReUseableComponents/DoubleProductSlider";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ThreeBoxSection() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);
  return (
    <>
      <div
        className="grid lg:grid-cols-3 lg:w-10/12 w-12/12 m-auto"
        data-aos="fade-up"
      >
        <div className="lg:col-span-1 lg:block hidden p-2" data-aos="fade-left">
          <h1 className="text-black font-bold py-2 w-screen text-2xl">
            BEST-SELLING
          </h1>
          <DoubleProductSlider />
        </div>
        <div
          className="lg:col-span-1 lg:block hidden p-2"
          data-aos="fade-right"
        >
          <h1 className="text-black font-bold py-2 w-screen text-2xl">
            FLASH SALE
          </h1>
          <DoubleProductSlider />
        </div>
        <div className="lg:col-span-1 w-full lg:p-2" data-aos="fade-left">
          <div
            className="lg:w-11/12 w-screen m-auto bg-slate-300 p-4 rounded-md hover:bg-slate-300"
            data-aos="fade-left"
          >
            <h1 className="text-3xl lg:w-full py-2" data-aos="fade-left">
              Girls Apparels
            </h1>
            <h1 className="text-xl lg:w-full py-2" data-aos="fade-right">
              Get an extra 50% discount on premium now!
            </h1>
            <Link
              data-aos="fade-up"
              className="text-white rounded-xl bg-slate-500 hover:bg-slate-700 py-2 px-4 inline-block my-4"
              href={"/"}
            >
              Shop Now
            </Link>
          </div>
          <div
            className="lg:w-11/12 w-screen m-auto bg-slate-300 p-4 rounded-md hover:bg-slate-300"
            data-aos="fade-right"
          >
            <h1 className="text-3xl lg:w-full py-2" data-aos="fade-left">
              Boys Apparels
            </h1>
            <h1 className="text-xl lg:w-full py-2" data-aos="fade-right">
              Get an extra 50% discount on now!
            </h1>
            <Link
              data-aos="fade-up"
              className="text-white rounded-xl bg-slate-500 hover:bg-slate-700 py-2 px-4 inline-block my-4"
              href={"/"}
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
