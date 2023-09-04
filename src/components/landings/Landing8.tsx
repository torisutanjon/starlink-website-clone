import { landingbg8 } from "../../assets";

const LandingEight = () => {
  return (
    <div className="relative  w-full flex flex-col">
      <img src={landingbg8} alt="" className="relative h-auto w-full" />
      <div className="h-1/2 W-full flex flex-col px-7 bg-black">
        <p className="text-white text-2xl font-bold mt-12">
          LEADER IN SPACE SUSTAINABILITY
        </p>
        <p className="text-white text-sm mt-8">
          Starlink not only leads the industry in innovations to reduce
          satellite brightness, but also on-orbit debris mitigation - meeting or
          exceeding all regulatory and industry standards.
        </p>
        <button className="h-12 w-full rounded-sm border-2 border-white mt-8 text-white text-sm font-bold mb-12">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default LandingEight;
