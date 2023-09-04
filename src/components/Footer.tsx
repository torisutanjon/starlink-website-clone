const Footer = () => {
  return (
    <footer className="relative w-full flex flex-col items-center justify-center py-4 bg-black mt-24">
      <div className="w-full flex items-center justify-center">
        <p className="text-[12px] text-white/40">Starlink &copy; 2023</p>
      </div>
      <div className=" w-full flex items-center justify-center px-12">
        <p className="text-white text-[11px] text-center">
          <span>
            <a href="" className="font-bold my-1">
              Careers
            </a>
            &nbsp; &nbsp; | &nbsp; &nbsp;
            <a href="" className="font-bold my-1">
              Satellite Operators
            </a>
            &nbsp; &nbsp; | &nbsp; &nbsp;
            <a href="" className="font-bold my-1">
              Privacy & Legal
            </a>
            &nbsp; &nbsp; | &nbsp; &nbsp;
            <a href="" className="font-bold my-1">
              Privacy Preference
            </a>
          </span>
        </p>
      </div>
      <div className="w-full flex items-center justify-center">
        <p className="text-[11px] text-white/40">
          <span>
            Starlink is a division of SpaceX. Visit us at{" "}
            <a href="" className="font-bold text-white">
              spacex.com
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
