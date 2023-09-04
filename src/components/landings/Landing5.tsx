const LandingFive = () => {
  return (
    <div className="relative h-screen w-full landing5_bg section_bg">
      <div className="h-full w-full bg-black/25 px-7 flex flex-col">
        <p className="text-white text-2xl font-bold mt-14">
          TRAVEL WITH STARLINK
        </p>
        <p className="text-white text-sm mt-4">
          With Starlink's Mobile plans, you can take your high-speed,
          low-latency internet service with you wherever you go.
        </p>
        <p className="text-white text-sm mt-4">
          Pause and resume your plan based on your travel needs and stay
          connected in any location where Starlink is available.
        </p>
        <button
          type="button"
          className="h-12 w-full border-2 border-white rounded-sm text-white font-bold mt-14 text-sm"
        >
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default LandingFive;
