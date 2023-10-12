"use client";
import React, { useEffect } from "react";
import FooterOptionBox from "./components/FooterOptionBox";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);
  return (
    <>
      <div className="lg:flex text-center lg:space-x-4 lg:justify-center lg:items-start">
        <FooterOptionBox
          boxheader={"Cetagory"}
          options={["Food", "Grosery", "Cloths", "Electronics", "Others"]}
        />
        <FooterOptionBox
          boxheader={"Quick Support"}
          options={["About Us", "Pricing", "Delivery", "Event"]}
        />
        <FooterOptionBox
          boxheader={"Contract"}
          options={[
            "Weekly",
            "Monthly",
            "Joy Offer",
            "Special Offer",
            "Golden Offer",
            "Silver Offer",
          ]}
        />
        <FooterOptionBox
          boxheader={"Social Network"}
          options={["Facebook", "Instragram", "Linkedin", "Youtube", "Twitter"]}
        />
        <FooterOptionBox
          boxheader={"Contract"}
          options={[
            "+880170000001",
            "example@gmail.com",
            "+854524121",
            "Dhaka, Bangladesh",
          ]}
        />
      </div>
      <div className="lg:flex p-4 py-10 lg:items-center lg:justify-center">
        <div className="lg:w-7/12 w-12/12 lg:flex lg:items-center lg:justify-center">
          <h1
            className="font-bold lg:w-5/12 text-3xl text-slate-600"
            data-aos="fade-left"
          >
            Naiem E-Commerce
          </h1>
          <h1 className="font-bold lg:w-7/12 text-center px-2 text-lg text-slate-600">
            ©2023Kidify. All rights reserved
          </h1>
        </div>
        <div className="lg:w-5/12 flex items-center space-x-5 justify-center">
          <h1 className="px-4 font-bold w-3/12">Bkash</h1>
          <h1 className="px-4 font-bold w-3/12">Nagad</h1>
          <h1 className="px-4 font-bold w-3/12">Paypal</h1>
          <h1 className="px-4 font-bold w-3/12">Epay</h1>
          <h1 className="px-4 font-bold w-3/12">Uber</h1>
        </div>
      </div>
    </>
  );
}
