const LandingSeven = () => {
  return (
    <div className="relative w-full bg-[#272626]">
      <div className="h-full w-full px-7 flex flex-col py-12 xl:h-screen xl:w-full xl:items-center xl:justify-start">
        <p className="text-white text-2xl font-bold text-center xl:mt-16 lg:text-3xl xl:text-5xl">
          CUSTOMER QOUTES
        </p>
        <div className="relative flex flex-col xl:flex-row xl:mt-20">
          <div className="relative flex flex-col xl:w-1/3 lg:px-40 xl:px-16">
            <p className="text-center text-white text-lg mt-4 xl:mt-0 xl:text-2xl">
              "It's an entirely different world... Before Starlink we had to
              ration data and we couldn't stream. Now we have files downloading,
              pandora playing, Zoom going and there's no latency whatsoever."
            </p>
            <p className="text-center text-white mt-4 xl:text-2xl xl:mt-8">
              -Williams D. from Colorado, USA
            </p>
          </div>
          <div className="relative flex flex-col xl:w-1/3 lg:px-40 xl:px-16">
            <p className="text-center text-white text-lg mt-12 xl:mt-0 xl:text-2xl">
              "Absolute game changer! There’s no overpromising and
              underdelivering like our old slow provider. Plug it in and show
              Dishy the sky, that’s it! In under 5 minutes we’ve gone from the
              forgotten to having the fastest internet connection in the area."
            </p>
            <p className="text-center text-white mt-4 xl:text-2xl xl:mt-8">
              -Aaron W. from Southern England
            </p>
          </div>
          <div className="relative flex flex-col xl:w-1/3 lg:px-40 xl:px-16">
            <p className="text-center text-white text-lg mt-12 xl:mt-0 xl:text-2xl">
              "Millions are not connected to the Internet — we're thrilled to
              say that we're no longer among them. Blistering fast and online in
              minutes, Starlink ends a six-year journey."
            </p>
            <p className="text-center text-white mt-4 xl:text-2xl xl:mt-8">
              -Neil V. from New South Wales Australia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSeven;
