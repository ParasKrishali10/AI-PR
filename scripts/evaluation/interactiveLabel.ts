import fs from "fs";
import path from "path";
import readline from "readline";
import { analyzePR } from "../analyzer/analyzePR";
import { normalizePR } from "../evaluation/normalize";
import { fileURLToPath } from "url";
import {globSync} from "glob";
const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)
const dataDir=path.join(__dirname,"datasets")
const labelsPath=path.join(__dirname,"labels.json")

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function loadAllPRs():any[]{
    const files=globSync(`${dataDir}/**/prs.json`)
    let allPRs:any[]=[]
    for(const file of files){
        const content=JSON.parse(fs.readFileSync(file,"utf-8"))
        allPRs=allPRs.concat(content)
    }
    return allPRs
}

async function ask(question:string):Promise<string>{
    return new Promise(resolve=>{
        rl.question(question,answer=>resolve(answer))
    })
}

(async ()=>{
    const prs=loadAllPRs()

    const labels:Record<string,string>=
        fs.existsSync(labelsPath)
        ?JSON.parse(fs.readFileSync(labelsPath,"utf-8"))
        :{}

    for(const raw of prs){
        const pr=normalizePR(raw)
        if(labels[String(pr.id)]) continue

        const result=analyzePR(pr)
        console.log("\n---------------------")
        console.log(`PR #${pr.id}`)
        console.log("Predicted:",result.riskLevel)
        console.log("Rules Triggered",result.rules.join(","))


    const answer = await ask("Label? (h/m/l/skip): ");

   if(answer==="h") labels[String(pr.id)]="HIGH"
else if(answer==="m") labels[String(pr.id)]="MEDIUM"
else if(answer==="l") labels[String(pr.id)]="LOW"

    }

    fs.writeFileSync(labelsPath,JSON.stringify(labels,null,2))
    console.log("\nLabels saved successfully")

}) ()