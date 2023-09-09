import { useNavContext } from "../hooks";
import { close } from "../assets";
import { globe } from "../assets";

const NavComponent = ({
  title,
  path,
  image,
}: {
  title: string;
  path: string;
  image?: string;
}) => {
  return (
    <div className="relative h-16 w-3/4 mx-auto flex flex-row items-center justify-start border-b-[1px] border-b-white/20">
      <a href={path} className="text-white font-bold text-sm">
        {title}
      </a>
      {image && <img src={image} alt="" className="relative ml-2 h-6 w-6" />}
    </div>
  );
};

const DesktopNavHidden = () => {
  const { isDesktopOpen, setIsDesktopOpen } = useNavContext();

  const navList = [
    {
      title: "AVAILABILITY MAP",
      path: "#",
    },
    {
      title: "RESOURCES",
      path: "#",
    },
    {
      title: "SPECIFICATIONS",
      path: "#",
    },
    {
      title: "US",
      img: globe,
      path: "#",
    },
    {
      title: "SIGN IN",
      path: "",
    },
  ];
  return (
    <div
      className={`fixed top-0 left-0 h-screen w-screen duration-500 hidden lg:block ${
        isDesktopOpen ? "z-10 bg-white/20" : "-z-10"
      }`}
    >
      <div
        className={`absolute h-full top-0 right-0 bg-black duration-500 ${
          isDesktopOpen ? "w-64" : "w-0"
        }`}
      >
        <div
          className={`relative h-full w-full flex-col ${
            isDesktopOpen ? "flex" : "hidden"
          }`}
        >
          <button
            type="button"
            className="relative mt-10 h-4 w-4 ml-10 mb-16"
            onClick={() => setIsDesktopOpen(false)}
          >
            <img src={close} alt="" className="relative h-full w-full" />
          </button>
          {navList.map((nav, key) => {
            return (
              <NavComponent
                key={key}
                title={nav.title}
                path={nav.path}
                image={nav.img}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DesktopNavHidden;
