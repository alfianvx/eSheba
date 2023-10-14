import React from "react";

export default function Vision() {
  return (
    <section className="bg-white w-full py-28">
      <div className="max-w-5xl mx-auto flex items-center gap-10 text-black">
        <div className="w-2/4">
          <h1 className="text-black text-5xl mb-7 font-[700]">
            The Future of <span className="text-[#0360D9]">Quality Health</span>
          </h1>
          <article className="mb-4 text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe nam
            culpa inventore eius nemo alias ipsa molestias pariatur laborum
            repellendus, eos cumque odio qui ipsam tempore repudiandae veniam
            quibusdam animi.
          </article>
          <article className="mb-4 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            et, nobis error eos dolore voluptas quidem non, quasi quis quos
            similique incidunt aliquid ducimus deleniti obcaecati quisquam
            aperiam. Delectus, aut!
          </article>
          <article className="mb-4 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius
            minus ipsum, omnis cupiditate, harum rerum, quaerat blanditiis
            pariatur molestiae quasi provident doloremque.
          </article>
          <a href="" className="text-[#0360D9] font-semibold">
            Learn More <span className="text-lg">&#8594;</span>
          </a>
        </div>
        <div>
          <img src="/talking.png" className="w-full" alt="talking" />
        </div>
      </div>
    </section>
  );
}
