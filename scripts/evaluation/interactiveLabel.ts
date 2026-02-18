import fs from "fs";
import path from "path";
import readline from "readline";
import { analyzePR } from "../analyzer/analyzePR";
import { normalizePR } from "../evaluation/normalize";

const dataDir=path.join(__dirname,"datasets")
const labelsPath=path.join(__dirname,"labels.json")

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function loadAllPRs():any[]{
    const files=fs.readdirSync(dataDir)
    let allPRs:any[]=[]
    for(const file  of files){
        if(file.endsWith(".json")){
            const filePath=path.join(dataDir,file)
            const content=JSON.parse(
                fs.readFileSync(filePath,"utf-8")
            )
            allPRs.push(content)
        }
    }
    return allPRs
}