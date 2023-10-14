import React from "react";

export default function Header() {
  return (
    <header className="w-full fixed bg-[#E1EEFF] z-50">
      <nav className="max-w-5xl mx-auto grid grid-cols-3 items-center py-8">
        <div id="logo">
          <h1 className="text-3xl font-bold text-black">
            E-<span className="text-[#0360D9]">sheba</span>
          </h1>
        </div>
        <ul className="text-lg text-zinc-900 font-[500] flex gap-8">
          <li className="text-[#0360D9] border-b-2 border-[#0360D9]">
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Application</a>
          </li>
          <li>
            <a href="">History</a>
          </li>
        </ul>
        <div className="flex justify-end gap-2">
          <a
            href=""
            className="py-3 px-7 text-[#0360D9] border-[#0360D9] border-2 rounded-full"
          >
            Log in
          </a>
          <a href="" className="py-3 px-7 bg-[#0360D9] rounded-full">
            Sign up
          </a>
        </div>
      </nav>
    </header>
  );
}
