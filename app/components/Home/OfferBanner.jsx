import Link from "next/link";
import React from "react";

export default function OfferBanner() {
  return (
    <div className="p-10 my-10 rounded-md bg-slate-700 lg:flex lg:items-start lg:justify-center text-center space-y-4 lg:space-x-8 shadow-md">
      <div className="lg:w-4/12 w-12/12 bg-white p-4 pb-20 rounded-md hover:bg-slate-300">
        <h1 className="text-4xl py-4">Girls Apparels</h1>
        <h1 className="text-2xl py-4">
          Get an extra 50% discount on premium quality baby clothes. Shop now!
        </h1>
        <Link
          className="text-white rounded-xl bg-slate-500 hover:bg-slate-700 py-2 px-4 inline-block my-4"
          href={"/"}
        >
          Shop Now
        </Link>
      </div>
      <div className="lg:w-4/12 w-12/12 bg-white p-4 pb-20 rounded-md hover:bg-slate-300">
        <h1 className="text-4xl py-4">Boys Apparels</h1>
        <h1 className="text-2xl py-4">
          Get an extra 50% discount on premium quality baby clothes. Shop now!
        </h1>
        <Link
          className="text-white rounded-xl bg-slate-500 hover:bg-slate-700 py-2 px-4 inline-block my-4"
          href={"/"}
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
