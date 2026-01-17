import { MdClose } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useNavbar } from './NavbarContext';

const NavbarToggle = () => {
  const { isOpen, toggleIsOpen } = useNavbar();
  return (
    <button className="md:hidden" onClick={toggleIsOpen}>
      {isOpen ? <MdClose size={20} /> : <RxHamburgerMenu size={20} />}
    </button>
  );
};
export default NavbarToggle;
