# Vercel Deployment Setup

To enable the automatic deployment via GitHub Actions, you need to configure the following secrets in your GitHub repository and retrieve your Project IDs from Vercel.

## 1. Get Your Vercel Config

You need to link your local project to Vercel to generate the necessary IDs (or get them from the dashboard).

**Option A: Using Vercel CLI (Recommended)**

1.  Run the following command in your terminal (make sure you are logged in to Vercel):
    ```bash
    npx vercel link
    ```
2.  Follow the prompts to set up the project.
3.  Once completed, a `.vercel` directory will be created. The `project.json` inside `.vercel` contains:
    -   `orgId` (This is your `VERCEL_ORG_ID`)
    -   `projectId` (This is your `VERCEL_PROJECT_ID`)

**Option B: Vercel Dashboard**

1.  Go to your project settings in the Vercel Dashboard.
2.  Find **Project ID** in the General settings.
3.  Your **Account ID** (or Team ID) is your `VERCEL_ORG_ID`.

## 2. Generate a Vercel Token

1.  Go to your [Vercel Account Settings > Tokens](https://vercel.com/account/tokens).
2.  Create a new token (e.g., "GitHub Actions").
3.  Copy the token string.

## 3. Add Secrets to GitHub

1.  Go to your GitHub repository.
2.  Navigate to **Settings** > **Secrets and variables** > **Actions**.
3.  Click **New repository secret**.
4.  Add the following secrets:
    -   `VERCEL_TOKEN`: Paste your Vercel Token.
    -   `VERCEL_ORG_ID`: Paste your verification Org ID.
    -   `VERCEL_PROJECT_ID`: Paste your Project ID.

## 4. Push to Main

Once these secrets are set, any push to the `main` branch will trigger the GitHub Action and deploy your site to Vercel!
