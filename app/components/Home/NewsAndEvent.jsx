import React from "react";
import SinglePost from "../ReUseableComponents/SinglePost";

export default function NewsAndEvent() {
  return (
    <>
      <div className="p-2 py-20 text-center">
        <h1 className="text-2xl text-slate-600 p-2">LATEST NEWS AND EVENTS</h1>
        <p className="p-2 text-xl text-slate-600 lg:w-5/12 w-12/12 m-auto">
          Don't miss out on great promotional news or upcoming events in our
          store system
        </p>
      </div>
      <div className="w-10/12 lg:space-x-8 text-center m-auto">
        <SinglePost />
        <SinglePost />
        <SinglePost />
      </div>
    </>
  );
}
