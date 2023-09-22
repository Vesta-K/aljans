import { Typography } from "@material-tailwind/react";
import { YMaps, Map } from "@pbe/react-yandex-maps";

export default function Contacts() {
  return (
    <div id="contacts" className="relative pt-28 ">
      <figure className="relative w-full lg:w-2/6 ultraXl:w-2/6 h-20 ultraXl:h-28 lg:pt-0.5 lg:pr-8 flex justify-center lg:justify-end items-center bg-base-zinc">
        <Typography
          as="h1"
          className="font-regular text-base-gray text-6xl ultraXl:text-7xl"
        >
          Контакты
        </Typography>
      </figure>
      <section className="w-full pt-14 md:pt-20 flex flex-col md:flex-row justify-center flex-wrap space-y-10 lg:space-y-0">
        <div className="flex flex-col justify-center items-center text-center lg:pl-8 lg:text-left lg:items-start lg:basis-1/3 gap-16">
          <div className="flex flex-col gap-10">
            <Typography
              as="h1"
              className="font-bold text-2xl md:text-3xl ultraXl:text-5xl text-base-gray"
            >
              Контактный телефон
            </Typography>
            <Typography
              as="a"
              href="tel:+78632007308"
              className="font-thin text-2xl md:text-3xl ultraXl:text-5xl text-base-gray"
            >
              +7 (863) 200-73-08
            </Typography>
          </div>
          <div className="flex flex-col gap-10">
            <Typography
              as="h1"
              className="font-bold text-2xl md:text-3xl ultraXl:text-5xl text-base-gray"
            >
              Почта
            </Typography>
            <Typography
              as="a"
              className="font-thin text-2xl md:text-3xl ultraXl:text-5xl text-base-gray"
            >
              sk_alliance@bk.ru
            </Typography>
          </div>
          <div className="flex flex-col gap-10">
            <Typography
              as="h1"
              className="font-bold text-2xl md:text-3xl ultraXl:text-5xl text-base-gray"
            >
              Офис
            </Typography>
            <Typography
              as="a"
              href="https://yandex.ru/maps/-/CDUfaD6K"
              className="font-thin underline underline-offset-8 decoration-solid text-2xl md:text-3xl ultraXl:text-5xl text-base-gray hover:text-base-zinc"
            >
              344056, г. Ростов-на-Дону, пер. Иртышский, №50
            </Typography>
          </div>
          <div className="flex flex-col gap-10">
            <Typography
              as="h1"
              className="font-bold text-2xl md:text-3xl ultraXl:text-5xl text-base-gray"
            >
              Часы работы
            </Typography>
            <Typography
              as="a"
              className="font-thin text-2xl md:text-3xl ultraXl:text-5xl text-base-gray"
            >
              Пн-пт: 09:00 – 18:00
            </Typography>
          </div>
        </div>
        <div
          className="w-full h-96 lg:h-auto lg:basis-2/3 bg-center bg-cover"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #2F2E33 1%, rgba(47, 46, 51, 0) 80%), linear-gradient(180deg, #2F2E33 1%, rgba(47, 46, 51, 0) 80%), linear-gradient(90deg, #2F2E33 1%, rgba(47, 46, 51, 0) 80%), linear-gradient(135deg, #2F2E33 1%, rgba(47, 46, 51, 0) 50%), url(Images/map.png)",
          }}
        ></div>
        <YMaps query={{ apikey: "3393c833-d9af-455e-aeac-c97893c9816d" }}>
          <Map
            className="w-screen h-96"
            defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}
          />
        </YMaps>
      </section>
    </div>
  );
}
