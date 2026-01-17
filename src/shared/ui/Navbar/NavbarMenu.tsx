import NavBarButtons from './NavbarButtons';
import { useNavbar } from './NavbarContext';

const NavbarMenu = () => {
  const { isOpen } = useNavbar();
  return (
    isOpen && (
      <div className="absolute top-full bg-white left-0 right-0 px-5 py-5 md:hidden">
        <NavBarButtons />
      </div>
    )
  );
};
export default NavbarMenu;
