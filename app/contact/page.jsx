import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <div className="lg:w-8/12 w-12/12 m-auto p-4 rounded-md">
        <h1 className="text-center p-4 text-4xl font-bold">Message us!</h1>
        <div className="lg:px-20 p-5">
          <div className="py-2">
            <label
              className="font-bold py-2 block text-3xl text-slate-700"
              htmlFor="name"
            >
              Enter Your Name
            </label>
            <input
              id="name"
              className="bg-slate-300 py-2 px-4 rounded-2xl w-full block"
              type="text"
              placeholder="Enter Your Name"
            />
          </div>

          <div className="py-2">
            <label
              className="font-bold py-2 block text-3xl text-slate-700"
              htmlFor="email"
            >
              Enter Your Email
            </label>
            <input
              itemID="email"
              className="bg-slate-300 py-2 px-4 rounded-2xl w-full block"
              type="email"
              placeholder="Enter Your Email"
            />
          </div>

          <div className="py-2">
            <label
              className="font-bold py-2 block text-3xl text-slate-700"
              htmlFor="email"
            >
              Enter Your Message
            </label>
            <textarea
              itemID="message"
              className="bg-slate-300 py-2 px-4 rounded-2xl w-full block"
              type="text"
              placeholder="Enter Your message"
            ></textarea>
          </div>

          <div className="py-4 text-center">
            <Link
              className="bg-slate-400 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-3xl inline-block"
              href={"/"}
            >
              Send Message
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
