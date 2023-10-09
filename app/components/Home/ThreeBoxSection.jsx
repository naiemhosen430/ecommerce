import React from "react";
import DoubleProductSlider from "../ReUseableComponents/DoubleProductSlider";
import Link from "next/link";

export default function ThreeBoxSection() {
  return (
    <>
      <div className="lg:marker:grid lg:marker:grid-cols-3 w-10/12 m-auto">
        <div className="lg:col-span-1 p-2">
          <h1 className="text-slate-500 py-2 text-2xl">BEST SELLING</h1>
          <DoubleProductSlider />
        </div>
        <div className="lg:col-span-1 p-2">
          <h1 className="text-slate-500 py-2 text-2xl">FLASH SALE</h1>
          <DoubleProductSlider />
        </div>
        <div className="lg:col-span-1 p-2">
          <div className="w-11/12 m-auto bg-slate-300 p-4 rounded-md hover:bg-slate-300">
            <h1 className="text-2xl py-2">Girls Apparels</h1>
            <h1 className="text-xl py-2">
              Get an extra 50% discount on premium now!
            </h1>
            <Link
              className="text-white rounded-xl bg-slate-500 hover:bg-slate-700 py-2 px-4 inline-block my-4"
              href={"/"}
            >
              Shop Now
            </Link>
          </div>
          <div className="w-11/12 m-auto bg-slate-300 p-4 rounded-md hover:bg-slate-300">
            <h1 className="text-4xl py-2">Boys Apparels</h1>
            <h1 className="text-2xl py-2">Get an extra 50% discount on now!</h1>
            <Link
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
