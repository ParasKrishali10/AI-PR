import fs from "fs"
import path from "path"
import { analyzePR } from "../analyzer/analyzePR"
import { normalizePR } from "./normalize"

interface DatasetResult{
    name: string,
    predictedHigh:number,
    correctHigh:number
}

function evaluateDataset(datasetPath:string): DatasetResult{
    const prs=JSON.parse(
        fs.readFileSync(path.join(datasetPath,"prs.json"),"utf-8")
    )
    const
}