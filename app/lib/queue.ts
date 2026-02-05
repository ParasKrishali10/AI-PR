import { Queue } from "bullmq"
import IORedis from "ioredis"


const connection=new IORedis(process.env.REDIS_URL!)

export const prRiskQueue=new Queue("pr-risk-analysis",{
    connection
})

export async function enqueuePRRiskJob(data:{
    repositoryId:number,
    prNumber:number
}){
    await prRiskQueue.add("analyze-pr",data)
}