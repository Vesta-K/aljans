import { useState } from "react";
import modulTowers from "../../../content/modulTowers/modulTowers";
import { v4 as uuidv4 } from "uuid";
import lenta from "../../../../public/Images/pngwing.com (5).png";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

export default function ModulsTowers() {
  const [category, setCategory] = useState("Все");
  const sortByDate = modulTowers
    .sort((a, b) => {
      return a.date.getTime() - b.date.getTime();
    })
    .reverse();
  return (
    <div className="w-fill h-fit pt-20 lg:pt-32">
      <div className="">
        <div className="w-full grid gap-y-3 sm:grid-flow-col">
          <button
            id={"Все"}
            onClick={e => {
              setCategory(e.currentTarget.id);
            }}
            className="font-thin md:text-xl text-base-gray text-base lg:text-2xl sm:border-r border-base-gray border-opacity-20 transform transition duration-200 hover:scale-110 hover:bg-radialGrad"
          >
            Все
          </button>
          <button
            id="Здоровье"
            onClick={e => {
              setCategory(e.currentTarget.id);
            }}
            className="font-thin md:text-xl text-base-gray text-base lg:text-2xl sm:border-r border-base-gray border-opacity-20 transform transition duration-200 hover:scale-110 hover:bg-radialGrad"
          >
            Здоровье
          </button>
          <button
            id={"Образование"}
            onClick={e => {
              setCategory(e.currentTarget.id);
            }}
            className="font-thin md:text-xl text-base-gray text-base lg:text-2xl sm:border-r border-base-gray border-opacity-20 transform transition duration-200 hover:scale-110 hover:bg-radialGrad"
          >
            Образование
          </button>
          <button
            id={"Спорт"}
            onClick={e => {
              setCategory(e.currentTarget.id);
            }}
            className="font-thin md:text-xl text-base-gray text-base lg:text-2xl sm:border-r border-base-gray border-opacity-20 transform transition duration-200 hover:scale-110 hover:bg-radialGrad"
          >
            Спорт
          </button>
          <button
            id={"Культура"}
            onClick={e => {
              setCategory(e.currentTarget.id);
            }}
            className="font-thin md:text-xl text-base-gray text-base lg:text-2xl transform transition duration-200 hover:scale-110 hover:bg-radialGrad"
          >
            Культура
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10 p-5 sm:p-20">
          {category === "Все"
            ? sortByDate.map(item => (
                <Card
                  key={uuidv4()}
                  className="max-w-[28rem] h-[500px] sm:h-[598px] overflow-hidden rounded-none bg-base-gray flex justify-between"
                >
                  <CardHeader
                    color="transparent"
                    className="m-0 basis-6/12 rounded-none"
                  >
                    <img
                      className="h-full w-full object-cover transition duration-500 hover:scale-110"
                      src={`${
                        item.img
                          ? item.img
                          : "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                      }`}
                      alt="4 колпачка"
                    />
                  </CardHeader>
                  <CardBody className="basis-4/12">
                    <Typography
                      variant="h4"
                      color="blue-gray"
                      className="font-regular text-gray-800 w-full text-xl sm:text-2xl"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="lead"
                      color="gray"
                      className="mt-3 font-thin text-base sm:text-xl"
                    >
                      {item.description
                        ? item.description
                        : "С другой стороны выбранный нами инновационный путь играет важную роль в формировании экономической целесообразности принимаемых изменений."}
                    </Typography>
                  </CardBody>
                  <CardFooter className="flex pt-0 sm:px-6 sm:py-0 justify-between items-center basis-2/12">
                    <Typography className="relative w-28 h-9 p-0 overflow-clip font-regular hover:text-base-zinc hover:cursor-pointer flex justify-center items-center text-sm sm:text-base sm:tracking-wider">
                      <img
                        src={lenta}
                        className="absolute top-2 rotate-12"
                      ></img>
                      Подробнее...
                    </Typography>
                    <div className="flex flex-row gap-2">
                      <Typography className="font-thin text-right text-sm sm:text-base sm:tracking-wider">
                        {item.date.toLocaleString("ru-RU", {
                          year: "numeric",
                          month: "numeric",
                          day: "numeric",
                        })}
                      </Typography>
                      <Typography className="font-regular text-right text-sm text-base-zinc sm:text-base sm:tracking-wider">
                        {item.category}
                      </Typography>
                    </div>
                  </CardFooter>
                </Card>
              ))
            : sortByDate
                .filter(
                  (element: { category: string }) =>
                    element.category === category
                )
                .map(item => (
                  <Card
                    key={uuidv4()}
                    className="max-w-[28rem] h-[500px] sm:h-[598px] overflow-hidden rounded-none bg-base-gray flex justify-between"
                  >
                    <CardHeader
                      color="transparent"
                      className="m-0 basis-6/12 rounded-none"
                    >
                      <img
                        className="h-full w-full object-cover transition duration-500 hover:scale-110"
                        src={`${
                          item.img
                            ? item.img
                            : "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        }`}
                        alt="4 колпачка"
                      />
                    </CardHeader>
                    <CardBody className="basis-4/12">
                      <Typography
                        variant="h4"
                        color="blue-gray"
                        className="font-regular text-gray-800 w-full text-xl sm:text-2xl"
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="lead"
                        color="gray"
                        className="mt-3 font-thin text-base sm:text-xl"
                      >
                        {item.description
                          ? item.description
                          : "С другой стороны выбранный нами инновационный путь играет важную роль в формировании экономической целесообразности принимаемых изменений."}
                      </Typography>
                    </CardBody>
                    <CardFooter className="flex pt-0 sm:px-6 sm:py-0 justify-between items-center basis-2/12">
                      <Typography className="relative w-28 h-9 p-0 overflow-clip font-regular hover:text-base-zinc hover:cursor-pointer flex justify-center items-center text-sm sm:text-base sm:tracking-wider">
                        <img
                          src={lenta}
                          className="absolute top-2 rotate-12"
                        ></img>
                        Подробнее...
                      </Typography>
                      <div className="flex flex-row gap-2">
                        <Typography className="font-thin text-right text-sm sm:text-base sm:tracking-wider">
                          {item.date.toLocaleString("ru-RU", {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                          })}
                        </Typography>
                        <Typography className="font-regular text-right text-sm text-base-zinc sm:text-base sm:tracking-wider">
                          {item.category}
                        </Typography>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
        </div>
      </div>
    </div>
  );
}
