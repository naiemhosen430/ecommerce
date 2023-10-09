"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function FooterOptionBox({ boxheader, options }) {
  const [option, setOption] = useState(options);

  return (
    <>
      <div className="lg:w-3/6 w-12/12">
        <ul>
          <h1 className="text-xl font-bold py-3">{boxheader}</h1>
          {option.map((item) => (
            <Link
              href={`/${item}`}
              key={item}
              className="text-slate-700 block py-2"
            >
              {item}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
