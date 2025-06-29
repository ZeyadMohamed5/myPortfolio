import PorfolioContent from "./layout/PorfolioContent";
import ShootingStars from "./layout/ShootingStars";

const App = () => {
  return (
    <>
      <div className="relative bg-gradient-to-bl from-[#0f172a] via-[#0f182c] to-[#0e1420] text-white min-h-screen ">
        <ShootingStars />
        <PorfolioContent />
      </div>
    </>
  );
};
export default App;
