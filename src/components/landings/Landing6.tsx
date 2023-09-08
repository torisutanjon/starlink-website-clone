import { landingbg6, landingDesktopbg6 } from "../../assets";

const LandingSix = () => {
  return (
    <div className="relative w-full flex flex-col bg-[#010101] lg:flex-row">
      <div className="relative h-auto w-full lg:h-screen lg:w-1/2">
        <img
          src={landingbg6}
          alt=""
          className="relative h-full w-full lg:hidden"
        />
        <img
          src={landingDesktopbg6}
          alt=""
          className="relative h-full w-full hidden lg:block"
        />
      </div>
      <div className="h-3/5 w-full px-7 flex flex-col items-start justify-end lg:h-screen lg:w-1/2 lg:justify-center xl:pl-24 xl:pr-48">
        <p className="text-white text-2xl font-bold mb-8 mt-12 lg:text-3xl xl:text-5xl">
          MANAGE STARLINK ON THE MOBILE APP
        </p>
        <p className="text-white text-sm mb-4 xl:text-base">
          <span>
            The Starlink app helps yopu customize settings, receive updates,
            access <a href="">Support</a>, and see real time performance data
            link download speed, latency, and uptime.
          </span>
        </p>
        <p className="text-white text-sm mb-8 xl:text-base">
          Download the app to determine the best set up location before install.
          Starlink needs a clear view of the sky to connect to satellites.
        </p>
        <div className="flex flex-col w-full xl:flex-row">
          <button
            type="button"
            className="h-12 w-full border-2 border-white rounded-sm text-white font-bold mb-4 text-sm xl:w-56"
          >
            DOWNLOAD FOR IOS
          </button>
          <button
            type="button"
            className="h-12 w-full border-2 border-white rounded-sm text-white font-bold mb-14 text-sm xl:mb-0 xl:w-56 xl:ml-4"
          >
            DOWNLOAD FOR ANDROID
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingSix;
