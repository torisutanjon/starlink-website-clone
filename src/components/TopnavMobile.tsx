import { ico, hamburger } from "../assets";
import { useContext } from "react";
import { NavContext } from "../hooks/NavContext";
const TopNavMobile = () => {
  const { setIsOpen } = useContext(NavContext);
  return (
    <>
      <div className="absolute top-8 h-14 w-full flex flex-row items-center justify-center z-[1]">
        <img src={ico} alt="" className="h-14 w-14 ml-4" />
        <button
          type="button"
          className="absolute right-6 h-7 w-9"
          onClick={() => setIsOpen(true)}
        >
          <img
            src={hamburger}
            alt=""
            className="flex items-center justify-center h-4 w-7"
          />
        </button>
      </div>
    </>
  );
};

export default TopNavMobile;
