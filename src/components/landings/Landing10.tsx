const LandingTen = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-start px-7 bg-black">
      <div className="h-56 w-[1px] border-[1px] bg-white rounded-lg mt-24"></div>
      <p className="text-white text-sm mt-10">
        Interested in staying up to date with Starlink?
      </p>
      <div className="w-full flex flex-col lg:flex-row lg:w-2/5 lg:justify-between xl:w-1/4">
        <input
          type="text"
          placeholder="EMAIL"
          className="h-12 w-full bg-[#262626] border-[2px] border-[#a8a8a8] rounded-sm text-xs text-[#afb8b8] pl-6 mt-4 lg:w-4/6 lg:mr-2"
        />
        <button
          type="button"
          className="h-12 w-full bg-[#4d4d4d] text-[#cacaca] rounded-sm text-xs font-bold mt-4 lg:w-28 lg:ml-2"
        >
          SIGN UP
        </button>
      </div>
      <p className="text-[11px] text-white/50 mt-4">
        <span>
          By clicking Sign Up, you agree to our{" "}
          <a href="" className="font-medium text-white underline">
            Privacy Policy
          </a>
        </span>
      </p>
    </div>
  );
};

export default LandingTen;
