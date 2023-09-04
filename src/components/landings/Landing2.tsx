import { landingMobilebg2 } from "../../assets";

const LandingTwo = () => {
  return (
    <div className="relative w-full flex flex-col landing2_bg section_bg ">
      <img src={landingMobilebg2} className="relative h-auto w-full" />
      <div className="h-3/5 w-full bg-black px-7 flex flex-col items-center justify-end">
        <p className="text-white text-2xl font-bold mb-10 mt-12">
          STREAMING, VIDEO CALLS, ONLINE GAMING & MORE
        </p>
        <p className="text-white text-sm mb-4">
          With Starlink, users can engage in activities that historically have
          not been possible with satellite internet.
        </p>
        <p className="text-white text-sm mb-4">
          Starlink's high-speed, low-latency service is made possible via the
          world's largest constellation of highly advanced satellites operating
          in a low orbit around the Earth.
        </p>
        <button className="h-12 w-full rounded-sm border-2 border-white mt-8 text-white text-sm font-bold mb-16">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default LandingTwo;
