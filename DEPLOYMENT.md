# Automatic Deployment Setup

This project is configured to automatically deploy to Firebase Hosting whenever code is pushed to GitHub.

## How It Works

The GitHub Actions workflow ([.github/workflows/firebase-deploy.yml](.github/workflows/firebase-deploy.yml)) automatically:
1. Checks out your code
2. Installs dependencies
3. Builds the project for production
4. Deploys to Firebase Hosting at `https://chavindu-shirantha.web.app`

## Setup Instructions

To enable automatic deployment, you need to add a Firebase service account secret to your GitHub repository:

### Step 1: Generate Firebase Service Account Key

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **chavindu-shirantha**
3. Click on the gear icon ⚙️ > **Project settings**
4. Go to the **Service accounts** tab
5. Click **Generate new private key**
6. Save the JSON file securely

### Step 2: Add Secret to GitHub

1. Go to your GitHub repository: `https://github.com/ChavinduShirantha/My_Portfolio`
2. Navigate to **Settings** > **Secrets and variables** > **Actions**
3. Click **New repository secret**
4. Name: `FIREBASE_SERVICE_ACCOUNT`
5. Value: Paste the entire contents of the JSON file from Step 1
6. Click **Add secret**

### Step 3: Test the Deployment

1. Make a small change to your code
2. Commit and push to the `master` or `main` branch:
   ```bash
   git add .
   git commit -m "Test automatic deployment"
   git push
   ```
3. Go to the **Actions** tab in your GitHub repository
4. You should see the "Deploy to Firebase Hosting" workflow running
5. Once completed, your changes will be live at `https://chavindu-shirantha.web.app`

## Deployment Triggers

The deployment workflow runs automatically when:
- You push code to the `master` or `main` branch
- You manually trigger it from the Actions tab (using workflow_dispatch)

## Environment Configuration

The project uses different configurations for development and production:

- **Development** (`npm run dev`): Uses `http://localhost:5173`
- **Production** (`npm run build`): Uses `https://chavindu-shirantha.web.app`

The base URL is automatically set based on the build mode in [vite.config.js](vite.config.js).

## Manual Deployment

If you prefer to deploy manually, you can still use:

```bash
npm run build
firebase deploy
```

## Troubleshooting

### Deployment fails with "Missing secret"
- Make sure you've added the `FIREBASE_SERVICE_ACCOUNT` secret to your GitHub repository

### Build fails
- Check the Actions tab for detailed error logs
- Ensure all dependencies are listed in package.json
- Test the build locally: `npm run build`

### Wrong URL being used
- Verify the production environment in [vite.config.js](vite.config.js)
- Check [firebase.json](firebase.json) configuration
- Ensure the correct project ID in [.firebaserc](.firebaserc)

## Support

For issues with:
- **Firebase Hosting**: [Firebase Documentation](https://firebase.google.com/docs/hosting)
- **GitHub Actions**: [GitHub Actions Documentation](https://docs.github.com/en/actions)
