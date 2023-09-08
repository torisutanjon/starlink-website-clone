import { ico, close } from "../assets";
import { useNavContext } from "../hooks";

const SmallContainer = ({ title, path }: { title: string; path: string }) => {
  return (
    <div className="h-12 w-full flex items-start justify-start">
      <a href={path} className="text-[13px] text-white">
        {title}
      </a>
    </div>
  );
};
const BigContainer = ({ title, path }: { title: string; path: string }) => {
  return (
    <div className="h-14 w-full flex items-center justify-start">
      <a href={path} className="text-[12px] font-bold text-white">
        {title}
      </a>
    </div>
  );
};

const TopNavHidden = () => {
  const { isMobileOpen, setIsMobileOpen } = useNavContext();
  return (
    <div
      className={`fixed top-0 right-0 h-screen flex items-center justify-center bg-black z-[2] duration-500 ${
        isMobileOpen ? "w-full" : "w-0"
      }`}
    >
      <div
        className={`relative h-full w-5/6 py-5 overflow-y-auto no-scrollbar ${
          isMobileOpen ? "" : "hidden"
        } `}
      >
        <div className="relative h-12 w-full mt-4 flex flex-row items-center justify-center">
          <img src={ico} alt="" className="h-full w-14" />
          <button
            type="button"
            className="absolute right-4 h-4 w-4"
            onClick={() => {
              setIsMobileOpen(false);
            }}
          >
            <img src={close} alt="" className="relative h-full w-full" />
          </button>
        </div>
        <SmallContainer title="SERVICES" path="#" />
        <SmallContainer title="RESIDENTIAL" path="#" />
        <SmallContainer title="BUSINESS" path="#" />
        <SmallContainer title="ROAM" path="#" />
        <SmallContainer title="MOBILITY" path="#" />
        <SmallContainer title="MARITIME" path="#" />
        <SmallContainer title="AVIATION" path="#" />
        <SmallContainer title="IOT" path="#" />
        <BigContainer title="TECHNOLOGY" path="#" />
        <BigContainer title="SUPPORT" path="#" />
        <BigContainer title="AVAILABILITY SHOP" path="#" />
        <BigContainer title="RESOURCES" path="#" />
        <BigContainer title="SPECIFICATION" path="#" />
        <BigContainer title="US" path="#" />
        <BigContainer title="SIGN IN" path="#" />
      </div>
    </div>
  );
};

export default TopNavHidden;
