# 🚀 Deployment Guide

This guide will help you deploy your Gothic Portfolio to various hosting platforms.

## Prerequisites

- Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)
- All personalizations completed in `data/cvData.json`
- Images added to `public/images/` directory

## Deploy to Vercel (Recommended) ⚡

Vercel is the easiest option as it's made by the creators of Next.js.

### Steps:

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Import Project**
   - Click "Add New Project"
   - Select your portfolio repository
   - Vercel will auto-detect Next.js settings

3. **Configure (Optional)**
   - Add environment variables if using EmailJS
   - Set custom domain (optional)

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your site is live! 🎉

### Custom Domain on Vercel

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS settings as instructed
4. SSL certificate is automatic

## Deploy to Netlify 🌐

### Steps:

1. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with your GitHub account

2. **New Site from Git**
   - Click "New site from Git"
   - Choose your repository
   - Configure build settings:
     ```
     Build command: npm run build
     Publish directory: .next
     ```

3. **Environment Variables**
   - Go to Site Settings → Build & Deploy → Environment
   - Add your EmailJS variables if needed

4. **Deploy**
   - Click "Deploy site"
   - Your site will be live in minutes

### Netlify Forms Setup

If using Netlify Forms for contact form:

1. Add to your form in `components/Contact.tsx`:
   ```tsx
   <form name="contact" method="POST" data-netlify="true">
     <input type="hidden" name="form-name" value="contact" />
     {/* rest of form fields */}
   </form>
   ```

2. Redeploy your site
3. Check Form submissions in Netlify Dashboard

## Deploy to GitHub Pages 📄

### Steps:

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d out"
     }
   }
   ```

3. **Update next.config.js**
   ```javascript
   module.exports = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Save

## Deploy to AWS Amplify ☁️

### Steps:

1. **AWS Account**
   - Create an AWS account if you don't have one
   - Go to AWS Amplify Console

2. **Connect Repository**
   - Click "New app" → "Host web app"
   - Connect your Git provider
   - Select your repository

3. **Build Settings**
   Amplify auto-detects Next.js. Verify settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

4. **Deploy**
   - Click "Save and deploy"
   - Monitor build progress
   - Site is live when build completes

## Deploy to DigitalOcean App Platform 🌊

### Steps:

1. **DigitalOcean Account**
   - Sign up at [digitalocean.com](https://digitalocean.com)

2. **Create App**
   - Click "Create" → "Apps"
   - Connect your GitHub repository
   - Select branch

3. **Configure**
   - Type: Web Service
   - Build Command: `npm run build`
   - Run Command: `npm start`

4. **Resources**
   - Choose Basic plan ($5/month recommended)

5. **Deploy**
   - Review and create
   - Wait for deployment

## Custom Domain Setup 🌐

### For any platform:

1. **Buy Domain** (if you don't have one)
   - Namecheap
   - GoDaddy
   - Google Domains

2. **DNS Configuration**

   For Vercel:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   For Netlify:
   ```
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   
   Type: A
   Name: @
   Value: 75.2.60.5
   ```

3. **SSL Certificate**
   - Automatically provided by Vercel/Netlify
   - May take up to 24 hours to activate

## Environment Variables 🔐

Remember to set these on your hosting platform:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Pre-Deployment Checklist ✅

Before deploying, ensure:

- [ ] Updated all personal info in `data/cvData.json`
- [ ] Added your actual images to `public/images/`
- [ ] Updated social media links
- [ ] Tested locally with `npm run build && npm start`
- [ ] Checked all sections display correctly
- [ ] Verified contact form works
- [ ] Updated meta tags in `app/layout.tsx`
- [ ] Added custom favicon
- [ ] Optimized images (< 500KB each)
- [ ] Removed console.log statements
- [ ] Updated README with your information

## Performance Optimization ⚡

After deployment:

1. **Test Performance**
   - Use [PageSpeed Insights](https://pagespeed.web.dev/)
   - Use [GTmetrix](https://gtmetrix.com/)

2. **Optimize Images**
   - Use WebP format
   - Compress images (tinypng.com)
   - Aim for < 200KB per image

3. **Monitor**
   - Set up Vercel/Netlify Analytics
   - Use Google Analytics
   - Monitor Core Web Vitals

## Continuous Deployment 🔄

Most platforms support automatic deployment:

1. **Push to Main Branch**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. **Automatic Build**
   - Platform detects changes
   - Builds automatically
   - Deploys new version

3. **Preview Deployments**
   - Feature branches get preview URLs
   - Test before merging to main

## Troubleshooting 🔧

### Build Fails

**Check:**
- Node version (should be 18+)
- All dependencies installed
- No TypeScript errors (`npm run lint`)

### Images Not Loading

**Solution:**
- Ensure images are in `public/images/`
- Use correct paths in `cvData.json`
- Check image names match exactly (case-sensitive)

### Contact Form Not Working

**Solution:**
- Set up EmailJS or Netlify Forms
- Add environment variables
- Check form validation

### Slow Performance

**Solution:**
- Optimize images
- Enable caching
- Use CDN (included with Vercel/Netlify)

## Post-Deployment 📊

1. **Test Everything**
   - All links work
   - Contact form submits
   - Images load
   - Mobile responsive
   - Animations smooth

2. **SEO Setup**
   - Submit to Google Search Console
   - Create sitemap
   - Verify meta tags

3. **Share**
   - Update LinkedIn with portfolio link
   - Add to GitHub profile README
   - Share on social media

## Cost Breakdown 💰

### Free Options:
- Vercel: Free for personal projects
- Netlify: Free tier (100GB bandwidth)
- GitHub Pages: Free

### Paid Options:
- Custom domain: ~$10-15/year
- Vercel Pro: $20/month (for teams)
- Netlify Pro: $19/month (for advanced features)

## Support

If you encounter issues:
1. Check platform-specific documentation
2. Review build logs
3. Search community forums
4. Contact platform support

---

**Happy Deploying! 🚀**

