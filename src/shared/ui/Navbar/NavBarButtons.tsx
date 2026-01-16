import { NAV_ITEMS } from './navItems';
import Button from '../../ui/Button';

const NavBarButtons = () => {
  return (
    <nav className="flex items-center gap-3">
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
