import React from "react";
import Slider from "./Slider";

export default function InstaFeedSection() {
  return (
    <>
      <div className="w-10/12 m-auto">
        <h1 className="text-slate-500 text-center font-bold p-2 text-2xl">
          INSTAGRAM FEED
        </h1>
        <div className="p-2">
          <Slider item={2} />
        </div>
      </div>
    </>
  );
}
