import logo from '@/assets/branding/hostpad-logo.png';

const NavBarLogo = () => {
  return (
    <span className="flex items-end gap-2">
      <img src={logo} alt="hostpad logo" className="w-8" />
      <h2 className="text-2xl leading-5">Hostpad</h2>
    </span>
  );
};
export default NavBarLogo;
