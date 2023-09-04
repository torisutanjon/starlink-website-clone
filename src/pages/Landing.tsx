import * as Landings from "../components/landings";
import { Footer } from "../components";
import { useMediaQuery } from "react-responsive";
import { TopNavMobile, TopNavDesktop, TopNavHidden } from "../components";

const LandingPage = () => {
  const isDesktop = useMediaQuery({
    query: "min-wdith:1224px",
  });
  return (
    <>
      <div className="absolute top-0 left-0 h-full w-screen overflow-auto">
        {isDesktop ? <TopNavDesktop /> : <TopNavMobile />}
        <TopNavHidden />
        <Landings.LandingOne />
        <Landings.LandingTwo />
        <Landings.LandingThree />
        <Landings.LandingFour />
        <Landings.LandingFive />
        <Landings.LandingSix />
        <Landings.LandingSeven />
        <Landings.LandingEight />
        <Landings.LandingNine />
        <Landings.LandingTen />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
