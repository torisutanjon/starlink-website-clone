import { useNavContext } from "../hooks";
import { useEffect } from "react";
import { hamburger } from "../assets";

const TopNavDesktop = ({ indexProp }: { indexProp: number }) => {
  const navlist = [
    {
      name: "RESIDENTIAL",
      index: 0,
    },
    {
      name: "BUSINESS",
      index: 1,
    },
    {
      name: "ROAM",
      index: 2,
    },
    {
      name: "MOBILITY",
      index: 3,
    },
    {
      name: "MARITIME",
      index: 4,
    },
    {
      name: "AVIATION",
      index: 5,
    },
    {
      name: "IOT",
      index: 6,
    },
    {
      name: "TECHNOLOGY",
      index: 7,
    },
    {
      name: "SUPPORT",
      index: 8,
    },
  ];

  const { navIndex, setNavIndex, setIsDesktopOpen } = useNavContext();

  useEffect(() => {
    setNavIndex(indexProp);
  }, [indexProp, navIndex, setNavIndex]);

  return (
    <div className="absolute top-8 left-0 h-12 w-full hidden flex-row items-center justify-between z-[1] lg:flex">
      <a
        href="#"
        className="ml-10 text-2xl text-white font-bold tracking-[5px] xl:ml-20"
      >
        STARLINK
      </a>
      <div className="h-full w-4/6 flex flex-row items-center justify-between xl:w-3/5">
        {navlist.map((item, key) => {
          return (
            <a
              href="#"
              key={key}
              className={`text-xs font-bold text-white underline-offset-2 decoration-1 xl:text-sm ${
                navIndex === item.index ? "underline" : ""
              }`}
            >
              {item.name}
            </a>
          );
        })}
      </div>
      <button
        className="relative mr-10 h-4 w-6 flex items-center justify-center xl:mr-20"
        onClick={() => setIsDesktopOpen(true)}
      >
        <img src={hamburger} alt="" className="relative h-full w-full" />
      </button>
    </div>
  );
};

export default TopNavDesktop;
