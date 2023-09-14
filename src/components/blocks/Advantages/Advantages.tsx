import advantageCards from "../../../content/advantageCard";
import { Typography } from "@material-tailwind/react";

export default function Advantages() {
  return (
    <div className="relative p-4">
      <div className="md:p-20 flex flex-row flex-wrap justify-center gap-14">
        {advantageCards.map(({ image, title, description }) => (
          <div className="min-w-[328px] w-1/4 min-h-[560px] gap-20 bg-base-gray">
            <img src={image} className="w-24 mx-auto mt-20" />
            <Typography
              as="h3"
              className="font-regular h-20 mt-20 px-5 text-3xl text-base-zinc text-center"
            >
              {title}
            </Typography>
            <Typography
              as="p"
              className="font-thin text-xl px-5 text-base-zinc text-center"
            >
              {description}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
