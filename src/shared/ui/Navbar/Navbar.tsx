import NavBarButtons from './NavBarButtons';
import NavBarLogo from './NavBarLogo';

const Navbar = () => {
  return (
    <header className="w-full flex justify-between items-center py-3 px-5  border-b border-header-border">
      {/* hostpad logo  */}
      <NavBarLogo />

      {/* navbar buttons */}
      <NavBarButtons />
    </header>
  );
};
export default Navbar;
