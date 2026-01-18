import HeroBtns from './HeroBtns';
import HeroStat from './HeroStat';
import HeroText from './HeroText';
import mockup from '../../../assets/branding/heromockup.png';

const Hero = () => {
  return (
    <section className="flex items-center px-auto flex-col md:flex-row gap-5 pt-20  md:pt-15  px-5 justify-center bg-white">
      <div className="md:w-[50%] w-full text-center md:text-left flex flex-col gap-10">
        <HeroText />
        <HeroBtns />
        <HeroStat />
      </div>
      <div>
        <img src={mockup} alt="" className="bg-cover md:w-100" />
      </div>
    </section>
  );
};
export default Hero;
