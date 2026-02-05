import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

interface Risk {
      id: string;
    createdAt: Date;
    pullRequestId: string;
    hasDependencyRisk: boolean;
    hasAuthRisk: boolean;
    hasMalciousRisk: boolean;
    malciousReasons: string[];
    affectedFiles: string[];

}


function buildAIPrompt(risk:Risk) {
  return `
You are a senior security reviewer assisting a human code reviewer.

The following risk signals were detected for a GitHub pull request:

- Dependency changes: ${risk.hasDependencyRisk}
- Auth or access-control logic touched: ${risk.hasAuthRisk}
- Suspicious code patterns detected: ${risk.hasMalciousRisk}
- Suspicious reasons: ${risk.malciousReasons.join(", ")}

Affected files:
${risk.affectedFiles.join("\n")}

Rules:
- Do NOT claim vulnerabilities
- Do NOT block the PR
- Explain why extra review is recommended
- Keep tone calm and professional
- Max 120 words
`
}

export async function notify(pr:Risk){
    try{

        const prompt=buildAIPrompt(pr)
        const ai=new GoogleGenAI({
            apiKey:process.env.GEMINI_API_KEY
        })

        const response=await ai.models.generateContent({
            model:"gemini-3-flash-preview",
            contents:prompt || "Explain different types of issues in github PRs"
        })

        return response.text ?? "";


    }catch(error){
        console.error("GEMINI API error",error)
        return NextResponse.json({error:"Failed to generate content"},{status:500})
    }
}