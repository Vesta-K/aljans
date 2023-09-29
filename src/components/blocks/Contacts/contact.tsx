import { Typography } from "@material-tailwind/react";
import { Map, Placemark } from "@pbe/react-yandex-maps";
export default function Contact() {
  const positionMap = () => {
    if (window.innerWidth >= 720) {
      return (
        <Map
          className="w-full h-[400px] md:h-[900px]"
          defaultState={{
            center: [47.280469, 39.742099],
            zoom: 18,
          }}
        >
          <Placemark geometry={[47.280406, 39.7434]} />
        </Map>
      );
    } else {
      return (
        <Map
          className="w-full h-[400px] md:h-[900px]"
          defaultState={{
            center: [47.280406, 39.7434],
            zoom: 18,
          }}
        >
          <Placemark geometry={[47.280406, 39.7434]} />
        </Map>
      );
    }
  };

  return (
    <div id="contacts" className="relative w-full h-fit flex flex-col mt-28">
      <div className="z-[5000] md:top-0 md:absolute md:m-20 md:w-1/4 h-3/4 min-w-[320px] shadow-[0px_42px_40px_40px_#2F2E33] md:shadow-[0px_0px_41px_0px_#4A5568]  bg-[#2F2E33]">
        <div className="flex flex-col h-full gap-6 p-8 items-center justify-between md:items-start">
          <Typography as="h3" className="font-regular text-5xl text-base-gray">
            Контакты
          </Typography>
          <div className="flex flex-col items-center md:items-start gap-3 ultraXl:gap-5">
            <Typography
              as="h1"
              className="font-bold text-lg md:text-xl ultraXl:text-4xl text-base-gray"
            >
              Контактный телефон
            </Typography>
            <Typography
              as="a"
              href="tel:+78632007308"
              className="font-thin text-lg md:text-xl hover:text-base-zinc ultraXl:text-4xl text-base-gray"
            >
              +7 (863) 200-73-08
            </Typography>
          </div>
          <div className="flex flex-col items-center md:items-start gap-3 ultraXl:gap-5">
            <Typography
              as="h1"
              className="font-bold text-lg md:text-xl ultraXl:text-4xl text-base-gray"
            >
              Почта
            </Typography>
            <Typography
              as="a"
              href="mailto:sk_alliance@bk.ru"
              className="font-thin text-lg md:text-xl ultraXl:text-4xl hover:text-base-zinc text-base-gray"
            >
              sk_alliance@bk.ru
            </Typography>
          </div>
          <div className="flex flex-col items-center md:items-start gap-3 ultraXl:gap-5">
            <Typography
              as="h1"
              className="font-bold text-lg md:text-xl ultraXl:text-4xl text-base-gray"
            >
              Офис
            </Typography>
            <Typography
              as="a"
              href="https://yandex.ru/maps/-/CDUfaD6K"
              className="font-thin md:text-left text-center text-lg md:text-xl ultraXl:text-4xl text-base-gray hover:text-base-zinc"
            >
              344056, г. Ростов-на-Дону, пер. Иртышский, №50
            </Typography>
          </div>
          <div className="flex flex-col items-center md:items-start gap-3 ultraXl:gap-5">
            <Typography
              as="h1"
              className="font-bold text-lg md:text-xl ultraXl:text-4xl text-base-gray"
            >
              Часы работы
            </Typography>
            <Typography
              as="a"
              className="font-thin text-lg md:text-xl ultraXl:text-4xl text-base-gray"
            >
              Пн-пт: 09:00 – 18:00
            </Typography>
          </div>
        </div>
      </div>
      {positionMap()}
    </div>
  );
}
