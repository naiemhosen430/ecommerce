import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <>
      <div
        style={
          {
            // backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdj2H3RU0w83gLn_Hn62o3Oc3ZzueMM6JrBOscIPfHyW3ywUf3DPfKVwLIbOkdu_akEYQ&usqp=CAU)`,
            // backgroundPosition: "center",
            // backgroundAttachment: "fixed",
            // backgroundSize: "100%",
            // backgroundRepeat: "no-repeat",
          }
        }
        className="p-10 py-20 my-10 rounded-md bg-slate-800 shadow-md"
      >
        <div className="w-10/12 m-auto">
          <h1 className="font-bold text-left text-slate-400 lg:text-9xl text-5xl">
            SPECIAL SALE
          </h1>
          <h1 className="font-bold text-left lg:w-6/12 w-12/12 text-slate-400 text-2xl">
            Special promotions for our regular customers. Time is limited.
          </h1>
          <Link
            className="py-4 px-8 lg:w-4/12 w-8/12 bg-slate-600 inline-block hover:bg-slate-300 my-5 hover:text-black text-white font-bold rounded-2xl shadow-md"
            href={"/"}
          >
            Learn More
          </Link>
        </div>
      </div>
    </>
  );
}
