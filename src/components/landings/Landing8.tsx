import { landingbg8, landingDesktopbg8 } from "../../assets";

const LandingEight = () => {
  return (
    <div className="relative  w-full flex flex-col lg:flex-row">
      <div className="relative h-auto w-full lg:h-screen lg:w-1/2">
        <img
          src={landingbg8}
          alt=""
          className="relative h-full w-full lg:hidden"
        />
        <img
          src={landingDesktopbg8}
          alt=""
          className="relative h-full w-full hidden lg:block"
        />
      </div>
      <div className="h-1/2 W-full flex flex-col px-7 bg-black lg:h-screen lg:w-1/2 lg:items-start lg:justify-center xl:pl-20 xl:pr-44">
        <p className="text-white text-2xl font-bold mt-12 lg:text-3xl xl:text-5xl">
          LEADER IN SPACE SUSTAINABILITY
        </p>
        <p className="text-white text-sm mt-8 xl:text-base">
          Starlink not only leads the industry in innovations to reduce
          satellite brightness, but also on-orbit debris mitigation - meeting or
          exceeding all regulatory and industry standards.
        </p>
        <button className="h-12 w-full rounded-sm border-2 border-white mt-8 text-white text-sm font-bold mb-12 xl:w-72">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default LandingEight;
