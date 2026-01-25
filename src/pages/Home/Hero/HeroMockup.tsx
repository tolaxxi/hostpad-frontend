import mockup from '@/assets/branding/heroMockup.png';
import like from '@/assets/branding/property like.svg';
import dislike from '@/assets/branding/dislike.svg';
import HeroFloatingFeatures from './floatingFeaturesCard/HeroFloatingFeatures';

const HeroMockup = () => {
  return (
    <div className="relative">
      <img src={mockup} alt="" className="min-w-80 md:max-w-130 " />

      <img
        src={like}
        alt=""
        className="absolute top-[27%]  left-[22%] md:left-[20.5%] max-w-6 sm:max-w-10  hover:scale-75"
      />

      {/* like and dislike */}
      <div className="absolute flex top-[75%] right-[26%] md:top-[75%]  rotate-12 md:rotate-10 gap-2">
        <img src={dislike} alt="" className="max-w-6 md:max-w-10 rounded-4xl hover:scale-75" />
        <img src={like} alt="" className="max-w-6 md:max-w-10 hover:scale-75 rounded-4xl" />
      </div>
      <HeroFloatingFeatures />
    </div>
  );
};
export default HeroMockup;
