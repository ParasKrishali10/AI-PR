import { prisma } from "@/app/lib/prisma";
import { enqueuePRRiskJob } from "@/app/lib/queue";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    const event=req.headers.get("x-github-event")
    const payload=await req.json()

    if(event=="installation" && payload.action==="created"){
        const installationId=payload.installation.id
        const repos=payload.repositories
        const account=payload.installation.account
        const githubUserId = account.id.toString()
        for(const repo of repos)
        {

            await prisma.repository.upsert({
                  where: { githubRepoId:repo.id },
                update:{
                    installationId:installationId
                },create:{
                     githubRepoId: repo.id,
                    fullName:repo.full_name,
                    owner:account.login,
                    installationId:installationId,
                    user:{
                        connectOrCreate: {
                            where: { githubId:githubUserId},
                            create: {
                            githubId:githubUserId,
                            name:account.login
                            }
                        }
                }
                }
            })

            console.log(`${repo.name} is upadted`)
        }

        console.log(`Installation id : ${installationId}`)

    }

    if(event ==="installation_repositories" && payload.action==="added")
    {
        const installationId=payload.installation.id
        const account=payload.installation.account
         const githubUserId = account.id.toString()
        for(const repo of payload.repositories_added)
        {

            await prisma.repository.upsert({
                  where: { githubRepoId:repo.id },
                update:{
                    installationId:installationId
                },create:{
                     githubRepoId: repo.id,
                    fullName:repo.full_name,
                    owner:account.login,
                    installationId:installationId,
                    user:{
                        connectOrCreate: {
                            where: { githubId:githubUserId},
                            create: {
                            githubId:githubUserId,
                            name:account.login
                            }
                        }
                }
                }
            })

            console.log(`Installation id : ${installationId} for ${repo.name} `)
        }
    }

    if(event==="installation_repositories" && payload.action==="removed"){
        for(const repo of payload.repositories_removed){
            await prisma.repository.updateMany({
                where:{githubRepoId:repo.id},
                data:{installationId:0}
            })
            console.log(`Installation id set to 0 for  ${repo.name}`)
        }
    }

    if(event==="pull_request" && (payload.action==="opened")){
        const pr=payload.pull_request;
        const repo=payload.repository

        console.log(`PR ${payload.action} : `,pr.title)

        const dbRepo=await prisma.repository.findUnique({
            where:{
                githubRepoId:repo.id
            }
        })

        if(!dbRepo)
        {
            console.log("Repo not connected , skipping PR")
            return NextResponse.json({message:"Repo not connected"},{status:405})
        }


        console.log({
  additions: pr.additions,
  deletions: pr.deletions,
  changed_files: pr.changed_files
})

        await prisma.pullRequest.create({
            data:{
                githubPrId:BigInt(pr.id),
                prNumber:pr.number,
                title:pr.title,
                state:pr.state,
                author:pr.user.login,
               additions: pr.additions,
                deletions: pr.deletions,
                changedFiles: pr.changed_files,
                repoId:dbRepo.id
            }
        })

        await enqueuePRRiskJob({
            repositoryId:repo.id,
            prNumber:pr.number
        })



    }

    if(event==="pull_request" && payload.action==="reopened"){
        const pr=payload.pull_request;
        const repo=payload.repository

        console.log(`PR ${payload.action} : `,pr.title)

        const dbRepo=await prisma.repository.findUnique({
            where:{
                githubRepoId:repo.id
            }
        })

        if(!dbRepo)
        {
            console.log("Repo not connected , skipping PR")
            return NextResponse.json({message:"Repo not connected"},{status:405})
        }


        console.log({
  additions: pr.additions,
  deletions: pr.deletions,
  changed_files: pr.changed_files
})


        await enqueuePRRiskJob({
            repositoryId:repo.id.toString(),
            prNumber:pr.number
        })



    }
    if(event==="pull_request" && payload.action==="synchronize"){
        const pr=payload.pull_request;
        const repo=payload.repository

        console.log(`PR ${payload.action} : `,pr.title)

        const dbRepo=await prisma.repository.findUnique({
            where:{
                githubRepoId:repo.id
            }
        })

        if(!dbRepo)
        {
            console.log("Repo not connected , skipping PR")
            return NextResponse.json({message:"Repo not connected"},{status:405})
        }


        console.log({
  additions: pr.additions,
  deletions: pr.deletions,
  changed_files: pr.changed_files
})


        await enqueuePRRiskJob({
            repositoryId:repo.id.toString(),
            prNumber:pr.number
        })



    }

    return NextResponse.json({ok:true})
}