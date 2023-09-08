import * as Landings from "../components/landings";
import { Footer } from "../components";
import {
  TopNavMobile,
  TopNavDesktop,
  MobileNavHidden,
  DesktopNavHidden,
} from "../components";

const LandingPage = () => {
  return (
    <>
      <div className="absolute top-0 left-0 h-full w-screen overflow-auto">
        <TopNavDesktop indexProp={0} />
        <TopNavMobile />
        <MobileNavHidden />
        <DesktopNavHidden />
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
