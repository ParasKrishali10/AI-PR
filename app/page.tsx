import { FeaturesLast } from "../app/components/featuresLast";
import FooterCTA from "../app/components/footer";
import IntegrationSteps from "../app/components/IntegrationSteps";
import MainS from "../app/components/mainS";
import { SubHeading } from "../app/components/subHeading";
import Topbar from "../app/components/tobar";
import RedirectIfLoggedIn from "./components/RedirectLoggedIn";
export default function LandingPage() {

  return (
    <div className="min-h-screen bg-[#0b1120] text-white">
      <RedirectIfLoggedIn />
      <Topbar />
      <main>
        <MainS />
        <SubHeading />
        <FeaturesLast />
        <IntegrationSteps />
      </main>
      <FooterCTA />
    </div>
  );
}