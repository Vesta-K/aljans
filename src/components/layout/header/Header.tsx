import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import React from "react";
import { Link, scroller } from "react-scroll";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const menuButtonsName = [
  { modulTowers: "Модульные здания" },
  { usProjects: "Наши проекты" },
  { advantage: "Преимущества" },
  { calculator: "Калькулятор" },
  { contacts: "Контакты" },
];

export default function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);
  const handlerCloseNav = () => {
    if (openNav) {
      return setOpenNav(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const navList = (
    <ul className="h-fit mb-4 mt-4 flex flex-col gap-y-6 lg:mb-0 lg:mt-0 lg:flex-row items-center lg:gap-6 text-[#D5D6D2]">
      {menuButtonsName.map(name => {
        if (Object.keys(name)[0] === "modulTowers") {
          return (
            <NavLink key={uuidv4()} to="/aljans/moduls">
              <Typography
                onClick={handlerCloseNav}
                as="a"
                variant="small"
                color="inherit"
                className="p-1 font-thin text-[22px] xl:text-[20px] ultraXl:text-[28px] cursor-pointer text-center tracking-wider transform transition duration-200 hover:scale-110 hover:bg-radialGrad"
              >
                {Object.values(name)}
              </Typography>
            </NavLink>
          );
        }
        return (
          <Link key={uuidv4()} to={Object.keys(name)[0]} smooth={true}>
            <Typography
              onClick={() => {
                handlerCloseNav();
                setTimeout(() => {
                  scroller.scrollTo(Object.keys(name)[0], { smooth: true });
                });
              }}
              as="p"
              variant="small"
              color="inherit"
              className="p-1 font-thin text-[22px] xl:text-[20px] ultraXl:text-[28px] cursor-pointer text-center tracking-wider transform transition duration-200 hover:scale-110 hover:bg-radialGrad"
            >
              <NavLink to="/aljans/">{Object.values(name)}</NavLink>
            </Typography>
          </Link>
        );
      })}
    </ul>
  );

  return (
    <Navbar className="fixed top-0 z-10 border-none rounded-none h-max ultraXl:h-24 max-w-full bg-[rgba(47,46,51,0.90)] py-2 px-4 lg:px-8 lg:py-4">
      <div className="h-full flex items-center justify-between">
        <Link to="hero" smooth="true">
          <NavLink to="/aljans/">
            <img
              src="Images/LogoWhite.png"
              className="w-[150px] ultraXl:w-52 cursor-pointer"
            />
          </NavLink>
        </Link>

        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav} className="h-fit flex flex-col items-center">
        {navList}
      </Collapse>
    </Navbar>
  );
}
