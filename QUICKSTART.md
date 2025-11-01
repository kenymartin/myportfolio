# ⚡ Quick Start Guide

Get your Gothic Portfolio up and running in 5 minutes!

## 📋 Prerequisites

- Node.js 18+ installed ([Download](https://nodejs.org/))
- A code editor (VS Code recommended)
- Terminal/Command prompt

## 🚀 3-Step Setup

### Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages including Next.js, React, Tailwind CSS, and Framer Motion.

### Step 2: Add Your Information

Edit `data/cvData.json` and replace the placeholder information with yours:

```json
{
  "personalInfo": {
    "name": "Your Name Here",
    "title": "Your Title Here",
    "email": "your-email@example.com"
  }
}
```

### Step 3: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## ✨ That's It!

You now have a fully functional Gothic portfolio running locally.

## 📝 Next Steps

### 1. Customize Your Data (5 minutes)

Update these sections in `data/cvData.json`:
- ✅ Personal info (name, email, location)
- ✅ Social links (GitHub, LinkedIn)
- ✅ Skills (add/remove as needed)
- ✅ Experience (your work history)
- ✅ Projects (your portfolio pieces)

### 2. Add Your Images (10 minutes)

Place these images in `public/images/`:
- `profile.jpg` - Your photo (800x800px)
- `project1.jpg`, `project2.jpg`, etc. - Project screenshots
- `og-image.jpg` - Social media preview (1200x630px)

### 3. Test Everything (5 minutes)

- Navigate through all sections
- Click all links
- Test on mobile (resize browser)
- Try the contact form

### 4. Deploy (10 minutes)

Choose a platform and deploy:

**Vercel (Easiest):**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Or use the web interface:**
1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import repository
4. Deploy!

## 🎨 Want to Customize More?

Check out these guides:

- **Colors & Theme**: [CUSTOMIZATION.md](CUSTOMIZATION.md#customize-colors)
- **Fonts**: [CUSTOMIZATION.md](CUSTOMIZATION.md#modify-typography)
- **Animations**: [CUSTOMIZATION.md](CUSTOMIZATION.md#customize-animations)
- **Add Sections**: [CUSTOMIZATION.md](CUSTOMIZATION.md#addremove-sections)

## 📚 Available Scripts

```bash
# Development server (with hot reload)
npm run dev

# Production build
npm run build

# Production server (after build)
npm start

# Code linting
npm run lint
```

## 🆘 Common Issues

### Port 3000 already in use?

```bash
# Use a different port
npm run dev -- -p 3001
```

### Styles not showing?

```bash
# Clear cache and restart
rm -rf .next
npm run dev
```

### TypeScript errors?

```bash
# Verify all dependencies installed
npm install
```

## 📱 Mobile Testing

1. Find your local IP:
   ```bash
   # Mac/Linux
   ifconfig | grep inet
   
   # Windows
   ipconfig
   ```

2. Access from mobile:
   ```
   http://YOUR-IP:3000
   ```

## 🔥 Pro Tips

1. **Update Frequently**: Keep your projects and experience current
2. **Optimize Images**: Compress to < 200KB each for fast loading
3. **Test Mobile**: Most recruiters view portfolios on mobile
4. **Use Real Projects**: Showcase your best actual work
5. **Keep it Simple**: Less is more - quality over quantity

## 📖 Full Documentation

- **Complete Guide**: [README.md](README.md)
- **Customization**: [CUSTOMIZATION.md](CUSTOMIZATION.md)
- **Deployment**: [DEPLOYMENT.md](DEPLOYMENT.md)
- **Contributing**: [CONTRIBUTING.md](CONTRIBUTING.md)

## 💬 Need Help?

- Check [README.md](README.md) for detailed docs
- Review code comments
- Open an issue on GitHub
- Email: keny.martin@example.com

## ✅ Checklist Before Deploying

- [ ] Updated all personal info in `cvData.json`
- [ ] Added your actual images
- [ ] Updated social media links
- [ ] Tested all sections work
- [ ] Verified mobile responsiveness
- [ ] Contact form configured (EmailJS/Netlify)
- [ ] Replaced placeholder content
- [ ] Updated meta tags in `app/layout.tsx`
- [ ] Added custom favicon
- [ ] Tested in multiple browsers

## 🎉 You're Ready!

Your Gothic Portfolio is ready to impress recruiters and showcase your skills. Make it yours and land that dream job!

---

**Made with 🖤 and modern web technologies**

