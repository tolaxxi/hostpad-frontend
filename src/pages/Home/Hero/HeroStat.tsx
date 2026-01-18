import { Stats } from './heroConstant';

const HeroStat = () => {
  return (
    <div className="flex items-center justify-between">
      {Stats.map(({ label, value }) => {
        return (
          <span className="" key={value}>
            <h3 className="text-2xl">{value}</h3>
            <p className="text-lg text-gray-foreground">{label}</p>
          </span>
        );
      })}
    </div>
  );
};
export default HeroStat;
