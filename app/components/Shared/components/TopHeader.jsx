import React from "react";

export default function TopHeader() {
  return (
    <>
      <div class="lg:flex lg:items-center hidden p-2 py-8 bg-slate-300">
        <div class="w-3/12 text-6xl flex space-x-2 items-center justify-center">
          web name
        </div>
        <div class="w-3/12 text-6xl flex space-x-2 items-center justify-center">
          <div className="w-2/12"></div>
          <div className="w-10/12">
            <h1 className="text-xl">+8801700000001</h1>
            <h1 className="text-lg">Phone Number</h1>
          </div>
        </div>
        <div class="w-3/12 text-6xl flex space-x-2 items-center justify-center">
          <div className="w-2/12"></div>
          <div className="w-10/12">
            <h1 className="text-xl">example@gmail.com</h1>
            <h1 className="text-lg">Email Adress</h1>
          </div>
        </div>
        <div class="w-3/12 text-6xl flex space-x-2 items-center justify-center">
          <div className="w-2/12"></div>
          <div className="w-10/12">
            <h1 className="text-xl">Dhaka, Bangladesh</h1>
            <h1 className="text-lg">Adress</h1>
          </div>
        </div>
      </div>
    </>
  );
}
