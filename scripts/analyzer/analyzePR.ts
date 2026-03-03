export interface AnalyzablePr{
    id:number,
    affectedFiles:string[],
    hasDependencyRisk: boolean,
    hasAuthRisk: boolean,
    hasMaliciousRisk: boolean
}

export function analyzePR(pr: AnalyzablePr){
    let score=0;
    const rules:string[]=[]
    if(pr.hasAuthRisk){
        score+=40
        rules.push("Authentication risk detected")
    }
    if(pr.hasDependencyRisk){
        score+=30
        rules.push("Dependency risk detected")
    }
    if(pr.hasMaliciousRisk){
        score+=20
        rules.push("Malicious risk detected")
    }
    const riskLevel=score>=60?"HIGH":score>=40?"MEDIUM":"LOW"
    return {score,riskLevel,rules}
}