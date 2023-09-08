import { landingMobilebg3, landingDesktopbg3 } from "../../assets";

const LandingThree = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col lg:flex-row-reverse">
      <div className="relative h-auto w-full lg:h-screen lg:w-1/2">
        <img
          src={landingMobilebg3}
          alt=""
          className="relative h-full w-full lg:hidden"
        />
        <img
          src={landingDesktopbg3}
          alt=""
          className="relative h-full w-full hidden lg:block"
        />
      </div>
      <div className="h-[40%] w-full flex flex-col items-start justify-end px-7 bg-black lg:h-screen lg:w-1/2 lg:justify-center xl:pl-36 xl:pr-32">
        <p className="text-white text-2xl font-bold mt-12 mb-6 lg:text-3xl xl:text-5xl">
          EASY SELF-INSTALL
        </p>
        <p className="text-white text-sm mb-4 xl:text-base">
          Your Starlink Kit arrives with everything you need to get online in
          minutes including your Starlink, WiFI router, cables and base.
        </p>
        <p className="text-white text-sm mb-8 xl:text-base">
          <span>
            Click{" "}
            <a href="#" className="underline font-bold">
              here{" "}
            </a>
            to view Starlink technical specifications.
          </span>
        </p>
        <button
          type="button"
          className="h-12 w-full border-2 border-white rounded-sm text-white font-bold mb-14 text-sm xl:w-3/5"
        >
          VIEW INSTALL
        </button>
      </div>
    </div>
  );
};

export default LandingThree;
