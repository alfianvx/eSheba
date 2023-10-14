import React from "react";

export default function Service() {
  return (
    <section className="bg-white w-full pb-32">
      <div className="max-w-5xl mx-auto flex gap-10">
        <img src="/operasi.png" alt="operasi" />
        <div className="text-black">
          <h1 className="text-black text-4xl mb-7 font-[700]">
            Why You Choose Us?
          </h1>
          <ul className="list-image-checkmark pl-7 pb-5">
            <li className="mb-4 pl-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li className="mb-4 pl-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li className="mb-4 pl-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li className="mb-4 pl-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li className="mb-4 pl-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </ul>
          <a href="" className="text-[#0360D9] font-semibold">
            Learn More <span className="text-lg">&#8594;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
