import React from "react";

export default function List() {
  return (
    <>
      <div className="p-2 rounded-md shadow-md">
        <ul className="space-y-2">
          <li className="block p-2 px-4 hover:bg-slate-500 rounded-full cursor-pointer bg-slate-500 text-white">
            Cetagory one
          </li>
          <li className="block p-2 px-4 rounded-full hover:bg-slate-500 cursor-pointer hover:text-white text-black">
            Cetagory two
          </li>
          <li className="block p-2 px-4 rounded-full hover:bg-slate-500 cursor-pointer hover:text-white text-black">
            Cetagory three
          </li>
          <li className="block p-2 px-4 rounded-full hover:bg-slate-500 cursor-pointer hover:text-white text-black">
            Cetagory four
          </li>
          <li className="block p-2 px-4 rounded-full hover:bg-slate-500 cursor-pointer hover:text-white text-black">
            Cetagory five
          </li>
        </ul>
      </div>
    </>
  );
}
