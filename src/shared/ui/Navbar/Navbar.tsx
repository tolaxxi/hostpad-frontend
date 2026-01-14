import NavBarLogo from './NavBarLogo';
import { NAV_ITEMS } from './navItems';

const Navbar = () => {
  return (
    <header className="w-full flex justify-between items-center p-5 border-b border-header-border">
      {/* hostpad logo  */}
      <NavBarLogo />
      {/* navbar buttons */}
      <nav className="">
        {NAV_ITEMS.map(({ label }) => {
          return <button>{label}</button>;
        })}
      </nav>
    </header>
  );
};
export default Navbar;
