import React from "react";

export default function Label() {
  return (
    <section className="bg-[#0360D9] w-full ">
      <div className="max-w-5xl mx-auto py-4 z-10">
        <div className="-ml-10 grid grid-cols-3 divide-x w-[55%]">
          <div className="text-center">
            <h1 className="text-5xl font-bold">24/7</h1>
            <span className="text-xs">Online Support</span>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold">100+</h1>
            <span className="text-xs">Doctors</span>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold">1M+</h1>
            <span className="text-xs">Active Patients</span>
          </div>
        </div>
      </div>
    </section>
  );
}
