import { useState } from 'react';
import NavBarButtons from './NavbarButtons';
import { NavbarContext } from './NavbarContext';
import NavBarLogo from './NavbarLogo';
import NavbarToggle from './NavbarToggle';
import NavbarMenu from './NavbarMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const contextValue = { isOpen, toggleIsOpen };
  return (
    <NavbarContext.Provider value={contextValue}>
      <header className="w-full flex justify-between items-end md:items-center py-3 px-5  relative border-b border-header-border">
        {/* hostpad logo  */}
        <NavBarLogo />

        {/* Desktop buttons */}
        <div className="hidden md:flex">
          <NavBarButtons />
        </div>
        {/* hamburger icon for mobile screens */}
        <NavbarToggle />

        {/* Navbar Menu for mobile*/}
        <NavbarMenu />
      </header>
    </NavbarContext.Provider>
  );
};
export default Navbar;
