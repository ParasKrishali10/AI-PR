# 🛡️ AI-PR-RISK (Backend)

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Next.js](https://img.shields.io/badge/Next.js-AppRouter-black)
![Redis](https://img.shields.io/badge/Redis-Queue-red)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

A GitHub App backend that analyzes pull requests, extracts deterministic risk signals, and uses AI **only for explanation — never decision-making**.

---

# 🚩 Problem

Pull requests often contain:

* Dependency changes
* Auth / permission updates
* Risky execution patterns

Reviewers:

* Don’t have enough time
* Miss subtle interactions
* Lack historical context

👉 This system helps **prioritize review effort**, not replace it.

---

# 💡 What This Backend Does

* Listens to GitHub webhooks
* Queues PR events (BullMQ)
* Extracts deterministic risk signals
* Stores results (PostgreSQL)
* Uses AI to explain risks
* Posts advisory comments on PRs

⚠️ Does NOT approve, block, or reject PRs.

---

# 🧠 Core Philosophy

* **Rules → Facts**
* **AI → Explanation**
* **Humans → Judgment**

---

# 🏗️ Architecture Diagram

```
                ┌────────────────────┐
                │   GitHub Webhook   │
                └─────────┬──────────┘
                          │
                          ▼
                ┌────────────────────┐
                │   API Server       │
                │ (Next.js Routes)   │
                └─────────┬──────────┘
                          │ enqueue job
                          ▼
                ┌────────────────────┐
                │   Redis Queue      │
                │    (BullMQ)        │
                └─────────┬──────────┘
                          │
                          ▼
                ┌────────────────────┐
                │     Worker         │
                │  (Background Job)  │
                └─────────┬──────────┘
                          │
        ┌─────────────────┼──────────────────┐
        ▼                 ▼                  ▼
 Fetch PR Files   Extract Risk Signals   Store in DB
        │                 │                  │
        └────────────┬────┴──────┬──────────┘
                     ▼           ▼
              Generate AI   Post GitHub
              Explanation     Comment
```

---

# 🔁 Execution Flow

```
Webhook → API → Queue → Worker → DB + AI → GitHub Comment
```

---

# 🧱 Project Structure

```
AI-PR-RISK/
├── app/
│   ├── api/
│   │   ├── github/
│   │   ├── queue/
│   │   ├── repos/
│   │   └── prs/
│   │
│   ├── lib/
│   │   ├── github.ts
│   │   ├── prProcessor.ts
│   │   ├── queue.ts
│   │   └── utils.ts
│   │
│   ├── pull-requests/
│   ├── queue/
│   ├── repos/
│   └── settings/
```

---

# ⚙️ Local Setup

## Install

```bash
npm install
```

## Environment Variables

```env
DATABASE_URL=postgresql://user:password@localhost:5432/pr_risk
REDIS_URL=redis://localhost:6379

GITHUB_APP_ID=your_app_id
GITHUB_PRIVATE_KEY=your_private_key
GITHUB_WEBHOOK_SECRET=your_secret

GEMINI_API_KEY=your_key
```

---

## Run Services

### Backend

```bash
npm run dev
```

### Worker (REQUIRED)

```bash
npm run worker
```

---

## Redis

```bash
docker run -d -p 6379:6379 redis
```

---

## Webhook (ngrok)

```bash
ngrok http 3000
```

Webhook URL:

```
https://<ngrok-url>/api/webhook
```

---

# 📡 API Documentation

## 🔗 Base URL

```
http://localhost:3000/api
```

---

## 1️⃣ GitHub Webhook

### POST `/api/github/webhook`

Handles GitHub events.

### Headers

```
x-github-event: pull_request
x-hub-signature-256: <signature>
```

### Body

GitHub webhook payload

### Behavior

* Validates signature
* Enqueues job

---

## 2️⃣ Connect GitHub

### GET `/api/github/connect`

Initiates GitHub OAuth flow.

---

## 3️⃣ OAuth Callback

### GET `/api/github/callback`

Handles GitHub OAuth response.

---

## 4️⃣ Fetch Repositories

### GET `/api/github/repos`

Returns connected repositories.

---

## 5️⃣ Queue Trigger (Internal)

### POST `/api/queue`

Adds job manually (for testing)

```json
{
  "repo": "owner/repo",
  "prNumber": 123
}
```

---

## 6️⃣ PR Processing

### GET `/api/prs`

Fetch PR-related data (if implemented)

---

# 🔍 Risk Signals

### Dependency Risk

* package.json
* yarn.lock
* requirements.txt

---

### Auth Risk

* middleware
* guards
* permissions

---

### Suspicious Code

* eval()
* exec()
* spawn()
* rm -rf

⚠️ These are signals — NOT vulnerabilities.

---

# 🤖 AI Usage

### ❌ NOT used for:

* vulnerability detection
* correctness checks
* approvals

### ✅ Used for:

* explanation
* summarization
* context building

---

# 🗄️ Data Model

Tables:

* Repository
* PullRequest
* PullRequestRisk

Includes:

* risk flags
* reasons
* affected files
* comment status

---

# ⚠️ Common Issues

### Worker not running

```bash
npm run worker
```

---

### Redis not running

```bash
docker run -d -p 6379:6379 redis
```

---

### Webhook not triggering

```bash
ngrok http 3000
```

---

# 🚀 Key Features

* Event-driven architecture
* Async job processing
* Retry-safe system
* AI-assisted explanations
* Clean separation of concerns

---

# ❌ What This Is NOT

* Not a vulnerability scanner
* Not an auto-approval system
* Not replacing human reviewers

---

# 🧠 Developer Notes

* Worker is horizontally scalable
* Queue ensures reliability
* Fully async pipeline
* Designed for real GitHub workflows

---

# 📌 Future Improvements

* Add dashboard UI
* Metrics & monitoring
* Multi-repo scaling
* Role-based access
* Advanced heuristics

---

# ⭐ Summary

This backend helps developers **focus on risky PRs first**, using:

✔ deterministic signals
✔ async processing
✔ AI explanations

👉 Without replacing human judgment.
