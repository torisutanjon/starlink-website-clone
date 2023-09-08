import { landingMobilebg4, landingDesktopbg4 } from "../../assets";

const LandingFour = () => {
  return (
    <div className="relative w-full flex flex-col lg:flex-row">
      <div className="relative h-auto w-full lg:h-screen lg:w-1/2">
        <img
          src={landingMobilebg4}
          alt=""
          className="relative h-full w-full lg:hidden"
        />
        <img
          src={landingDesktopbg4}
          alt=""
          className="relative h-full w-full hidden lg:block"
        />
      </div>
      <div className="h-3/5 w-full flex flex-col items-start justify-end px-7 bg-black lg:h-screen lg:w-1/2 lg:justify-center xl:pr-48 xl:pl-20">
        <p className="text-white text-2xl font-bold mb-8 mt-12 lg:text-3xl xl:text-5xl">
          NO CONTRACTS, 30-DAY TRIAL
        </p>
        <p className="text-white text-sm mb-4 xl:text-base">
          Long term contracts prevent both parties from making sensible changes
          when necessary.
        </p>
        <p className="text-white text-sm mb-4 xl:text-base">
          With Starlink, it's a fair deal both ways. Starlink can adjust terms
          and pricing as needed, and customers can cancel at any time, for any
          reason.
        </p>
        <p className="text-white text-sm mb-10 xl:text-base">
          Try any Starlink Service for 30 days and, if not satisfied, return the
          hardware for a full refund.
        </p>
        <button
          type="button"
          className="h-12 w-full border-2 border-white rounded-sm text-white font-bold text-sm mb-16 xl:w-3/5"
        >
          ORDER NOW
        </button>
      </div>
    </div>
  );
};

export default LandingFour;
