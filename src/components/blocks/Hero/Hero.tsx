import React from "react";

export default function Hero() {
  return (
    <div
      className="relative isolate pt-24 px-6 lg:px-8 lg:py-60 bg-cover bg-center"
      style={{
        backgroundImage: "url('./Images/537bcd9d7a68711989a5cff4c4c65716.jpg')",
      }}
    >
      <div className="mx-auto max-w-full">
        <div className="text-center space-y-5">
          <h1 className="font-ultraBold tracking-tight text-[#D5D6D2] text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl ">
            МОДУЛЬНЫЕ
          </h1>
          <h1 className="font-ultraBold tracking-tight text-[#D5D6D2] text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl ">
            БЫСТРОВОЗВОДИМЫЕ
          </h1>
          <h1 className="font-ultraBold tracking-tight text-[#D5D6D2] text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl ">
            ЗДАНИЯ
          </h1>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
