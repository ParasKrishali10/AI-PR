import { FeaturesLast } from "../app/components/featuresLast";
import FooterCTA from "../app/components/footer";
import { HIW } from "../app/components/HIW";
import IntegrationSteps from "../app/components/IntegrationSteps";
import MainS from "../app/components/mainS";
import { SubHeading } from "../app/components/subHeading";
import Topbar from "../app/components/tobar";
import RedirectIfLoggedIn from "./components/RedirectLoggedIn";
export default function dummy2(){

    return (
        <div>
          <RedirectIfLoggedIn/>
            <Topbar/>
            <MainS/>
            <SubHeading/>
            <FeaturesLast/>
            <IntegrationSteps/>
            <FooterCTA/>
        </div>
    )
}