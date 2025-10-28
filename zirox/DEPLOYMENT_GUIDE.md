# GitHub Pages Deployment Guide for BMS Website

## ✅ Configuration Complete

Your Next.js site is now configured for GitHub Pages deployment!

## 📋 Deployment Steps

### Option 1: Automatic Deployment with GitHub Actions (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages in your repository:**
   - Go to your GitHub repository
   - Click on **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy your site!

3. **Your site will be available at:**
   - `https://your-username.github.io/` (if repo name matches username)
   - `https://your-username.github.io/repo-name/` (if different repo name)

### Option 2: Manual Deployment

1. **Build the site:**
   ```bash
   cd zirox
   npm run build
   ```

2. **The static files will be in the `out` folder**

3. **Deploy the `out` folder to GitHub Pages:**
   - You can use the `gh-pages` package:
   ```bash
   npm install -D gh-pages
   npx gh-pages -d out
   ```

## ⚠️ Important Notes

### If your repository name is NOT your-username.github.io:

You need to update the `basePath` in `next.config.mjs`:

```javascript
const nextConfig = {
  output: 'export',
  basePath: '/your-repo-name',  // ← Uncomment and update this
  images: {
    unoptimized: true,
  },
};
```

Then rebuild:
```bash
npm run build
```

## 🔧 Configuration Files

- **`next.config.mjs`**: Configured with `output: 'export'` for static site generation
- **`.github/workflows/deploy.yml`**: GitHub Actions workflow for automatic deployment
- **`public/.nojekyll`**: Tells GitHub Pages not to use Jekyll

## 🚀 After Deployment

- Your BMS website will be live on GitHub Pages
- Any push to the main branch will automatically trigger a new deployment
- Build time: Usually 2-3 minutes

## 📝 Troubleshooting

**If you see a blank page:**
- Check if you need to set the `basePath` (see above)
- Verify GitHub Pages is enabled in repository settings
- Check the Actions tab for any build errors

**If images don't load:**
- Images are set to `unoptimized: true` which is required for static export
- Make sure all image paths start with `/img/` (not relative paths)

## 🎉 Your Website Features

- ✅ Static site generation (fast loading)
- ✅ SEO optimized
- ✅ Mobile responsive
- ✅ BMS branding throughout
- ✅ Automatic deployment on push

---

**Need help?** Check the GitHub Actions logs in the "Actions" tab of your repository.

