import fs from "fs"
import path from "path"
import readline from "readline"
import {analyzePR} from "../analyzer/analyzePR"
import {normalizePR} from "../evaluation/normalize"
const dataDir=path.join(__dirname,"data")
const labelsPath=path.join(__dirname,"labels.json")

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function loadAllPrs():any[]{
    const files=fs.readdirSync(dataDir);
    let allPRs:any[]=[]
    for(const file of files){
        if(file.endsWith(".json")){
            const filePath=path.join(dataDir,file)
            const content=JSON.parse(fs.readFileSync(filePath,"utf-8"))
            allPRs.push(content)
        }
    }
    return allPRs
}

function evaluate(){
    const prs=loadAllPrs()
    const labels=JSON.parse(fs.readFileSync(labelsPath,"utf-8"))

    let predictedHigh=0;
    let correctHigh=0;

    for(const raw of prs){
        const pr=normalizePR(raw)
        const result=analyzePR(pr)
        const label=labels[pr.id]

        if(result.riskLevel==="high"){
            predictedHigh++;
            if(labels[String(pr.id)]==="high"){
                correctHigh++;
            }
        }

  const precision =predictedHigh === 0?0:correctHigh / predictedHigh;
  console.log("---- Evaluation Result ----");
  console.log("Predicted HIGH:", predictedHigh);
  console.log("Correct HIGH:", correctHigh);
  console.log("Precision:", precision.toFixed(2));

    }

}
evaluate()