# 🛡️ AI-PR-RISK 

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Next.js](https://img.shields.io/badge/Next.js-AppRouter-black)
![Redis](https://img.shields.io/badge/Redis-Queue-red)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow)

A GitHub App backend that analyzes pull requests, extracts deterministic risk signals, and uses AI **only for explanation — never decision-making**.


---

## 🚀 Tech Stack

**Frontend**
- Next.js (App Router)
- Tailwind CSS
- TypeScript

**Backend**
- Node.js (Next.js API routes)
- GitHub Webhooks + OAuth

**Processing**
- BullMQ (Queue)
- Redis

**Database**
- PostgreSQL

**AI**
- Gemini API (explanation only)

---

## 🚩 Problem

Pull requests often include:
- Dependency updates
- Auth / permission changes
- Risky execution patterns

Reviewers:
- Miss subtle risks
- Lack time for deep reviews
- Have no prioritization system

---

## 💡 Solution

AI PR Analyzer:
- Detects **risk signals deterministically**
- Uses AI to **explain risks clearly**
- Helps developers **prioritize reviews**
- Provides a **dashboard for visibility**

---

## 🧠 Core Philosophy

- **Rules → Facts**
- **AI → Explanation**
- **Humans → Judgment**

---

## 🏗️ System Overview

### Flow

1. GitHub sends a webhook on PR events  
2. Backend validates and queues the job  
3. Worker processes the PR asynchronously  
4. Risk signals are extracted  
5. AI generates explanation  
6. Comment is posted on GitHub  
7. Data is stored and shown in dashboard  

---

## ⚙️ Backend Features

### 🔗 GitHub Integration
- GitHub App installation
- Webhook handling (PR events)
- Secure signature validation
- OAuth flow for repo access

---

### 🔄 Event Processing
- Fully async pipeline
- Webhook → Queue → Worker
- Reliable and scalable design

---

### 📦 Queue System (BullMQ + Redis)
- Background job processing
- Retry support for failed jobs
- Job states tracking:
  - Waiting
  - Active
  - Completed
  - Failed

---

### 🧠 Risk Detection Engine

Detects **deterministic signals**:

**Dependency Risk**
- package.json
- yarn.lock
- requirements.txt

**Auth Risk**
- middleware
- guards
- permission logic

**Suspicious Patterns**
- eval()
- exec()
- spawn()
- destructive commands

⚠️ These are signals — NOT vulnerabilities

---

### 🤖 AI Explanation Layer
- Converts signals → human-readable insights
- Summarizes PR risks

❌ AI does NOT:
- Approve PRs
- Reject PRs
- Make decisions

---

### 🗄️ Data Layer
Stores:
- Repositories
- Pull Requests
- Risk signals
- AI explanations
- Processing status

---

### 💬 GitHub PR Comments
- Automatically posts analysis on PRs
- Helps developers review faster

---

## 🖥️ Frontend Features

### 📊 Dashboard
- Total repositories
- PRs analyzed
- Queue health
- Recent activity

---

### 📦 Repositories
- View connected repos
- Search repos
- Connect new repositories

---

### 🔍 Pull Requests
- View all PRs
- Filter by status:
  - Pending
  - Analyzing
  - Completed
- AI-generated summaries

---

### ⚙️ Queue Monitoring
- Track job lifecycle
- Debug failed jobs

---

### 🛠️ Settings (Policy Engine)
- AI strictness slider
- Toggle detection rules

---

## 🧱 Project Structure

    AI-PR-ANALYZER/
    
    ├── app/  
    │ ├── api/ # Backend routes  
    │ ├── dashboard/ # Dashboard UI  
    │ ├── pull-requests/ # PR page  
    │ ├── repos/ # Repo management  
    │ ├── queue/ # Queue UI  
    │ ├── settings/ # Config UI  
    │ └── lib/ # Core logic  
    │  
    ├── worker/ # Background worker  
    ├── prisma/ # Database schema  
    └── README.md


---

## ⚙️ Local Setup

### 1. Install

```bash
npm install
```
### 2. Environment Variables

Create `.env`:

    DATABASE_URL=postgresql://user:password@localhost:5432/pr_risk
    REDIS_URL=redis://localhost:6379
    
    GITHUB_APP_ID=your_app_id
    GITHUB_PRIVATE_KEY=your_private_key
    GITHUB_WEBHOOK_SECRET=your_secret
    
    GEMINI_API_KEY=your_key
    NEXT_PUBLIC_APP_URL=http://localhost:3000

### 3. Run Services

**Start app (frontend + backend)**

    npm run dev

**Start worker**

    npm run worker

**Start Redis**

    docker run -d -p 6379:6379 redis

**Start Redis**

    ngrok http 3000

**Webhook URL:**

    https://<ngrok-url>/api/github/webhook

## 📡 API Endpoints

-   `POST /api/github/webhook` → Handle PR events
-   `GET /api/github/connect` → Start OAuth
-   `GET /api/github/callback` → OAuth callback
-   `GET /api/github/repos` → Fetch repos
-   `POST /api/queue` → Trigger job manually
-   `GET /api/prs` → Fetch PR data

## 🚀 Key Features

-   Event-driven architecture
-   Async job processing
-   Scalable worker system
-   Deterministic risk detection
-   AI-assisted explanations
-   Full monitoring dashboard

## ❌ What This Is NOT

-   Not a vulnerability scanner
-   Not an auto-approval system
-   Not replacing human reviewers

----------

## ⭐ Summary
AI PR Analyzer helps developers:

✔ Focus on high-risk PRs  
✔ Understand risks clearly  
✔ Stay in control of decisions
AI PR Analyzer helps developers:stand risks clearly  
✔ Stay in control of decisions
