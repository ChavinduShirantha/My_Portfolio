# Firebase Deployment Troubleshooting Guide

You're getting this error: **"The process '/opt/hostedtoolcache/node/18.20.8/x64/bin/npx' failed with exit code 1"**

This usually means the Firebase deployment step is failing. Here are the solutions:

## Solution 1: Verify Firebase Service Account Secret (RECOMMENDED)

### Step 1: Check if the secret was added correctly

1. Go to: https://github.com/ChavinduShirantha/My_Portfolio/settings/secrets/actions
2. You should see `FIREBASE_SERVICE_ACCOUNT` in the list
3. If it's NOT there, you need to add it

### Step 2: How to add the secret correctly

1. **Get the Firebase service account JSON:**
   - You already have this file: `chavindu-shirantha-firebase-adminsdk-fbsvc-940d1d0828.json`
   - Open it with Notepad

2. **Copy the ENTIRE contents:**
   - Select ALL text from the opening `{` to the closing `}`
   - It should look like this:
   ```json
   {
     "type": "service_account",
     "project_id": "chavindu-shirantha",
     "private_key_id": "940d1d0828...",
     "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
     "client_email": "firebase-adminsdk-fbsvc@chavindu-shirantha.iam.gserviceaccount.com",
     "client_id": "...",
     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
     "token_uri": "https://oauth2.googleapis.com/token",
     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
     "client_x509_cert_url": "...",
     "universe_domain": "googleapis.com"
   }
   ```

3. **Add to GitHub Secrets:**
   - Go to: https://github.com/ChavinduShirantha/My_Portfolio/settings/secrets/actions
   - Click **"New repository secret"**
   - Name: `FIREBASE_SERVICE_ACCOUNT` (EXACTLY like this, case-sensitive)
   - Value: Paste the ENTIRE JSON content
   - Click **"Add secret"**

### Step 3: Verify and test

1. After adding the secret, push a new commit:
   ```bash
   git commit --allow-empty -m "Trigger deployment after adding secret"
   git push
   ```

2. Check the Actions tab: https://github.com/ChavinduShirantha/My_Portfolio/actions

---

## Solution 2: Use Firebase Token Method (EASIER ALTERNATIVE)

If Solution 1 is too complicated, use this simpler method:

### Step 1: Generate Firebase token

1. Open your terminal/command prompt in the project folder
2. Run this command:
   ```bash
   firebase login:ci
   ```
3. A browser window will open - sign in with your Google account
4. After login, you'll see a token in the terminal
5. Copy the ENTIRE token (it's a long string)

### Step 2: Add token to GitHub

1. Go to: https://github.com/ChavinduShirantha/My_Portfolio/settings/secrets/actions
2. Click **"New repository secret"**
3. Name: `FIREBASE_TOKEN`
4. Value: Paste the token from Step 1
5. Click **"Add secret"**

### Step 3: Switch to the alternative workflow

1. Delete or rename the current workflow:
   ```bash
   mv .github/workflows/firebase-deploy.yml .github/workflows/firebase-deploy.yml.backup
   ```

2. Enable the alternative workflow:
   ```bash
   mv .github/workflows/firebase-deploy-alternative.yml.disabled .github/workflows/firebase-deploy-alternative.yml
   ```

3. Commit and push:
   ```bash
   git add .github/workflows/
   git commit -m "Switch to Firebase token deployment"
   git push
   ```

---

## Common Issues and Fixes

### Issue: "firebase: command not found" locally

**Solution:**
Install Firebase CLI globally:
```bash
npm install -g firebase-tools
```

### Issue: Secret not found error

**Solution:**
- Make sure the secret name is EXACTLY `FIREBASE_SERVICE_ACCOUNT` or `FIREBASE_TOKEN`
- No extra spaces, correct capitalization
- Added to the correct repository

### Issue: Permission denied error

**Solution:**
- Make sure you're the owner or admin of the Firebase project
- Check that the service account has the correct permissions

### Issue: Build succeeds but deployment still fails

**Solution:**
1. Check firebase.json is correctly configured
2. Make sure the `dist` folder is being built
3. Verify the Firebase project ID is correct in .firebaserc

---

## Quick Test: Deploy Manually First

Before debugging the automated deployment, test manual deployment:

```bash
# Build the project
npm run build

# Deploy to Firebase
firebase deploy --only hosting
```

If this works, the issue is with the GitHub Actions configuration, not your code.

---

## Which Solution Should I Use?

- ✅ **Solution 1** (Service Account): More secure, better for teams
- ✅ **Solution 2** (Token): Simpler, faster to set up, good for personal projects

**Recommendation for you:** Try Solution 2 (Firebase Token) - it's much simpler and less error-prone.

---

## Need More Help?

Check the GitHub Actions logs for the exact error:
1. Go to: https://github.com/ChavinduShirantha/My_Portfolio/actions
2. Click on the failed workflow run
3. Click on "build-and-deploy" job
4. Look at the "Deploy to Firebase" step
5. Copy the exact error message

The error message will tell you exactly what's wrong.
