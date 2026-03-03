import fs from "fs"
import path from "path"
import { globSync } from "glob/raw"
import { AnalyzablePr, analyzePR } from "../analyzer/analyzePR"
import { normalizePR } from "./normalize"
import { fileURLToPath } from "url"

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)

const dataDir=path.join(__dirname,"datasets")
const labelsPath=path.join(__dirname,"labels.json")

function loadAllPRs():any[]{
    const files=globSync(`${dataDir}/**/prs.json`)
    let allPRs:any[]=[]
    for (const file of files){
        const content=JSON.parse(fs.readFileSync(file,"utf-8"))
        allPRs=allPRs.concat(content)
    }
    return allPRs
}

function evaluate(){
    const prs=loadAllPRs()
    if(!fs.existsSync(labelsPath)){
        console.log("No labels.json found")
        return;
    }
    const labels=JSON.parse(fs.readFileSync(labelsPath,"utf-8"))

    let predictedHigh=0;
    let correctHigh=0;
    let totalLabeled=0;

    for(const raw of prs){
        const pr=normalizePR(raw);
        if(!labels[String(pr.id)]) continue;
        totalLabeled++;
        const result=analyzePR(pr);
        if(result.riskLevel==="HIGH"){
            predictedHigh++;
            if(labels[String(pr.id)]==="HIGH") correctHigh++;
        }
    }
    const precision=predictedHigh===0?0:correctHigh/predictedHigh
    console.log("\n---- Evaluation Result ----");
    console.log("Total Labeled PRs:", totalLabeled);
    console.log("Predicted HIGH:", predictedHigh);
    console.log("Correct HIGH:", correctHigh);
    console.log("Precision:", precision.toFixed(2));
}

evaluate()