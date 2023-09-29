import socialMedia from "../../../content/SocialMedia";
import { Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function Footer() {
  return (
    <footer className="relative p-6 flex flex-col gap-y-1  justify-between items-center">
      <NavLink to="/aljans/">
        <img
          src="Images/LogoWhite.png"
          className="w-[180px] ultraXl:w-80 cursor-pointer"
        />
      </NavLink>
      <hr className="my-8 w-2/4 border-base-gray opacity-20 " />
      <div className="flex flex-row gap-6">
        {socialMedia.map(item => (
          <a key={uuidv4()} href="#">
            <img src={`${Object.values(item)}`} className="w-9 ultraXl:w-16" />
          </a>
        ))}
      </div>
      <hr className="my-8 w-2/4 border-base-gray opacity-20 " />
      <div className="flex flex-col items-center md:flex-row gap-2 md:gap-10">
        <Typography
          as="a"
          href="#"
          className="font-thin text-xl ultraXl:text-3xl text-base-gray"
        >
          © ООО «Альянс», 2023
        </Typography>
        <Typography
          as="a"
          href="#"
          className="font-thin text-xl ultraXl:text-3xl text-base-gray"
        >
          Политика конфиденциальности
        </Typography>
      </div>
    </footer>
  );
}
