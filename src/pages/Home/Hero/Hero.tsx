import HeroBtns from './HeroBtns';
import HeroStat from './HeroStat';
import HeroText from './HeroText';
import HeroMockup from './HeroMockup';

const Hero = () => {
  return (
    <section className="flex items-center px-auto flex-col lg:flex-row gap-5 pt-20  lg:pt-15  px-5 justify-center bg-white">
      <div className=" text-center lg:text-left flex flex-col gap-10 ">
        <HeroText />
        <HeroBtns />
        <HeroStat />
      </div>
      {/* phone mock up */}
      <HeroMockup />
    </section>
  );
};
export default Hero;
