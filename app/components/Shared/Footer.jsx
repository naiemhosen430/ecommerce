import React from "react";
import FooterOptionBox from "./components/FooterOptionBox";

export default function Footer() {
  return (
    <>
      <div className="lg:flex text-center lg:space-x-4 lg:justify-center lg:items-start">
        <FooterOptionBox
          boxheader={"Contract"}
          options={[
            "option one",
            "option two",
            "option three",
            "option four",
            "option five",
          ]}
        />
        <FooterOptionBox
          boxheader={"Contract"}
          options={[
            "option one",
            "option two",
            "option three",
            "option four",
            "option five",
          ]}
        />
        <FooterOptionBox
          boxheader={"Contract"}
          options={[
            "option one",
            "option two",
            "option three",
            "option four",
            "option five",
          ]}
        />
        <FooterOptionBox
          boxheader={"Contract"}
          options={[
            "option one",
            "option two",
            "option three",
            "option four",
            "option five",
          ]}
        />
        <FooterOptionBox
          boxheader={"Contract"}
          options={[
            "option one",
            "option two",
            "option three",
            "option four",
            "option five",
          ]}
        />
      </div>
      <div className="lg:flex p-4 py-10 lg:items-center lg:justify-center">
        <div className="lg:w-7/12 w-12/12 flex items-center justify-center">
          <h1 className="font-bold w-5/12 text-3xl text-slate-600">
            Naiem E-Commerce
          </h1>
          <h1 className="font-bold w-7/12 text-center px-2 text-lg text-slate-600">
            ©2023Kidify. All rights reserved
          </h1>
        </div>
        <div className="w-5/12 flex items-center justify-center">
          <h1 className="px-4 font-bold w-3/12">Logo One</h1>
          <h1 className="px-4 font-bold w-3/12">Logo One</h1>
          <h1 className="px-4 font-bold w-3/12">Logo One</h1>
          <h1 className="px-4 font-bold w-3/12">Logo One</h1>
          <h1 className="px-4 font-bold w-3/12">Logo One</h1>
        </div>
      </div>
    </>
  );
}
