import { useContext } from "react";
import { NavContext } from "../contexts/NavContext";

const useNavContext = () => {
  const {
    isMobileOpen,
    setIsMobileOpen,
    isDesktopOpen,
    setIsDesktopOpen,
    navIndex,
    setNavIndex,
  } = useContext(NavContext);
  return {
    isMobileOpen,
    setIsMobileOpen,
    isDesktopOpen,
    setIsDesktopOpen,
    navIndex,
    setNavIndex,
  };
};

export default useNavContext;
