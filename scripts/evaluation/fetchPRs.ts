import fs from 'fs';
import path from 'path'
import {prisma} from '../../app/lib/prisma';
import { createAppAuth } from '@octokit/auth-app';
import { Octokit } from '@octokit/rest';
import { number } from 'framer-motion';

const DATASET_DIR=path.join(
  process.cwd(),
  "scripts",
  "evaluation",
  "datasets",
)

function safeName(name:string){
   return name.replace(/[^\w.-]/g, "_")
}

async function fetchPRs(){
  const repos=await prisma.repository.findMany()
  for(const repo of repos){
     const privateKey=process.env.GITHUB_PRIVATE_KEY!.replace(/\n/g,'\n')

      const auth=createAppAuth({
        appId:process.env.GITHUB_APP_ID!,
        privateKey,
        installationId: repo.installationId,
      })

      const installationAuth=await auth({type:"installation"})
      const octokit=new Octokit({
        auth:installationAuth.token
      })
      const [owner, repoName] = repo.fullName.split("/")

      const res=await octokit.pulls.list({
        owner: owner,
        repo: repoName,
        state:"closed",
        per_page:50,
      })

      const enrichedPRs=[]
      for(const pr of res.data){
        const details=await octokit.pulls.get({
          owner,
          repo:repoName,
          pull_number:pr.number
        })

        const files=await octokit.pulls.listFiles({
          owner,
          repo:repoName,
          pull_number:pr.number
        })

        enrichedPRs.push({
          number:pr.number,
          title:pr.title,
          additions:details.data.additions,
          deletions:details.data.deletions,
          changed_files:details.data.changed_files,
          files:files.data.map(f=>f.filename)
        })

      }

      const repoDir=path.join(DATASET_DIR,safeName(repoName))
      fs.mkdirSync(repoDir,{recursive:true})

         await fs.promises.writeFile(
         path.join(repoDir, "prs.json"),
         JSON.stringify(enrichedPRs, null, 2)
      )

      const labelsPath=path.join(repoDir,"labels.json")
      if(!fs.existsSync(labelsPath)){
        await fs.promises.writeFile(
          labelsPath,
          JSON.stringify([], null, 2)
        )
      }

      console.log(`Dataset ready for ${repo.fullName}`)
  }
}

fetchPRs()