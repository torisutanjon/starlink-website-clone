import { landingbg6 } from "../../assets";

const LandingSix = () => {
  return (
    <div className="relative w-full flex flex-col bg-[#010101]">
      <img src={landingbg6} alt="" className="relative h-auto w-full" />
      <div className="h-3/5 w-full px-7 flex flex-col items-start justify-end">
        <p className="text-white text-2xl font-bold mb-8 mt-12">
          MANAGE STARLINK ON THE MOBILE APP
        </p>
        <p className="text-white text-sm mb-4">
          <span>
            The Starlink app helps yopu customize settings, receive updates,
            access <a href="">Support</a>, and see real time performance data
            link download speed, latency, and uptime.
          </span>
        </p>
        <p className="text-white text-sm mb-8">
          Download the app to determine the best set up location before install.
          Starlink needs a clear view of the sky to connect to satellites.
        </p>
        <button
          type="button"
          className="h-12 w-full border-2 border-white rounded-sm text-white font-bold mb-4 text-sm"
        >
          DOWNLOAD FOR IOS
        </button>
        <button
          type="button"
          className="h-12 w-full border-2 border-white rounded-sm text-white font-bold mb-14 text-sm"
        >
          DOWNLOAD FOR ANDROID
        </button>
      </div>
    </div>
  );
};

export default LandingSix;
