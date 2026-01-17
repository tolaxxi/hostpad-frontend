import { createContext, useContext } from 'react';

interface NavbarContextValue {
  isOpen: boolean;
  toggleIsOpen: () => void;
}

export const NavbarContext = createContext<NavbarContextValue | null>(null);

export const useNavbar = () => {
  const context = useContext(NavbarContext);

  if (!context) throw new Error('Navbar components must be used within <Navbar>');
  return context;
};
