import Button from '../../../shared/ui/Button';
import { CTAButtons } from './heroConstant';

const HeroBtns = () => {
  return (
    <div className="flex gap-3 flex-col md:flex-row">
      {CTAButtons.map(({ id, label, variant }) => {
        return (
          <Button key={id} variant={variant} className="px-10 py-4 rounded-4xl">
            {label}
          </Button>
        );
      })}
    </div>
  );
};
export default HeroBtns;
