import { useState, createContext, Dispatch, SetStateAction } from "react";

type NavContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const NavContext = createContext<NavContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

const NavContextProvider = ({ children }: { children: JSX.Element }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavContextProvider;
