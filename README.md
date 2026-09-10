This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


Number of taps:

•	Home
•	About FranklinOne
•	Solutions
•	Vendors
•	What We Do
•	Contact Us

## Fastly Compute & Next.js Deployment Guide

This project combines a Next.js static export frontend with a Fastly Compute serverless router using an Edge KV Store (`franklinassets`).

---

### 1. Local Offline Development & Testing
To test your frontend updates locally without altering production cloud data, use the offline simulator workflow.

#### Step A: Generate a Clean Next.js Build
From the main project root directory, wipe old build folders and export your updated code:
```bash
# On Windows PowerShell
Remove-Item -Recurse -Force .next, out
npm run build

Step B: Build and Run the Local Server
cd compute-js

# Package files into the offline JSON simulator
npx @fastly/compute-js-static-publish publish-content --local

# Boot up the local test environment
npm run dev:start

Step A: Push New Assets to the Cloud KV Store
cd compute-js

# Push new frontend static content to live edge servers
npx @fastly/compute-js-static-publish publish-content

Step B: Purge Old and Unused Files (Cleanup)
If you have deleted or renamed files in your project, the obsolete historical files will still persist in your KV background. To completely wipe unreferenced data and clean your cloud store, execute the clean command:
npx @fastly/compute-js-static-publish clean

Step C: Compile and Deploy the Code
# Compile code bundle
fastly compute build

# Push live to production
fastly compute deploy

3. Configuration Profiles (fastly.toml)
name = "franklinOneDemoSite"
language = "javascript"
manifest_version = 3
service_id = "YOUR_KV_STORE_ID"

[local_server.kv_stores]
franklinassets = { file = "./static-publisher/franklinassets.default.json", format = "json" }