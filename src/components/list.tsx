import React from "react";

export default function List() {
  return (
    <section className="bg-white w-full py-32 flex items-center">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-black text-4xl mb-10 font-[700]">
          Our Consulting Specialist
        </h1>
        <div className="flex justify-center items-center gap-4">
          <div className="w-3/12 border-2 border-zinc-200 rounded-lg text-black py-7 px-5 flex flex-col hover:bg-sky-600 hover:text-white hover:border-blue-600 cursor-pointer">
            <div className="p-5 bg-[#E6F5FC] max-w-max rounded-full mb-3">
              <img src="/icons/health/virus.png" alt="virus-logo" />
            </div>
            <h1 className="font-bold text-xl mb-2">Covid-19 Test</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit
              viverra amet faucibus.!
            </p>
          </div>
          <div className="w-3/12 border-2 border-zinc-200 rounded-lg text-black py-7 px-5 flex flex-col hover:bg-sky-600 hover:text-white hover:border-blue-600 cursor-pointer">
            <div className="p-5 bg-[#E6F5FC] max-w-max rounded-full mb-3">
              <img src="/icons/health/heart.png" alt="heart-logo" />
            </div>
            <h1 className="font-bold text-xl mb-2">Heart Lungs</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit
              viverra amet faucibus.!
            </p>
          </div>
          <div className="w-3/12 border-2 border-zinc-200 rounded-lg text-black py-7 px-5 flex flex-col hover:bg-sky-600 hover:text-white hover:border-blue-600 cursor-pointer">
            <div className="p-5 bg-[#E6F5FC] max-w-max rounded-full mb-3">
              <img src="/icons/health/food.png" alt="food-logo" />
            </div>
            <h1 className="font-bold text-xl mb-2">Suppliment</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit
              viverra amet faucibus.!
            </p>
          </div>
          <div className="w-3/12 border-2 border-zinc-200 rounded-lg text-black py-7 px-5 flex flex-col hover:bg-sky-600 hover:text-white hover:border-blue-600 cursor-pointer">
            <div className="p-5 bg-[#E6F5FC] max-w-max rounded-full mb-3">
              <img src="/icons/health/mind.png" alt="mind-logo" />
            </div>
            <h1 className="font-bold text-xl mb-2">Mental Health</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit
              viverra amet faucibus.!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
