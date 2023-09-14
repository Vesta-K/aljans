import { Typography } from "@material-tailwind/react";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <div
      id="hero"
      style={{
        backgroundImage:
          "linear-gradient(0deg, #2F2E33 0%, rgba(47, 46, 51, 0) 100%), url('./Images/537bcd9d7a68711989a5cff4c4c65716.jpg')",
      }}
      className="relative flex justify-center items-center h-screen pt-28 px-4 bg-cover bg-center"
    >
      <div className="mx-auto max-w-full">
        <div className="space-y-5 flex-col justify-center items-center">
          <div className="text-center space-y-4 ">
            <Typography
              as="h1"
              className="font-ultraBold tracking-tight text-[#D5D6D2] text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl bg-gradient-to-r from-[#D5D6D2] to-[#3A5199] bg-clip-text text-transparent"
            >
              МОДУЛЬНЫЕ
            </Typography>
            <Typography
              as="h1"
              className="font-ultraBold tracking-tight text-[#D5D6D2] text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl bg-gradient-to-r from-[#D5D6D2] to-[#3A5199] bg-clip-text text-transparent"
            >
              БЫСТРОВОЗВОДИМЫЕ
            </Typography>
            <Typography
              as="h1"
              className="font-ultraBold tracking-tight text-[#D5D6D2] text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl bg-gradient-to-r from-[#D5D6D2] to-[#3A5199] bg-clip-text text-transparent"
            >
              ЗДАНИЯ
            </Typography>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-28 md:flex-row md:gap-x-28 md:gap-x gap-y-10 ">
          <Link to="calculator">
            <div
              className="font-thin text-[18px] w-52 h-11 tracking-wide bg-[#3A5199] text-[#D5D6D2] flex items-center justify-center transition duration-200
    hover:bg-[#D5D6D2]
    hover:text-[#3A5199]"
            >
              Рассчитать стоимость
            </div>
          </Link>
          <div
            className="font-thin text-[18px] w-52 h-11 tracking-wide bg-[#3A5199] text-[#D5D6D2] flex items-center justify-center transition duration-200
    hover:bg-[#D5D6D2]
    hover:text-[#3A5199]"
          >
            Обратный звонок
          </div>
        </div>
      </div>
    </div>
  );
}
