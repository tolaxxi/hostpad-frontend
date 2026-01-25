import { HERO_FLOATING_FEATURES } from '../heroConstant';
import HeroFloatingFeaturesCard from './HeroFloatingFeaturesCard';

const HeroFloatingFeatures = () => {
  return (
    <>
      {HERO_FLOATING_FEATURES.map(({ label, feature, Icon, color, offset, anchor }) => {
        return (
          <HeroFloatingFeaturesCard
            label={label}
            feature={feature}
            offset={offset}
            key={label}
            Icon={Icon}
            color={color}
            anchor={anchor}
          />
        );
      })}
    </>
  );
};
export default HeroFloatingFeatures;
