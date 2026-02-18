import {AnalyzablePr} from "../analyzer/analyzePR"

export function normalizePR(raw:any):AnalyzablePr{
    return {
    id: raw.number,
    affectedFiles:[],
    hasDependencyRisk: raw.body?.includes("dependency"),
    hasAuthRisk: raw.body?.includes("auth"),
    hasMaliciousRisk: raw.body?.includes("malicious"),
  };
}