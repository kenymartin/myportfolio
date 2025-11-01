# 🖤 Gothic Portfolio Website

A stunning, dark-themed professional portfolio website built with modern web technologies. Features elegant Gothic aesthetics with smooth animations and a fully responsive design.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff69b4?style=for-the-badge&logo=framer)

## ✨ Features

- 🎨 **Gothic Dark Theme** - Elegant dark design with gold accents
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Performance Optimized** - Lighthouse score 90+
- 🔍 **SEO Ready** - Meta tags and Open Graph support
- 📝 **Easy Customization** - Update content via JSON file
- 🎯 **Interactive Sections** - Hero, About, Skills, Experience, Projects, Contact
- 📧 **Contact Form** - Ready for EmailJS or Netlify Forms integration
- 🌐 **Modern Stack** - Next.js 14, TypeScript, Tailwind CSS

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/gothic-portfolio.git
   cd gothic-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Update Your Information

Edit the `data/cvData.json` file to update your personal information:

```json
{
  "personalInfo": {
    "name": "Your Name",
    "title": "Your Title",
    "email": "your.email@example.com",
    ...
  },
  "skills": { ... },
  "experience": [ ... ],
  "projects": [ ... ]
}
```

### Sections Overview

- **personalInfo**: Your name, title, contact details, and summary
- **social**: Links to your GitHub, LinkedIn, Twitter
- **skills**: Organized by category (languages, frontend, backend, etc.)
- **experience**: Your work history with achievements
- **projects**: Portfolio projects with images, tech stack, and links
- **education**: Your academic background
- **certifications**: Professional certifications

### Customize Colors

Modify `tailwind.config.ts` to change the Gothic color scheme:

```typescript
colors: {
  gothic: {
    black: '#0a0a0a',
    gold: '#d4af37',
    crimson: '#8b0000',
    // Add your custom colors
  }
}
```

### Add Your Images

Place your images in the `public/images/` directory:

- `profile.jpg` - Your profile photo (About section)
- `project1.jpg`, `project2.jpg`, etc. - Project screenshots
- `og-image.jpg` - Social media preview image (1200x630px)

## 📂 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero/landing section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills showcase
│   ├── Experience.tsx      # Work experience timeline
│   ├── Projects.tsx        # Portfolio projects
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer
├── data/
│   └── cvData.json         # Your CV/resume data
├── public/
│   └── images/             # Your images
├── tailwind.config.ts      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
```

## 🎨 Gothic Design Elements

### Typography

- **Headings**: Cormorant Garamond (Gothic serif)
- **Body**: Inter (Clean sans-serif)

### Color Palette

- **Primary Background**: Deep black (#0a0a0a)
- **Secondary Background**: Charcoal (#1a1a1a)
- **Accent**: Gold (#d4af37)
- **Highlight**: Crimson (#8b0000)

### Animations

- Fade-in effects
- Slide-up transitions
- Glow effects on text
- Floating particles
- Smooth scroll animations

## 📧 Contact Form Setup

### Option 1: EmailJS

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Get your service ID, template ID, and public key
3. Install EmailJS:
   ```bash
   npm install @emailjs/browser
   ```
4. Update `components/Contact.tsx`:
   ```typescript
   import emailjs from '@emailjs/browser';
   
   emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     formState,
     'YOUR_PUBLIC_KEY'
   )
   ```

### Option 2: Netlify Forms

1. Add `netlify` attribute to form in `components/Contact.tsx`:
   ```tsx
   <form name="contact" method="POST" data-netlify="true">
   ```
2. Deploy to Netlify
3. Access form submissions in Netlify dashboard

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Click "Deploy"

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [Netlify](https://netlify.com)
3. Connect your repository
4. Build command: `npm run build`
5. Publish directory: `.next`

### Environment Variables

Create a `.env.local` file for sensitive data:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## ⚡ Performance Optimization

This portfolio is optimized for performance:

- ✅ Server-side rendering with Next.js 14
- ✅ Image optimization
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Minimal bundle size
- ✅ Fast page loads

## 🔧 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🐛 Troubleshooting

### Issue: Styles not loading

**Solution**: Clear `.next` folder and rebuild
```bash
rm -rf .next
npm run dev
```

### Issue: Font not displaying

**Solution**: Fonts are loaded via Google Fonts CDN. Check your internet connection.

### Issue: Animations not working

**Solution**: Ensure Framer Motion is installed:
```bash
npm install framer-motion
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 💡 Customization Tips

### Change Animation Speed

In component files, adjust Framer Motion `duration`:
```typescript
transition={{ duration: 0.6 }} // Slower
transition={{ duration: 0.3 }} // Faster
```

### Add New Sections

1. Create a new component in `components/`
2. Import it in `app/page.tsx`
3. Add navigation link in `components/Navbar.tsx`

### Modify Gothic Elements

Edit `app/globals.css` for custom Gothic effects:
```css
.gothic-ornament::before {
  content: '◈'; /* Change ornament symbol */
}
```

## 📬 Support

For support, email keny.martin@example.com or open an issue on GitHub.

## 🌟 Acknowledgments

- Design inspiration from Gothic architecture and Victorian aesthetics
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**Built with 🖤 by Keny Martin Robles**

*Crafting elegant solutions in the digital realm*

