import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0360D9] w-full pt-10 pb-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between mb-28">
          <div className="w-1/3">
            <h1 className="text-2xl mb-10 font-[500]">E-sheba</h1>
            <p className="mb-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
              feugiat lectus risus sed ullamcorper. Auctor semper fermentum
            </p>
            <p className="mb-7">
              volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed.
              Nibh est sit lobortis id semper.
            </p>
            <div className="flex gap-4">
              <img src="/icons/social/fb.png" alt="fb-icon" />
              <img src="/icons/social/ig.png" alt="fb-icon" />
              <img src="/icons/social/twitter.png" alt="fb-icon" />
            </div>
          </div>
          <div className="">
            <h1 className="text-2xl mb-10 font-[500]">Useful Links</h1>
            <a href="" className="block mb-3">
              About Us
            </a>
            <a href="" className="block mb-3">
              Privacy Policy
            </a>
            <a href="" className="block mb-3">
              Our Mission
            </a>
            <a href="" className="block mb-3">
              Our Team
            </a>
          </div>
          <div className="">
            <h1 className="text-2xl mb-10 font-[500]">Address</h1>
            <img src="/maps.png" alt="" />
          </div>
        </div>
        <div className="pt-10 border-t-4 border-zinc-300 flex justify-center items-center gap-1">
          <div>
            <img src="/icons/copyright.png" alt="copy-right-logo" />
          </div>
          <h1 className="text-xl">2022 All Right Reserved</h1>
        </div>
      </div>
    </footer>
  );
}
