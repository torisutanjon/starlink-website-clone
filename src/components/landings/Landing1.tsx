const LandingOne = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-between landing1_bg section_bg">
      <div className="mt-24 flex flex-col items-center justify-center lg:mt-32 lg:px-52 xl:px-96">
        <p className="text-3xl font-bold text-white lg:text-5xl">
          ORDER STARLINK
        </p>
        <p className="mx-4 mt-2 text-sm text-white text-center leading-loose lg:mt-8 xl:text-base">
          High-speed, low-latency broadband internet in remote and rural
          locations across the globe. PHP2,700/mo with the one-time hardware
          cost of PHP28,000.
        </p>
      </div>
      <div className="w-full flex flex-col items-center justify-end lg:px-52 xl:px-96">
        <div className="w-full flex flex-col items-center justify-center lg:flex-row">
          <input
            type="text"
            className="h-12 w-11/12 bg-white/20 border-2 border-white/75 rounded-sm pl-4 text-white/50 text-[11px] mb-3 lg:mb-0 lg:w-96 lg:mr-2"
            placeholder="SERVICE ADDRESS"
          />
          <button className="h-12 w-11/12 bg-white text-[11px] font-bold rounded-sm mb-4 lg:mb-0 lg:w-48 lg:ml-2">
            ORDER NOW
          </button>
        </div>
        <div className="w-full flex flex-col items-center justify-center lg:mt-4">
          <p className="text-lg text-white/50 mb-4">
            <span>
              <a href="#" className="text-xs text-white font-bold">
                VIEW AVAILABILITY MAP
              </a>{" "}
              {">"}
            </span>
          </p>
          <p className="text-[11px] text-white/50 mb-4">
            <span>
              By clicking order now, you agree to our{" "}
              <a href="#" className="underline font-medium text-white/75">
                Privacy Policy
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingOne;
