import React from "react";

export default function Reviews() {
  return (
    <section className="bg-[#E1EEFF] w-full py-36">
      <div className="max-w-5xl mx-auto flex justify-between items-center gap-10">
        <div className="text-black w-2/4">
          <h1 className="text-black text-5xl mb-7 font-[700]">
            What Our <span className="text-[#0360D9]">Member's Saying</span>{" "}
            About Us
          </h1>
          <p className="mb-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            quasi accusamus tempora architecto exercitationem natus officiis
            officia.
          </p>
          <div className="flex items-center gap-10">
            <div className="flex">
              <div className="w-12 h-12 rounded-full z-30 border-2 border-white">
                <img src="/icons/users/1.png" alt="user-avatar" />
              </div>
              <div className="w-12 h-12 rounded-full -ml-3 z-30 border-2 border-white">
                <img src="/icons/users/2.png" alt="user-avatar" />
              </div>
              <div className="w-12 h-12 rounded-full -ml-3 z-30 border-2 border-white">
                <img src="/icons/users/3.png" alt="user-avatar" />
              </div>
              <div className="w-12 h-12 rounded-full -ml-3 z-30 border-2 border-white">
                <img src="/icons/users/4.png" alt="user-avatar" />
              </div>
              <div className="w-12 h-12 rounded-full -ml-3 z-30 border-2 border-white">
                <img src="/icons/users/5.png" alt="user-avatar" />
              </div>
              <div className="w-12 h-12 rounded-full -ml-3 z-30 border-2 border-white">
                <img src="/icons/users/6.png" alt="user-avatar" />
              </div>
            </div>
            <h3 className="font-semibold">100+ Reviews</h3>
          </div>
        </div>
        <div className="w-2/4 bg-white p-10 text-black border-2 border-zinc-200 rounded-xl">
          <div className="flex justify-between mb-10">
            <div className="flex gap-3">
              <div className="w-14 h-14 rounded-full -ml-3 z-30 border-2 border-white">
                <img src="/icons/users/3.png" alt="user-avatar" />
              </div>
              <div>
                <h1 className="font-semibold text-lg">Jane Cooper</h1>
                <span className="text-sm">12/4/17</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-7 h-7 rounded-full">
                <img src="/icons/star.png" alt="star-icon" />
              </div>
              <div className="w-7 h-7 rounded-full">
                <img src="/icons/star.png" alt="star-icon" />
              </div>
              <div className="w-7 h-7 rounded-full">
                <img src="/icons/star.png" alt="star-icon" />
              </div>
              <div className="w-7 h-7 rounded-full">
                <img src="/icons/star.png" alt="star-icon" />
              </div>
              <div className="w-7 h-7 rounded-full">
                <img src="/icons/star.png" alt="star-icon" />
              </div>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium magni in veniam iste, neque consectetur at similique,
              sed dolore laudantium et debitis? Veniam cupiditate quibusdam
              laborum sint odit iure distinctio!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
