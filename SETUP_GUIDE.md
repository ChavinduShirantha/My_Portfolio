# Firebase Auto-Deployment Setup Guide

Follow these exact steps to enable automatic deployment to Firebase when you push to GitHub.

## Step-by-Step Instructions

### Step 1: Open Firebase Console

1. Open your browser and go to: **https://console.firebase.google.com/**
2. Sign in with your Google account
3. Click on your project: **chavindu-shirantha**

### Step 2: Generate Service Account Key

1. In your Firebase project, click the **⚙️ gear icon** (top left, next to "Project Overview")
2. Click **Project settings**
3. Navigate to the **Service accounts** tab (at the top)
4. Scroll down and find the section: **Firebase Admin SDK**
5. Click the button: **Generate new private key**
6. A popup will appear - click **Generate key**
7. A JSON file will download - **SAVE THIS FILE SECURELY** (you'll need it in the next step)
   - The file will be named something like: `chavindu-shirantha-firebase-adminsdk-xxxxx.json`
   - ⚠️ **NEVER commit this file to Git or share it publicly!**

### Step 3: Add Secret to GitHub Repository

1. Open your browser and go to your GitHub repository:
   ```
   https://github.com/ChavinduShirantha/My_Portfolio
   ```

2. Click on **Settings** (top menu bar)
   - If you don't see Settings, make sure you're logged in and have admin access to the repository

3. In the left sidebar, click on **Secrets and variables**

4. Click on **Actions**

5. Click the green button: **New repository secret**

6. Fill in the form:
   - **Name**: `FIREBASE_SERVICE_ACCOUNT`
     - ⚠️ Must be EXACTLY this name (case-sensitive)

   - **Secret**: Open the JSON file you downloaded in Step 2
     - Open it with Notepad or any text editor
     - Copy **ALL** the contents (everything from `{` to `}`)
     - Paste it into the Secret field
     - It should look something like this:
       ```json
       {
         "type": "service_account",
         "project_id": "chavindu-shirantha",
         "private_key_id": "...",
         "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
         "client_email": "...",
         ...
       }
       ```

7. Click **Add secret**

### Step 4: Verify the Secret was Added

1. You should now see `FIREBASE_SERVICE_ACCOUNT` in your list of secrets
2. It will show when it was created/updated
3. You won't be able to view the value again (that's normal for security)

### Step 5: Test the Automatic Deployment

Now let's test if everything works:

1. Make a small change to any file in your project (or just commit the new workflow)

2. Open your terminal and run:
   ```bash
   git add .
   git commit -m "Test automatic deployment to Firebase"
   git push
   ```

3. Go to your GitHub repository and click the **Actions** tab

4. You should see a workflow running called **"Deploy to Firebase Hosting"**

5. Click on it to see the progress:
   - ✅ Checkout code
   - ✅ Setup Node.js
   - ✅ Install dependencies
   - ✅ Build project
   - ✅ Deploy to Firebase

6. Once all steps show green checkmarks, your site is deployed!

7. Visit your site to verify: **https://chavindu-shirantha.web.app**

## Troubleshooting

### Issue: "Secret `FIREBASE_SERVICE_ACCOUNT` not found"

**Solution:**
- Go back to Step 3 and verify:
  - The secret name is exactly: `FIREBASE_SERVICE_ACCOUNT` (no spaces, correct capitalization)
  - You added it to the correct repository
  - You clicked "Add secret" to save it

### Issue: "Error: Unable to parse service account JSON"

**Solution:**
- The JSON might be corrupted. Make sure you:
  - Copied the ENTIRE contents of the JSON file
  - Didn't add any extra characters or line breaks
  - The JSON starts with `{` and ends with `}`

### Issue: Workflow doesn't appear in Actions tab

**Solution:**
- Make sure the workflow file exists at: `.github/workflows/firebase-deploy.yml`
- The workflow only triggers on push to `master` or `main` branch
- Check which branch you're on: `git branch`

### Issue: Build fails during deployment

**Solution:**
- Test the build locally first: `npm run build`
- Check the error message in the Actions tab
- Make sure all dependencies are in package.json

### Issue: Deployment succeeds but site shows old content

**Solution:**
- Clear your browser cache (Ctrl+Shift+Delete)
- Try opening in incognito/private mode
- Wait 1-2 minutes for Firebase CDN to update
- Check the Firebase Console hosting tab to see the deployment history

## How It Works

From now on, whenever you push code to GitHub:

1. GitHub Actions automatically detects the push
2. It spins up a fresh Ubuntu server
3. Installs Node.js and your dependencies
4. Builds your project with `npm run build`
5. Uses the service account to authenticate with Firebase
6. Deploys the `dist` folder to Firebase Hosting
7. Your site at `https://chavindu-shirantha.web.app` is updated!

**No manual deployment needed anymore! 🎉**

## Security Notes

- ⚠️ The service account JSON file has full access to your Firebase project
- Never commit it to Git
- Never share it publicly
- It's safely stored as an encrypted secret in GitHub
- Only GitHub Actions can access it during deployment

## Need Help?

If you're stuck:
1. Check the Actions tab for detailed error logs
2. Verify each step above carefully
3. Make sure you have admin access to both the GitHub repo and Firebase project
