# 🎨 Customization Guide

This guide will help you personalize your Gothic Portfolio to match your style and information.

## 📝 Table of Contents

1. [Update Personal Information](#update-personal-information)
2. [Customize Colors](#customize-colors)
3. [Modify Typography](#modify-typography)
4. [Add/Remove Sections](#addremove-sections)
5. [Customize Animations](#customize-animations)
6. [Advanced Customizations](#advanced-customizations)

## Update Personal Information

### Step 1: Edit CV Data

Open `data/cvData.json` and update your information:

```json
{
  "personalInfo": {
    "name": "Your Full Name",
    "title": "Your Professional Title | Specialty | Expertise",
    "tagline": "Your unique tagline",
    "email": "your.email@domain.com",
    "phone": "+1 (XXX) XXX-XXXX",
    "location": "Your City, State",
    "summary": "Write a compelling 2-3 sentence summary about yourself..."
  }
}
```

### Step 2: Update Social Links

```json
{
  "social": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "twitter": "https://twitter.com/yourusername",
    "portfolio": "https://yourportfolio.com"
  }
}
```

### Step 3: Add Your Skills

Skills are organized by category. Update each section:

```json
{
  "skills": {
    "languages": [
      {
        "name": "JavaScript",
        "level": 95,
        "icon": "SiJavascript"
      }
    ]
  }
}
```

**Available Icons:**
- Languages: `SiJavascript`, `SiTypescript`, `SiPython`, `SiCsharp`, `SiPostgresql`
- Frontend: `SiReact`, `SiNextdotjs`, `SiVuedotjs`, `SiTailwindcss`, `SiHtml5`
- Backend: `SiNodedotjs`, `SiDotnet`, `SiExpress`, `SiGraphql`
- Cloud: `SiAmazonaws`, `SiMicrosoftazure`, `SiDocker`, `SiKubernetes`
- Databases: `SiPostgresql`, `SiMongodb`, `SiRedis`, `SiMysql`
- Tools: `SiGit`, `SiVisualstudiocode`, `SiJira`, `SiFigma`

### Step 4: Add Work Experience

```json
{
  "experience": [
    {
      "id": 1,
      "company": "Company Name",
      "position": "Your Position",
      "location": "City, State",
      "startDate": "2021-03",
      "endDate": null,
      "current": true,
      "description": "Brief description of role",
      "achievements": [
        "Achievement 1 with metrics",
        "Achievement 2 with impact",
        "Achievement 3 with results"
      ],
      "technologies": ["Tech1", "Tech2", "Tech3"]
    }
  ]
}
```

### Step 5: Showcase Projects

```json
{
  "projects": [
    {
      "id": 1,
      "title": "Project Name",
      "description": "Detailed description of your project",
      "image": "/images/project1.jpg",
      "technologies": ["React", "Node.js", "MongoDB"],
      "features": [
        "Key feature 1",
        "Key feature 2",
        "Key feature 3"
      ],
      "github": "https://github.com/yourusername/project",
      "demo": "https://project-demo.com",
      "status": "completed"
    }
  ]
}
```

## Customize Colors

### Gothic Color Scheme

Edit `tailwind.config.ts`:

```typescript
colors: {
  gothic: {
    black: '#0a0a0a',      // Deep black background
    darker: '#121212',      // Slightly lighter black
    dark: '#1a1a1a',        // Dark gray
    gray: '#2a2a2a',        // Medium gray
    lightgray: '#3a3a3a',   // Light gray
    gold: '#d4af37',        // Gold accent
    crimson: '#8b0000',     // Crimson highlight
    accent: '#a08040',      // Muted gold
  },
}
```

### Alternative Color Schemes

#### Blue Gothic
```typescript
colors: {
  gothic: {
    black: '#0a0a0a',
    darker: '#0d1117',
    dark: '#161b22',
    gray: '#21262d',
    lightgray: '#30363d',
    gold: '#58a6ff',        // Electric blue
    crimson: '#1f6feb',     // Royal blue
    accent: '#388bfd',      // Sky blue
  },
}
```

#### Purple Gothic
```typescript
colors: {
  gothic: {
    black: '#0a0a0a',
    darker: '#120a1f',
    dark: '#1a0f2e',
    gray: '#2a1b3d',
    lightgray: '#3a2749',
    gold: '#bc4bf9',        // Vibrant purple
    crimson: '#8b2cbb',     // Deep purple
    accent: '#9d4edd',      // Medium purple
  },
}
```

#### Green Gothic
```typescript
colors: {
  gothic: {
    black: '#0a0a0a',
    darker: '#0d1b0f',
    dark: '#0f2912',
    gray: '#1a3a1f',
    lightgray: '#254a2b',
    gold: '#00ff88',        // Neon green
    crimson: '#00cc70',     // Forest green
    accent: '#00e677',      // Bright green
  },
}
```

### Apply Colors

After changing colors, restart dev server:
```bash
npm run dev
```

## Modify Typography

### Change Fonts

Edit `app/layout.tsx`:

```typescript
import { Inter, Cormorant_Garamond } from 'next/font/google'

// Replace with your preferred fonts
import { Playfair_Display, Raleway } from 'next/font/google'

const serif = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
})

const sans = Raleway({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
})
```

### Popular Font Combinations

1. **Classic Gothic**
   - Headings: `Cinzel`
   - Body: `Montserrat`

2. **Modern Gothic**
   - Headings: `Playfair Display`
   - Body: `Source Sans Pro`

3. **Elegant Gothic**
   - Headings: `Libre Baskerville`
   - Body: `Lato`

4. **Victorian Gothic**
   - Headings: `UnifrakturCook`
   - Body: `Open Sans`

## Add/Remove Sections

### Add a New Section

1. **Create Component** (`components/NewSection.tsx`):

```typescript
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function NewSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="new-section" className="py-20 bg-gothic-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="font-gothic text-4xl text-gothic-gold">
            New Section
          </h2>
          {/* Your content */}
        </motion.div>
      </div>
    </section>
  )
}
```

2. **Add to Page** (`app/page.tsx`):

```typescript
import NewSection from '@/components/NewSection'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <NewSection />  {/* Add here */}
      <About />
      {/* ... */}
    </main>
  )
}
```

3. **Add to Navigation** (`components/Navbar.tsx`):

```typescript
const navLinks = [
  // ...
  { name: 'New Section', href: '#new-section' },
]
```

### Remove a Section

1. Remove import from `app/page.tsx`
2. Remove component from render
3. Remove navigation link from `components/Navbar.tsx`

## Customize Animations

### Speed Up/Slow Down

In any component, adjust `duration`:

```typescript
// Slower animation
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.5 }}  // Was 0.6
>

// Faster animation
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.3 }}  // Was 0.6
>
```

### Change Animation Type

```typescript
// Slide from left
initial={{ opacity: 0, x: -50 }}
animate={{ opacity: 1, x: 0 }}

// Slide from right
initial={{ opacity: 0, x: 50 }}
animate={{ opacity: 1, x: 0 }}

// Scale up
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}

// Rotate in
initial={{ opacity: 0, rotate: -10 }}
animate={{ opacity: 1, rotate: 0 }}
```

### Disable Animations

To disable all animations, remove Framer Motion:

```typescript
// Before
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
  Content
</motion.div>

// After
<div>
  Content
</div>
```

## Advanced Customizations

### Add Particles Background

Install particles:
```bash
npm install react-tsparticles tsparticles
```

Create `components/ParticlesBackground.tsx`:
```typescript
// Particles component code here
```

### Add Dark/Light Mode Toggle

1. Install next-themes:
```bash
npm install next-themes
```

2. Wrap app in ThemeProvider
3. Add toggle button to Navbar
4. Update Tailwind for dark mode

### Add Blog Section

1. Install MDX:
```bash
npm install @next/mdx @mdx-js/loader
```

2. Create blog posts in `content/blog/`
3. Create blog listing page
4. Add to navigation

### Custom Cursor

Add to `app/globals.css`:

```css
* {
  cursor: url('/cursors/default.cur'), auto;
}

a, button {
  cursor: url('/cursors/pointer.cur'), pointer;
}
```

### Add Sound Effects

Install Howler.js:
```bash
npm install howler
```

Add sound to interactions:
```typescript
import { Howl } from 'howler'

const sound = new Howl({
  src: ['/sounds/click.mp3']
})

<button onClick={() => sound.play()}>
  Click Me
</button>
```

## Tips & Best Practices

1. **Keep it Simple**: Don't over-customize, maintain Gothic aesthetic
2. **Test Mobile**: Always test changes on mobile devices
3. **Performance**: Heavy animations can slow down site
4. **Consistency**: Keep color scheme consistent throughout
5. **Accessibility**: Ensure sufficient contrast ratios
6. **Backup**: Git commit before major changes

## Need Help?

- Check the main [README.md](README.md)
- Review [DEPLOYMENT.md](DEPLOYMENT.md) for hosting
- Open an issue on GitHub
- Email: keny.martin@example.com

---

**Happy Customizing! 🎨**

