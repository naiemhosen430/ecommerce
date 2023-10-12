"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function MainMav() {
  const [showBox, setShowBox] = useState(false);

  const [menuBox, setMenuBox] = useState(false);

  // onclick hundler

  const closeSubMenu = () => {
    setShowBox(false);
  };

  const toggleMenuBox = () => {
    if (menuBox === true) {
      setMenuBox(false);
    } else {
      setMenuBox(true);
    }
  };
  return (
    <>
      <div className="flex w-screen overflow-hidden z-20 sticky bg-red-950 top-0 justify-center py-4 shadow-md items-center">
        <div class="lg:hidden text-8xl w-9/12">
          <Link href={"/"}>
            <h1 className="px-4 font-bold text-2xl">Name</h1>
          </Link>
        </div>

        {/* main manu list */}
        <ul class="lg:w-8/12 text-center hidden lg:inline-block space-x-6">
          <Link
            className="py-2 px-4 inline-block hover:bg-slate-400 text-white font-bold text-xl"
            onClick={closeSubMenu}
            href={"/"}
          >
            Home
          </Link>

          <Link
            className="py-2 px-4 inline-block hover:bg-slate-400 text-white font-bold text-xl"
            onClick={closeSubMenu}
            href={"/about"}
          >
            About
          </Link>

          <Link
            className="py-2 px-4 inline-block hover:bg-slate-400 text-white font-bold text-xl"
            onClick={closeSubMenu}
            href={"/shop"}
          >
            Shop
          </Link>

          <Link
            className="py-2 px-4 inline-block hover:bg-slate-400 text-white font-bold text-xl"
            onClick={closeSubMenu}
            href={"/contact"}
          >
            Contact
          </Link>
        </ul>

        <ul class="lg:w-4/12 text-center hidden lg:inline-block space-x-8">
          <Link
            className="py-2 px-4 rounded-full inline-block bg-slate-400 text-white font-bold text-xl"
            onClick={closeSubMenu}
            href={"/login"}
          >
            Login
          </Link>

          <button
            className="text-slate-600 p-2 px-4 border border-x-2 border-y-2 border-yellow-800 inline-block"
            type="button"
          >
            0.0 taka
          </button>
        </ul>

        <div class="lg:hidden w-3/12 mx-4 text-right">
          <button
            onClick={toggleMenuBox}
            className="block text-center w-full lg:hidden bg-slate-900 text-white font-bold py-2 px-4 rounded-md"
          >
            Menu
          </button>
        </div>
      </div>

      {menuBox && (
        <ul class="h-screen w-screen z-10 bg-slate-900">
          <button
            className="hover:text-slate-600 block py-2 text-white px-4 font-bold"
            type="button"
          >
            <Link
              onClick={() => {
                closeSubMenu();
                toggleMenuBox();
              }}
              href={"/"}
            >
              Home
            </Link>
          </button>

          <button
            className="hover:text-slate-600 block py-2 text-white px-4 font-bold"
            type="button"
          >
            <Link
              onClick={() => {
                closeSubMenu();
                toggleMenuBox();
              }}
              href={"/about"}
            >
              About
            </Link>
          </button>

          <button
            className="hover:text-slate-600 block py-2 text-white px-4 font-bold"
            type="button"
          >
            <Link
              onClick={() => {
                closeSubMenu();
                toggleMenuBox();
              }}
              href={"/shop"}
            >
              Shop
            </Link>
          </button>

          <button
            className="hover:text-slate-600 block py-2 text-white px-4 font-bold"
            type="button"
          >
            <Link
              onClick={() => {
                closeSubMenu();
                toggleMenuBox();
              }}
              href={"/contact"}
            >
              Contact
            </Link>
          </button>
        </ul>
      )}

      {showBox && <SubMenuBox />}
    </>
  );
}
