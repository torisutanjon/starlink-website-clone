import { landingMobilebg2, landingDesktopbg2 } from "../../assets";

const LandingTwo = () => {
  return (
    <div className="relative w-full flex flex-col landing2_bg section_bg lg:flex-row">
      <div className="h-2/5 w-full lg:h-screen lg:w-1/2">
        <img
          src={landingMobilebg2}
          className="relative h-full w-full lg:hidden"
        />
        <img
          src={landingDesktopbg2}
          alt=""
          className="hidden relative h-full w-full lg:block"
        />
      </div>
      <div className="h-3/5 w-full bg-black px-7 flex flex-col items-start justify-end lg:h-screen lg:w-1/2 lg:justify-center xl:pl-24 xl:pr-52">
        <p className="text-white text-2xl font-bold mb-10 mt-12 lg:text-3xl xl:text-5xl">
          STREAMING, VIDEO CALLS, ONLINE GAMING & MORE
        </p>
        <p className="text-white text-sm mb-4 xl:text-base">
          With Starlink, users can engage in activities that historically have
          not been possible with satellite internet.
        </p>
        <p className="text-white text-sm mb-4 xl:text-base">
          Starlink's high-speed, low-latency service is made possible via the
          world's largest constellation of highly advanced satellites operating
          in a low orbit around the Earth.
        </p>
        <button className="h-12 w-full rounded-sm border-2 border-white mt-8 text-white text-sm font-bold mb-16 xl:w-2/3 lg:mb-0">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default LandingTwo;
