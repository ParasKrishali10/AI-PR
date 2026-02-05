import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try{

        const {prompt}=await req.json()
        const ai=new GoogleGenAI({
            apiKey:process.env.GEMINI_API_KEY
        })

        const response=await ai.models.generateContent({
            model:"gemini-3-flash-preview",
            contents:prompt || "Explain different types of issues in github PRs"
        })

        return NextResponse.json({text:response.text})

    }catch(error){
        console.error("GEMINI API error",error)
        return NextResponse.json({error:"Failed to generate content"},{status:500})
    }
}