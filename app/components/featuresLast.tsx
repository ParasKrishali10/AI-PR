import { Cardf } from "./Cardf";

export async function FeaturesLast(){
    return (
        <div>
            <h2 className="text-4xl font-semibold text-center mb-4">
Eliminate Manual Code Reviews
</h2>
        <div className="grid grid-cols-2 gap-12 place-items-center max-w-5xl mx-auto py-20">

        <Cardf top="⚠️ RISK SIGNAL" center="Detect authentication,permission,and security sensitive changes inside pull request automatically" bottom="AI SECURITY ANALYSIS" />
        <Cardf  top="📄 PR SUMMARY"  center="Generate AI summaries of pull requests so reviewers understand code changes instantly."
 bottom="LLM POWERED"/>
        <Cardf top="🐙 GITHUB WEBHOOKS" center="Analyze pull requests in real time using GitHub webhooks and an event-driven pipeline that processes repository activity automatically." bottom="REAL-TIME ANALYSIS"/>
        <Cardf top="📊 RISK SCORING" center="Every pull request receives a dynamic risk score based on file sensitivity, code complexity, and security-critical changes."  bottom="SMART SIGNAL ENGINE"/>
        </div>
        </div>
    )
}