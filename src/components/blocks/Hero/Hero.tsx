import { Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import ModalCallback from "../../ui/modalCallback";

export default function Hero() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div
      id="hero"
      style={{
        backgroundImage:
          "linear-gradient(0deg, #2F2E33 0%, rgba(47, 46, 51, 0) 100%), url('./Images/537bcd9d7a68711989a5cff4c4c65716.jpg')",
      }}
      className="relative flex justify-center items-center h-screen pt-28 px-4 bg-cover bg-center"
    >
      <div className="mx-auto max-w-full ultraXl:space-y-44">
        <div className="space-y-5 flex-col justify-center items-center">
          <Parallax speed={-10}>
            <div className="text-center space-y-4">
              <Typography
                as="h1"
                className="font-ultraBold tracking-tight text-[#D5D6D2] text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl ultraXl:text-[12rem] bg-gradient-to-r from-[#D5D6D2] to-[#3A5199] bg-clip-text text-transparent"
              >
                МОДУЛЬНЫЕ
              </Typography>
              <Typography
                as="h1"
                className="font-ultraBold tracking-tight text-[#D5D6D2] text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl ultraXl:text-[12rem] bg-gradient-to-r from-[#D5D6D2] to-[#3A5199] bg-clip-text text-transparent"
              >
                БЫСТРОВОЗВОДИМЫЕ
              </Typography>
              <Typography
                as="h1"
                className="font-ultraBold tracking-tight text-[#D5D6D2] text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl ultraXl:text-[12rem] bg-gradient-to-r from-[#D5D6D2] to-[#3A5199] bg-clip-text text-transparent"
              >
                ЗДАНИЯ
              </Typography>
            </div>
          </Parallax>
        </div>
        <Parallax speed={-6}>
          <div className="flex flex-col items-center justify-center pt-28 md:flex-row md:gap-x-28 gap-y-10 ultraXl:gap-x-44 ">
            <Button
              className="font-thin rounded-none text-[14px] ultraXl:text-[16px] w-52 h-11 p-0 ultraXl:w-64 ultraXl:h-16 tracking-wide bg-[#3A5199] text-[#D5D6D2] text-center transition duration-200
    hover:bg-[#D5D6D2]
    hover:text-[#3A5199]"
            >
              Рассчитать стоимость
            </Button>
            <Button
              className="font-thin rounded-none text-[14px] ultraXl:text-[16px] w-52 h-11  ultraXl:w-64 ultraXl:h-16 tracking-wide bg-[#3A5199] text-[#D5D6D2] text-center transition duration-200
    hover:bg-[#D5D6D2]
    hover:text-[#3A5199]"
              onClick={handleOpen}
            >
              Обратный звонок
            </Button>
            <ModalCallback open={open} handleOpen={handleOpen} />
          </div>
        </Parallax>
      </div>
    </div>
  );
}
