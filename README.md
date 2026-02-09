# 🛡️ PR Risk Analyzer (Backend)

A GitHub App backend that analyzes pull requests, extracts **deterministic risk signals**, and uses **AI only to explain context to human reviewers** — without replacing human judgment.

---

## 🚩 Problem

Pull requests often combine multiple types of changes:
- dependency updates
- authentication or access-control logic changes
- risky execution patterns

Reviewers typically:
- lack time to deeply inspect every PR
- miss subtle interactions between changes
- have no historical context across pull requests

Most tools focus on **finding vulnerabilities**.  
This system focuses on **early risk signaling** to help reviewers decide *where to look first*.

---

## 💡 What This Backend Does

This service provides PR-time risk signals by:

1. Listening to GitHub pull request webhooks
2. Processing events asynchronously via a queue
3. Extracting deterministic security-relevant signals
4. Persisting signals for auditability and retries
5. Using AI to generate **explanatory context**
6. Posting advisory comments directly on pull requests

> ⚠️ This system does **not** approve, block, or reject pull requests.  
> It assists human reviewers.

---

## 🧠 Core Design Philosophy

**Rules for facts.  
AI for explanation.  
Humans for judgment.**

- Detection logic is deterministic and reproducible
- AI is used only for interpretation and communication
- AI output is advisory, never authoritative

---
GitHub Webhook
↓
Redis Queue (BullMQ)
↓
Worker
├─ Fetch PR files
├─ Extract risk signals
├─ Persist results (DB)
├─ Generate AI explanation
└─ Post PR comment


---

## 🔍 Risk Signals Extracted

### 1️⃣ Dependency Risk
Triggered when dependency definition files are modified, including:
- `package.json`, `yarn.lock`
- `requirements.txt`
- `pom.xml`, `go.mod`

---

### 2️⃣ Auth / Access-Control Risk
Triggered when files related to:
- authentication
- middleware
- guards or policies
- permissions

are modified.

---

### 3️⃣ Suspicious / Malicious Code Signals
Heuristic pattern detection for:
- dynamic code execution (`eval`)
- shell execution (`exec`, `spawn`)
- OS-level commands (`rm -rf`)
- runtime execution patterns

> These are **signals**, not vulnerability claims.

---

## 🤖 Why AI Is Used (and Why It’s Limited)

### ❌ AI is NOT used to:
- review code correctness
- detect vulnerabilities
- assign risk probabilities
- approve or block PRs

### ✅ AI IS used to:
- explain how multiple deterministic signals interact
- provide human-readable context
- reduce reviewer cognitive load

AI operates **only on persisted risk signals**, not raw code.

---

## 💬 Example PR Comment

> ⚠️ **Automated Risk Signal (Advisory Only)**  
>  
> This PR modifies authentication-related logic while introducing new execution paths.  
> Combined with dependency changes, this increases the review surface area and may require closer inspection of access control and execution flow.  
>  
> _Generated from deterministic risk signals to assist human reviewers._

---

## 🗄️ Data Model (Core Tables)

- `Repository`
- `PullRequest`
- `PullRequestRisk`

`PullRequestRisk` stores:
- dependency risk flag
- auth risk flag
- suspicious code risk flag
- detected reasons
- affected files
- comment-posted status

This ensures:
- retry safety
- auditability
- reproducible behavior

---

## 🔁 Event Handling

Handled GitHub events:
- `pull_request.opened`
- `pull_request.reopened`
- `pull_request.synchronize`

`synchronize` ensures risk is re-computed whenever new commits are pushed to an open PR.

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Prisma
- PostgreSQL
- Redis + BullMQ
- GitHub App API

### AI
- Gemini / OpenAI  
- Provider-agnostic, stateless usage

---

## 🚀 What Makes This Backend Different

- Focuses on **review prioritization**, not vulnerability scanning
- Event-driven, asynchronous, retry-safe
- Clear separation between detection and explanation
- Responsible AI usage with bounded scope
- Designed for real-world GitHub workflows

---

## ⚠️ What This System Is NOT

- ❌ A vulnerability scanner (e.g. Snyk, CodeQL)
- ❌ An approval or blocking system
- ❌ A replacement for human reviewers

---
## 🏗️ High-Level Architecture

GitHub Webhook
↓
Redis Queue (BullMQ)
↓
Worker
├─ Fetch PR files
├─ Extract risk signals
├─ Persist results (DB)
├─ Generate AI explanation
└─ Post PR comment


---

## 🔍 Risk Signals Extracted

### 1️⃣ Dependency Risk
Triggered when dependency definition files are modified, including:
- `package.json`, `yarn.lock`
- `requirements.txt`
- `pom.xml`, `go.mod`

---

### 2️⃣ Auth / Access-Control Risk
Triggered when files related to:
- authentication
- middleware
- guards or policies
- permissions

are modified.

---

### 3️⃣ Suspicious / Malicious Code Signals
Heuristic pattern detection for:
- dynamic code execution (`eval`)
- shell execution (`exec`, `spawn`)
- OS-level commands (`rm -rf`)
- runtime execution patterns

> These are **signals**, not vulnerability claims.

---

## 🤖 Why AI Is Used (and Why It’s Limited)

### ❌ AI is NOT used to:
- review code correctness
- detect vulnerabilities
- assign risk probabilities
- approve or block PRs

### ✅ AI IS used to:
- explain how multiple deterministic signals interact
- provide human-readable context
- reduce reviewer cognitive load

AI operates **only on persisted risk signals**, not raw code.

---

## 💬 Example PR Comment

> ⚠️ **Automated Risk Signal (Advisory Only)**  
>  
> This PR modifies authentication-related logic while introducing new execution paths.  
> Combined with dependency changes, this increases the review surface area and may require closer inspection of access control and execution flow.  
>  
> _Generated from deterministic risk signals to assist human reviewers._

---

## 🗄️ Data Model (Core Tables)

- `Repository`
- `PullRequest`
- `PullRequestRisk`

`PullRequestRisk` stores:
- dependency risk flag
- auth risk flag
- suspicious code risk flag
- detected reasons
- affected files
- comment-posted status

This ensures:
- retry safety
- auditability
- reproducible behavior

---

## 🔁 Event Handling

Handled GitHub events:
- `pull_request.opened`
- `pull_request.reopened`
- `pull_request.synchronize`

`synchronize` ensures risk is re-computed whenever new commits are pushed to an open PR.

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Prisma
- PostgreSQL
- Redis + BullMQ
- GitHub App API

### AI
- Gemini / OpenAI  
- Provider-agnostic, stateless usage

---

## 🚀 What Makes This Backend Different

- Focuses on **review prioritization**, not vulnerability scanning
- Event-driven, asynchronous, retry-safe
- Clear separation between detection and explanation
- Responsible AI usage with bounded scope
- Designed for real-world GitHub workflows

---

## ⚠️ What This System Is NOT

- ❌ A vulnerability scanner (e.g. Snyk, CodeQL)
- ❌ An approval or blocking system
- ❌ A replacement for human reviewers

---

