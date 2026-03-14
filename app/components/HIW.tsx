export async function HIW(){
    return <section className="relative py-32 text-white">

<h2 className="text-6xl font-semibold text-center mb-20">
How It Works
</h2>

{/* center line */}
<div className="absolute left-1/2 top-0 h-full w-[7px]
bg-gradient-to-b from-transparent via-sky-400/40 to-transparent
-translate-x-1/2"></div>

<div className="max-w-6xl mx-auto space-y-24">

<div className="grid grid-cols-2 items-center">

<div className="text-right pr-12">
<h3 className="text-2xl font-semibold mb-2">Connect GitHub</h3>
<p className="text-slate-400 text-xl">
Authorize your repository so the system can listen to pull request events.
</p>
</div>

<div className="relative">
<div className="absolute left-1/2 -translate-x-1/2 w-4 h-4
bg-sky-400 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.8)]"></div>
</div>

</div>


<div className="grid grid-cols-2 items-center">

<div></div>

<div className="pl-12">
<h3 className="text-2xl font-semibold mb-2">Webhook Trigger</h3>
<p className="text-slate-400 text-xl">
GitHub webhooks trigger analysis automatically when PRs open or update.
</p>
</div>

</div>
<div className="grid grid-cols-2 items-center">

<div className="text-right pr-12">
<h3 className="text-2xl font-semibold mb-2">AI Code Analysis</h3>
<p className="text-slate-400 text-xl">
AI scans modified files and detects authentication or security sensitive logic.
</p>
</div>

<div className="relative">
<div className="absolute left-1/2 -translate-x-1/2 w-4 h-4
bg-sky-400 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.8)]"></div>
</div>

</div>
<div className="grid grid-cols-2 items-center">

<div></div>

<div className="pl-12">
<h3 className="text-2xl font-semibold mb-2">Risk Insights</h3>
<p className="text-slate-400 text-xl">
Reviewers receive PR summaries, risk signals, and a dynamic risk score.
</p>
</div>

</div>

</div>

</section>

}