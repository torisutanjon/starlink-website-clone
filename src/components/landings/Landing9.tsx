import { landingMobilebg9 } from "../../assets";

const LandingNine = () => {
  return (
    <div className="relative w-full flex flex-col">
      <img src={landingMobilebg9} alt="" className="relative h-auto w-full" />
      <div className="h-3/5 w-full flex flex-col px-7 bg-black">
        <p className="text-white text-2xl font-bold mt-10">
          ENGINEERED BY SPACEX
        </p>
        <p className="text-white text-sm mt-8">
          SpaceX is leveraging its experience in building rockets and spacecraft
          to deploy the world’s most advanced broadband internet system. As the
          world’s leading provider of launch services – and the only provider
          with an orbital class reusable rocket – SpaceX has deep experience
          with both spacecraft and on-orbit operations.
        </p>
        <button className="h-12 w-full rounded-sm border-2 border-white mt-8 text-white text-sm font-bold">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default LandingNine;
