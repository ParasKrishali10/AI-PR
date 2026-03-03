import {AnalyzablePr} from "../analyzer/analyzePR"

export function normalizePR(raw: any): AnalyzablePr {
  const title=raw.title?.toLowerCase()||""
  const files=raw.files ||[]
  return {
    id: raw.number,
    affectedFiles: raw.files || [],
    hasDependencyRisk:
      files.includes("package.json") ||
      files.includes("package-lock.json"),

    hasAuthRisk:
      files.some((f: string) =>
        f.toLowerCase().includes("auth")
      ),

    hasMaliciousRisk:
      raw.additions >= 100,
  };
}