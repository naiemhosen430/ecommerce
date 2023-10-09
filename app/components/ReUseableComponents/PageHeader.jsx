"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function PageHeader({ pagename }) {
  const [pageName, setPageName] = useState(pagename);
  return (
    <>
      <div className="text-center py-5 px-5">
        <h1 className="font-bold py-5 text-5xl">{pagename.toUpperCase()}</h1>
        <div className="flex items-center space-x-4 justify-center text-xl">
          <Link className="text-slate-600 inline-block" href={"/"}>
            Home
          </Link>
          <h1 className="text-slate-600 inline-block">{pagename}</h1>
        </div>
      </div>
    </>
  );
}
