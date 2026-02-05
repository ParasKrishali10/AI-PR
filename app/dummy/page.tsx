import { FeatherIcon, Workflow } from "lucide-react";
import HeroSection from "../lib/hero";
import Features from "../lib/features";
import WorkflowBeam from "../lib/Workflow"

export default function dummy(){
    return(
        <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <Features />
      <WorkflowBeam/>
    </main>
    )
}