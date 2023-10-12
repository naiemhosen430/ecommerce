"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FooterOptionBox({ boxheader, options }) {
  const [option, setOption] = useState(options);
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);

  return (
    <>
      <div className="lg:w-3/6 w-12/12">
        <ul>
          <h1 className="text-xl font-bold py-3" data-aos="fade-left">
            {boxheader}
          </h1>
          {option.map((item) => (
            <Link
              data-aos="fade-up"
              href={`/${item}`}
              key={item}
              className="text-slate-700 block py-1"
            >
              {item}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
