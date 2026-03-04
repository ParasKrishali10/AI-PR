import { FeatherIcon, Workflow } from "lucide-react";
import HeroSection from "../components/hero";
import Features from "../components/features";
import WorkflowBeam from "../components/Workflow"
import IntegrationSteps from "../components/IntegrationSteps";
import FooterCTA from "../components/footer";
import BlueprintRiskCard from "../components/card";
export default function dummy(){
    return(
        <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <WorkflowBeam/>
      <Features />
      <IntegrationSteps/>
      <FooterCTA/>
      {/* <BlueprintRiskCard title="AI-PR" repo="PR-RISK" riskScore={78} status="Critical" author="alice.dev" aiSummary = "The modification to verifySession() bypasses the previous rate-limit check. Combined with the new dependency, this increases the risk of session hijacking."/> */}
    </main>
    )
}