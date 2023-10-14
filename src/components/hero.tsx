import React from "react";
import Label from "./label";

export default function Hero() {
  return (
    <section className="bg-[#E1EEFF] w-full min-h-screen relative -z-20 overflow-hidden pt-28">
      <div className="max-w-5xl max-h-max mx-auto flex my-16">
        <div className="w-2/4 z-20">
          <h1 className="text-5xl font-[700] text-black mb-4 leading-snug tracking-wide">
            Find & Search Your <span className="text-[#0360D9]">Favourite</span>{" "}
            Doctor
          </h1>
          <img
            src="/icons/curved-vector.png"
            alt="curved-line"
            className="absolute top-[300px] w-60"
          />
          <p className="text-black mb-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit
            viverra amet faucibus.
          </p>
          <div className="text-zinc-400 flex w-full justify-between items-center py-2 pl-8 pr-2 bg-slate-50 rounded-full mb-12">
            <div className="flex items-center gap-2">
              <div>
                <img src="/icons/user.png" alt="user-logo" />
              </div>
              <p className="text-black">Doctor's Name</p>
              <div>
                <img src="/icons/arrowhead-bottom.png" alt="arrow-icon" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <img src="/icons/location.png" alt="location-logo" />
              </div>
              <p className="text-black">Location</p>
              <div>
                <img src="/icons/arrowhead-bottom.png" alt="arrow-icon" />
              </div>
            </div>
            <div>
              <img
                src="/icons/search.png"
                alt="search-logo"
                className="bg-[#0360D9] p-4 rounded-full"
              />
            </div>
          </div>
        </div>
        <div>
          <img
            src="/doctor.png"
            alt="doctor"
            className="absolute bottom-0 right-20 w-[58%] z-10"
          />
        </div>
      </div>
      <div className="w-[59%] h-[55%] bg-sky-200 absolute bottom-0 -right-2 rounded-t-full -z-10"></div>
      <Label />
    </section>
  );
}
