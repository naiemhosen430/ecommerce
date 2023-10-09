import Image from "next/image";
import React from "react";

export default function OurGelary() {
  return (
    <>
      <div className="w-10/12 m-auto">
        <h1 className="text-3xl py-5">Our Gallery</h1>
        <div className="p-5">
          <Image width={0} height={0} className="h-full w-40 inline" src={""} />
          <Image width={0} height={0} className="h-full w-40 inline" src={""} />
          <Image width={0} height={0} className="h-full w-40 inline" src={""} />
          <Image width={0} height={0} className="h-full w-40 inline" src={""} />
          <Image width={0} height={0} className="h-full w-40 inline" src={""} />
          <Image width={0} height={0} className="h-full w-40 inline" src={""} />
          <Image width={0} height={0} className="h-full w-40 inline" src={""} />
        </div>
      </div>
    </>
  );
}
