import type { HERO_FLOATING_FEATURE } from '../hero.types';
import type { Anchor } from '../hero.types';

// anchor
const anchorMap: Record<Anchor, string> = {
  'top-left': 'translate(0%, 0%)',
  'top-center': 'translate(-50%, 0%)',
  'top-right': 'translate(-100%, 0%)',
  'center-left': 'translate(0%, -50%)',
  'bottom-left': 'translate(0%, -100%)',
  'bottom-right': 'translate(-100%, -100%)',
};

const HeroFloatingFeaturesCard = ({
  label,
  feature,
  color,
  Icon,
  offset,
  anchor = 'top-left',
}: HERO_FLOATING_FEATURE) => {
  return (
    <div
      className={`flex text-nowrap items-center border p-1 pr-2 md:p-2 md:pr-5 md:rounded-xl rounded-md md:gap-3 gap-1 absolute bg-white  animate-bounce `}
      style={{
        left: `${offset.x}%`,
        top: `${offset.y}%`,
        transform: anchorMap[anchor],
        borderColor: color?.backGround,
      }}
    >
      {/* feature icon */}
      <div
        className={`rounded-full p-1 md:p-3 text-xs md:text-2xl inline-flex justify-center items-center`}
        style={{ color: color?.foreGround, backgroundColor: color?.backGround }}
      >
        <Icon />
      </div>
      {/* features title and subtitle */}
      <div className="capitalize">
        <h2 className="font-medium text-[7px] md:text-sm">{label}</h2>
        <p className="md:text-sm text-[5px] ">{feature}</p>
      </div>
    </div>
  );
};
export default HeroFloatingFeaturesCard;
