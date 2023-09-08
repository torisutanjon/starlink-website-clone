import { landingMobilebg9, landingDesktopbg9 } from "../../assets";

const LandingNine = () => {
  return (
    <div className="relative w-full flex flex-col lg:flex-row-reverse">
      <div className="relative h-auto w-full lg:h-screen lg:w-1/2">
        <img
          src={landingMobilebg9}
          alt=""
          className="relative h-full w-full lg:hidden"
        />
        <img
          src={landingDesktopbg9}
          alt=""
          className="relative h-full w-full hidden lg:block"
        />
      </div>
      <div className="h-3/5 w-full flex flex-col px-7 bg-black lg:h-screen lg:w-1/2 lg:items-start lg:justify-center xl:pl-36 xl:pr-32">
        <p className="text-white text-2xl font-bold mt-10 lg:text-3xl xl:text-5xl">
          ENGINEERED BY SPACEX
        </p>
        <p className="text-white text-sm mt-8 xl:text-base">
          SpaceX is leveraging its experience in building rockets and spacecraft
          to deploy the world’s most advanced broadband internet system. As the
          world’s leading provider of launch services – and the only provider
          with an orbital class reusable rocket – SpaceX has deep experience
          with both spacecraft and on-orbit operations.
        </p>
        <button className="h-12 w-full rounded-sm border-2 border-white mt-8 text-white text-sm font-bold xl:w-72">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default LandingNine;
