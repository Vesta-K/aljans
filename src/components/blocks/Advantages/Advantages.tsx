import advantageCards from "../../../content/advantageCard";
import { Typography } from "@material-tailwind/react";
import { Parallax } from "react-scroll-parallax";
import { v4 as uuidv4 } from "uuid";

export default function Advantages() {
  return (
    <div
      id="advantage"
      className="relative w-full h-max px-4 py-28 flex flex-col justify-center items-center overflow-clip"
    >
      <Typography
        as="h1"
        className="font-thin text-base-gray text-6xl ultraXl:text-7xl"
      >
        Почему у нас?
      </Typography>

      <div
        className="rounded-[0%] w-1/2 h-[200px] absolute right-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 1.00) 0%,rgba(217, 217, 217, 0.00) 100%)",
          transformOrigin: "0 0",
          transform: "rotate(-20.82deg) scale(-5.006, 1.994)",
        }}
      ></div>
      <div
        className="rounded-[0%] w-1/2 h-[200px] absolute inset-y-96 right-96"
        style={{
          background:
            "linear-gradient(180deg, rgba(58, 81, 153, 0.85) 0%,rgba(217, 217, 217, 0.00) 100%)",
          transformOrigin: "0 0",
          transform: "rotate(214.82deg) scale(-6.006, 1.994)",
        }}
      ></div>
      <div
        className="rounded-[0%] md:hidden w-1/2 h-[200px] absolute bottom-52 left-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(58, 81, 153, 0.85) 0%,rgba(217, 217, 217, 0.00) 100%)",
          transformOrigin: "0 0",
          transform: "rotate(214.82deg) scale(-6.006, 1.994)",
        }}
      ></div>
      <Parallax speed={-10}>
        <div className="pt-28 flex flex-row flex-wrap justify-center items-center gap-14">
          {advantageCards.map(({ image, title, description }) => (
            <div
              key={uuidv4()}
              className="min-w-[350px] w-1/4 h-[600px] flex flex-col justify-start items-center py-20 border-1 border-base-zinc shadow-lg bg-base-gray backdrop-blur-lg bg-opacity-80"
            >
              <img src={image} className="w-auto h-32 ultraXl:h-36 mx-auto " />
              <Typography
                as="h3"
                className="font-regular h-1/3 pt-11 px-4 text-3xl ultraXl:text-5xl text-base-zinc text-center"
              >
                {title}
              </Typography>
              <Typography
                as="p"
                className="font-thin h-1/3 text-xl px-10 ultraXl:text-3xl text-base-zinc text-center"
              >
                {description}
              </Typography>
            </div>
          ))}
        </div>
      </Parallax>
    </div>
  );
}
