import React from "react";

export default function Subscribe() {
  return (
    <section className=" bg-white w-full pt-10 pb-20">
      <div className="max-w-5xl mx-auto bg-[#0360D9] p-20 rounded-xl">
        <h1 className="text-4xl text-center mb-5 font-[500]">
          Subsribe To Our Newsletter
        </h1>
        <div className="bg-white w-full p-2 rounded-full flex justify-end">
          <span className="text-xl bg-[#0360D9] w-14 h-14 rounded-full flex items-center justify-center">
            &#8594;
          </span>
        </div>
      </div>
    </section>
  );
}
