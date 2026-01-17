import { NAV_ITEMS } from './navItems';
import Button from '../Button';

const NavBarButtons = () => {
  return (
    <nav className={`flex  gap-3 flex-col md:flex-row `}>
      {NAV_ITEMS.map(({ id, label, variant }) => {
        return (
          <Button variant={variant} key={id}>
            {label}
          </Button>
        );
      })}
    </nav>
  );
};
export default NavBarButtons;
