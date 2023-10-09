"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function FilterBar() {
  const [cetaBox, setCetaBox] = useState(false);
  const [priceaBox, setPriceaBox] = useState(false);
  const [SizeBox, setSizeBox] = useState(false);
  const [brandBox, setBrandBox] = useState(false);

  // hundle onclick
  const cetaBoxActi = () => {
    setBrandBox(false);
    setSizeBox(false);
    setPriceaBox(false);
    if (cetaBox === false) {
      setCetaBox(true);
    } else {
      setCetaBox(false);
    }
  };
  const priceBoxActi = () => {
    setBrandBox(false);
    setSizeBox(false);
    setCetaBox(false);
    if (priceaBox === false) {
      setPriceaBox(true);
    } else {
      setPriceaBox(false);
    }
  };
  const sizeBoxActi = () => {
    setBrandBox(false);
    setPriceaBox(false);
    setCetaBox(false);
    if (SizeBox === false) {
      setSizeBox(true);
    } else {
      setSizeBox(false);
    }
  };
  const brandBoxActi = () => {
    setCetaBox(false);
    setSizeBox(false);
    setPriceaBox(false);
    if (brandBox === false) {
      setBrandBox(true);
    } else {
      setBrandBox(false);
    }
  };
  return (
    <>
      <h1 className="text-3xl font-bold py-2">FILTER ITEM</h1>
      <div className="flex items-center justify-center lg:block space-x-2">
        {/* cetagory section start */}
        <div>
          <button
            onClick={cetaBoxActi}
            className="text-xl font-bold hover:bg-gray-600 hover:text-white p-2 py-1 rounded-md"
            type="button"
          >
            Categories
          </button>
          <div className="hidden lg:block">
            <button className="w-full text-left block py-2 px-4 rounded-md hover:bg-slate-600 font-bold hover:text-white">
              Cetegory one
            </button>
            <button className="w-full text-left block py-2 px-4 rounded-md hover:bg-slate-600 font-bold hover:text-white">
              Cetegory two
            </button>
            <button className="w-full text-left block py-2 px-4 rounded-md hover:bg-slate-600 font-bold hover:text-white">
              Cetegory three
            </button>
            <button className="w-full text-left block py-2 px-4 rounded-md hover:bg-slate-600 font-bold hover:text-white">
              Cetegory four
            </button>
            <button className="w-full text-left block py-2 px-4 rounded-md hover:bg-slate-600 font-bold hover:text-white">
              Cetegory five
            </button>
          </div>
        </div>
        {/* cetagory section end */}

        {/* price section start */}
        <div>
          <button
            onClick={priceBoxActi}
            className="text-xl font-bold hover:bg-gray-600 hover:text-white p-2 py-1 rounded-md"
            type="button"
          >
            Price
          </button>

          <div className="py-2 space-y-2 hidden lg:block">
            <div className="flex">
              <button className="w-9/12 block text-left">$100-$200</button>
              <h1 className="w-3/12">20</h1>
            </div>
            <div className="flex">
              <button className="w-9/12 block text-left">$100-$200</button>
              <h1 className="w-3/12">20</h1>
            </div>
            <div className="flex">
              <button className="w-9/12 block text-left">$100-$200</button>
              <h1 className="w-3/12">20</h1>
            </div>
            <div className="flex">
              <button className="w-9/12 block text-left">$100-$200</button>
              <h1 className="w-3/12">20</h1>
            </div>
            <div className="flex">
              <button className="w-9/12 block text-left">$100-$200</button>
              <h1 className="w-3/12">20</h1>
            </div>
          </div>
        </div>
        {/* price section end */}

        {/* size section start */}
        <div class="space-x-2 py-4 ">
          <button
            onClick={sizeBoxActi}
            className="text-xl font-bold hover:bg-gray-600 hover:text-white p-2 py-1 rounded-md"
            type="button"
          >
            Size
          </button>

          <div className="hidden lg:block">
            <div>
              <label class="font-bold py-1 px-2 space-y-2 space-x-2 flex bg-slate-300 items-center justify-center rounded-full cursor-pointer">
                <input
                  className="w-5 inline-block h-5 rounded-full"
                  type="radio"
                  id="xs"
                  name="mode"
                  value="XS"
                  class="hidden"
                />
                <span className="text-lg inline-block">XS</span>
              </label>
            </div>

            <div className="inline-block">
              <label class="font-bold py-1 px-2 space-y-2 space-x-2 flex bg-slate-300 items-center justify-center rounded-full cursor-pointer">
                <input
                  className="w-5 inline-block h-5 rounded-full"
                  type="radio"
                  id="s"
                  name="mode"
                  value="s"
                  class="hidden"
                />
                <span className="text-lg inline-block">S</span>
              </label>
            </div>

            <div className="inline-block">
              <label class="font-bold py-1 px-2 space-y-2 space-x-2 flex bg-slate-300 items-center justify-center rounded-full cursor-pointer">
                <input
                  className="w-5 inline-block h-5 rounded-full"
                  type="radio"
                  id="m"
                  name="mode"
                  value="m"
                  class="hidden"
                />
                <span className="text-lg inline-block">M</span>
              </label>
            </div>

            <div className="inline-block">
              <label class="font-bold py-1 px-2 space-y-2 space-x-2 flex bg-slate-300 items-center justify-center rounded-full cursor-pointer">
                <input
                  className="w-5 inline-block h-5 rounded-full"
                  type="radio"
                  id="xl"
                  name="mode"
                  value="xl"
                  class="hidden"
                />
                <span className="text-lg inline-block">XL</span>
              </label>
            </div>

            <div className="inline-block">
              <label class="font-bold py-1 px-2 space-y-2 space-x-2 flex bg-slate-300 items-center justify-center rounded-full cursor-pointer">
                <input
                  className="w-5 inline-block h-5 rounded-full"
                  type="radio"
                  id="xxl"
                  name="mode"
                  value="xxl"
                  class="hidden"
                />
                <span className="text-lg inline-block">XXL</span>
              </label>
            </div>
          </div>
        </div>
        {/* size section end */}

        {/* Brand section start */}
        <div class="space-x-2 py-4 ">
          <button
            onClick={brandBoxActi}
            className="text-xl font-bold hover:bg-gray-600 hover:text-white p-2 py-1 rounded-md"
            type="button"
          >
            Brand
          </button>

          <div className="hidden lg:block">
            <label class="font-bold py-1 px-2 flex items-center rounded-full cursor-pointer">
              <input
                className="w-2/12 block h-5 rounded-full"
                type="radio"
                id="brand1"
                name="mode"
                value="brand1"
              />
              <span className="text-lg w-10/12 block">Brand1</span>
            </label>

            <label class="font-bold py-1 px-2 flex items-center rounded-full cursor-pointer">
              <input
                className="w-2/12 block h-5 rounded-full"
                type="radio"
                id="brand2"
                name="mode"
                value="brand2"
              />
              <span className="text-lg w-10/12 block">Brand2</span>
            </label>

            <label class="font-bold py-1 px-2 flex items-center rounded-full cursor-pointer">
              <input
                className="w-2/12 block h-5 rounded-full"
                type="radio"
                id="brand3"
                name="mode"
                value="brand3"
              />
              <span className="text-lg w-10/12 block">Brand3</span>
            </label>

            <label class="font-bold py-1 px-2 flex items-center rounded-full cursor-pointer">
              <input
                className="w-2/12 block h-5 rounded-full"
                type="radio"
                id="brand4"
                name="mode"
                value="brand4"
              />
              <span className="text-lg w-10/12 block">Brand4</span>
            </label>

            <label class="font-bold py-1 px-2 flex items-center rounded-full cursor-pointer">
              <input
                className="w-2/12 block h-5 rounded-full"
                type="radio"
                id="brand5"
                name="mode"
                value="brand5"
              />
              <span className="text-lg w-10/12 block">Brand5</span>
            </label>
          </div>
        </div>
        {/* Brand section end */}
      </div>

      <div>
        {cetaBox && (
          <div>
            <button className="w-full text-left block py-2 px-4 rounded-md hover:bg-slate-600 font-bold hover:text-white">
              Cetegory one
            </button>
            <button className="w-full text-left block py-2 px-4 rounded-md hover:bg-slate-600 font-bold hover:text-white">
              Cetegory two
            </button>
            <button className="w-full text-left block py-2 px-4 rounded-md hover:bg-slate-600 font-bold hover:text-white">
              Cetegory three
            </button>
            <button className="w-full text-left block py-2 px-4 rounded-md hover:bg-slate-600 font-bold hover:text-white">
              Cetegory four
            </button>
            <button className="w-full text-left block py-2 px-4 rounded-md hover:bg-slate-600 font-bold hover:text-white">
              Cetegory five
            </button>
          </div>
        )}
        {priceaBox && (
          <div className="py-2 space-y-2">
            <div className="flex">
              <button className="w-9/12 block text-left">$100-$200</button>
              <h1 className="w-3/12">20</h1>
            </div>
            <div className="flex">
              <button className="w-9/12 block text-left">$100-$200</button>
              <h1 className="w-3/12">20</h1>
            </div>
            <div className="flex">
              <button className="w-9/12 block text-left">$100-$200</button>
              <h1 className="w-3/12">20</h1>
            </div>
            <div className="flex">
              <button className="w-9/12 block text-left">$100-$200</button>
              <h1 className="w-3/12">20</h1>
            </div>
            <div className="flex">
              <button className="w-9/12 block text-left">$100-$200</button>
              <h1 className="w-3/12">20</h1>
            </div>
          </div>
        )}
        {SizeBox && (
          <div>
            <div className="inline-block">
              <label class="font-bold py-1 px-2 space-y-2 space-x-2 flex bg-slate-300 items-center justify-center rounded-full cursor-pointer">
                <input
                  className="w-5 inline-block h-5 rounded-full"
                  type="radio"
                  id="xs"
                  name="mode"
                  value="xs"
                  class="hidden"
                />
                <span className="text-lg inline-block">XS</span>
              </label>
            </div>

            <div className="inline-block">
              <label class="font-bold py-1 px-2 space-y-2 space-x-2 flex bg-slate-300 items-center justify-center rounded-full cursor-pointer">
                <input
                  className="w-5 inline-block h-5 rounded-full"
                  type="radio"
                  id="s"
                  name="mode"
                  value="s"
                  class="hidden"
                />
                <span className="text-lg inline-block">S</span>
              </label>
            </div>

            <div className="inline-block">
              <label class="font-bold py-1 px-2 space-y-2 space-x-2 flex bg-slate-300 items-center justify-center rounded-full cursor-pointer">
                <input
                  className="w-5 inline-block h-5 rounded-full"
                  type="radio"
                  id="m"
                  name="mode"
                  value="m"
                  class="hidden"
                />
                <span className="text-lg inline-block">M</span>
              </label>
            </div>

            <div className="inline-block">
              <label class="font-bold py-1 px-2 space-y-2 space-x-2 flex bg-slate-300 items-center justify-center rounded-full cursor-pointer">
                <input
                  className="w-5 inline-block h-5 rounded-full"
                  type="radio"
                  id="xl"
                  name="mode"
                  value="xl"
                  class="hidden"
                />
                <span className="text-lg inline-block">XL</span>
              </label>
            </div>

            <div className="inline-block">
              <label class="font-bold py-1 px-2 space-y-2 space-x-2 flex bg-slate-300 items-center justify-center rounded-full cursor-pointer">
                <input
                  className="w-5 inline-block h-5 rounded-full"
                  type="radio"
                  id="xxl"
                  name="mode"
                  value="xxl"
                  class="hidden"
                />
                <span className="text-lg inline-block">XXL</span>
              </label>
            </div>
          </div>
        )}
        {brandBox && (
          <div>
            <label class="font-bold py-1 px-2 flex items-center rounded-full cursor-pointer">
              <input
                className="w-2/12 block h-5 rounded-full"
                type="radio"
                id="brand1"
                name="mode"
                value="brand1"
              />
              <span className="text-lg w-10/12 block">Brand1</span>
            </label>

            <label class="font-bold py-1 px-2 flex items-center rounded-full cursor-pointer">
              <input
                className="w-2/12 block h-5 rounded-full"
                type="radio"
                id="brand2"
                name="mode"
                value="brand2"
              />
              <span className="text-lg w-10/12 block">Brand2</span>
            </label>

            <label class="font-bold py-1 px-2 flex items-center rounded-full cursor-pointer">
              <input
                className="w-2/12 block h-5 rounded-full"
                type="radio"
                id="brand3"
                name="mode"
                value="brand3"
              />
              <span className="text-lg w-10/12 block">Brand3</span>
            </label>

            <label class="font-bold py-1 px-2 flex items-center rounded-full cursor-pointer">
              <input
                className="w-2/12 block h-5 rounded-full"
                type="radio"
                id="brand4"
                name="mode"
                value="brand4"
              />
              <span className="text-lg w-10/12 block">Brand4</span>
            </label>

            <label class="font-bold py-1 px-2 flex items-center rounded-full cursor-pointer">
              <input
                className="w-2/12 block h-5 rounded-full"
                type="radio"
                id="brand5"
                name="mode"
                value="brand5"
              />
              <span className="text-lg w-10/12 block">Brand5</span>
            </label>
          </div>
        )}
      </div>
    </>
  );
}
