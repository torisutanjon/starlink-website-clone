import { ico, hamburger } from "../assets";
import { useNavContext } from "../hooks";

const TopNavMobile = () => {
  const { setIsMobileOpen } = useNavContext();
  return (
    <>
      <div className="absolute top-8 h-14 w-full flex flex-row items-center justify-center z-[1] lg:hidden">
        <img src={ico} alt="" className="h-14 w-14 ml-4" />
        <button
          type="button"
          className="absolute right-6 h-7 w-9"
          onClick={() => setIsMobileOpen(true)}
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
