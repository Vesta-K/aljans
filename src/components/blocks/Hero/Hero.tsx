import { Button, Link } from "react-scroll";

export default function Hero() {
  return (
    <div className="relative isolate flex justify-center items-center h-screen pt-28 px-8 bg-cover bg-center bg-hero-pattern">
      <div className="mx-auto max-w-full">
        <div className="space-y-5 flex-col justify-center items-center">
          <div className="text-center space-y-4 ">
            <h1 className="font-ultraBold tracking-tight text-[#D5D6D2] text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl ">
              МОДУЛЬНЫЕ
            </h1>
            <h1 className="font-ultraBold tracking-tight text-[#D5D6D2] text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl ">
              БЫСТРОВОЗВОДИМЫЕ
            </h1>
            <h1 className="font-ultraBold tracking-tight text-[#D5D6D2] text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl ">
              ЗДАНИЯ
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-28 md:flex-row md:gap-x-28 md:gap-x gap-y-10 ">
          <div
            className="font-thin w-48 h-10 tracking-wide bg-[#3A5199] text-[#D5D6D2] flex items-center justify-center transition duration-200
    hover:bg-[#D5D6D2]
    hover:text-[#3A5199]"
          >
            Рассчитать стоимость
          </div>
          <div
            className="font-thin w-48 h-10 tracking-wide bg-[#3A5199] text-[#D5D6D2] flex items-center justify-center transition duration-200
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
