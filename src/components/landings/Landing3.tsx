import { landingMobilebg3 } from "../../assets";

const LandingThree = () => {
  return (
    <div className="relative w-full flex flex-col">
      <img src={landingMobilebg3} alt="" className="relative h-auto w-full" />
      <div className="h-[40%] w-full flex flex-col items-start justify-end px-7 bg-black">
        <p className="text-white text-2xl font-bold mt-12 mb-6">
          EASY SELF-INSTALL
        </p>
        <p className="text-white text-sm mb-4">
          Your Starlink Kit arrives with everything you need to get online in
          minutes including your Starlink, WiFI router, cables and base.
        </p>
        <p className="text-white text-sm mb-8">
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
          className="h-12 w-full border-2 border-white rounded-sm text-white font-bold mb-14 text-sm"
        >
          VIEW INSTALL
        </button>
      </div>
    </div>
  );
};

export default LandingThree;
