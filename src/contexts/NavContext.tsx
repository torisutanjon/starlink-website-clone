import { useState, createContext, Dispatch, SetStateAction } from "react";

type NavContextType = {
  isMobileOpen: boolean;
  setIsMobileOpen: Dispatch<SetStateAction<boolean>>;
  isDesktopOpen: boolean;
  setIsDesktopOpen: Dispatch<SetStateAction<boolean>>;
  navIndex: number;
  setNavIndex: Dispatch<SetStateAction<number>>;
};

export const NavContext = createContext<NavContextType>({
  isMobileOpen: false,
  setIsMobileOpen: () => {},
  isDesktopOpen: false,
  setIsDesktopOpen: () => {},
  navIndex: 0,
  setNavIndex: () => {},
});

const NavContextProvider = ({ children }: { children: JSX.Element }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDesktopOpen, setIsDesktopOpen] = useState(false);
  const [navIndex, setNavIndex] = useState(0);
  return (
    <NavContext.Provider
      value={{
        isMobileOpen,
        setIsMobileOpen,
        isDesktopOpen,
        setIsDesktopOpen,
        navIndex,
        setNavIndex,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export default NavContextProvider;
