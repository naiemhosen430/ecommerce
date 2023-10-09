import React from "react";
import PageHeader from "../components/ReUseableComponents/PageHeader";
import Link from "next/link";
import MainProductField from "../components/Shop/MainProductField";

export default function page() {
  return (
    <>
      <div>
        <div>
          <PageHeader pagename={"shop"} />

          <div className="text-center p-5 py-0">
            <Link
              className="rounded-full bg-white hover:bg-slate-500 hover:text-white inline-block py-2 px-4"
              href={"/"}
            >
              baby cloth
            </Link>
            <Link
              className="rounded-full bg-white hover:bg-slate-500 hover:text-white inline-block py-2 px-4"
              href={"/"}
            >
              baby cloth
            </Link>
            <Link
              className="rounded-full bg-white hover:bg-slate-500 hover:text-white inline-block py-2 px-4"
              href={"/"}
            >
              baby cloth
            </Link>
            <Link
              className="rounded-full bg-white hover:bg-slate-500 hover:text-white inline-block py-2 px-4"
              href={"/"}
            >
              baby cloth
            </Link>
            <Link
              className="rounded-full bg-white hover:bg-slate-500 hover:text-white inline-block py-2 px-4"
              href={"/"}
            >
              baby cloth
            </Link>
          </div>

          <MainProductField />
        </div>
      </div>
    </>
  );
}
