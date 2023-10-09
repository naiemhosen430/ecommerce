import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <>
      <div className="p-10 my-10 rounded-md bg-slate-700 shadow-md">
        <div className="w-10/12 m-auto md:text-center sm:text-center">
          <h1 className="font-bold text-slate-400 lg:text-9xl text-5xl">SPECIAL SALE</h1>
          <h1 className="font-bold lg:w-6/12 w-12/12 text-slate-400 text-2xl">
            Special promotions for our regular customers. Time is limited.
          </h1>
          <Link
            className="py-2 px-4 bg-slate-600 inline-block hover:bg-slate-300 my-5 text-white font-bold rounded-full shadow-md"
            href={"/"}
          >
            Learn More
          </Link>
        </div>
      </div>
    </>
  );
}
