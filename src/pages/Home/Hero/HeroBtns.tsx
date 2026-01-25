import Button from '@/shared/ui/Button';
import { HERO_CTA_BUTTONS } from './heroConstant';

const HeroBtns = () => {
  return (
    <div className="flex gap-3 flex-col md:flex-row justify-center lg:justify-start">
      {HERO_CTA_BUTTONS.map(({ id, label, variant, Icon }) => {
        return (
          <Button
            key={id}
            variant={variant}
            className={`px-10 py-4 rounded-4xl flex items-center justify-center text-nowrap ${Icon ? 'gap-2 hover:gap-3' : ''}`}
          >
            {label} {Icon && <Icon size={15} />}
          </Button>
        );
      })}
    </div>
  );
};
export default HeroBtns;
