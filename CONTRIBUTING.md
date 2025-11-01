# 🤝 Contributing to Gothic Portfolio

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the Gothic aesthetic and professional appearance
- Maintain code quality and performance

## How to Contribute

### Reporting Bugs 🐛

1. Check if the bug has already been reported in Issues
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Your environment (OS, browser, Node version)

### Suggesting Features ✨

1. Check if the feature has been suggested
2. Create a new issue describing:
   - The problem it solves
   - Proposed solution
   - Alternative solutions considered
   - Impact on existing functionality

### Pull Requests 🚀

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/gothic-portfolio.git
   cd gothic-portfolio
   ```

2. **Create a branch**
   ```bash
   git checkout -b feature/amazing-feature
   # or
   git checkout -b fix/bug-fix
   ```

3. **Make your changes**
   - Follow existing code style
   - Add comments for complex logic
   - Update documentation if needed

4. **Test your changes**
   ```bash
   npm run dev
   npm run build
   npm run lint
   ```

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add amazing feature"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

7. **Create Pull Request**
   - Clear description of changes
   - Reference related issues
   - Include screenshots for UI changes

## Development Guidelines

### Code Style

- Use TypeScript for type safety
- Follow existing component structure
- Use functional components with hooks
- Keep components focused and reusable

### Component Structure

```typescript
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface ComponentProps {
  // Props interface
}

export default function Component({ prop }: ComponentProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section className="py-20 bg-gothic-darker">
      {/* Component content */}
    </section>
  )
}
```

### Naming Conventions

- Components: `PascalCase` (e.g., `Hero.tsx`)
- Functions: `camelCase` (e.g., `handleSubmit`)
- CSS classes: `kebab-case` (e.g., `gothic-card`)
- Constants: `UPPER_SNAKE_CASE` (e.g., `MAX_ITEMS`)

### CSS/Styling

- Use Tailwind CSS classes
- Add custom styles in `globals.css` only if necessary
- Maintain Gothic theme consistency
- Ensure responsive design

### Animation Guidelines

- Use Framer Motion for animations
- Keep animations smooth (duration: 0.3-0.8s)
- Respect user's motion preferences
- Don't overuse animations

### Performance

- Optimize images (< 200KB)
- Lazy load components when possible
- Minimize bundle size
- Test Lighthouse score (target: 90+)

## Project Structure

```
portfolio/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page
│   └── globals.css     # Global styles
├── components/          # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   └── ...
├── data/               # Data files
│   └── cvData.json     # Portfolio data
├── public/             # Static assets
│   └── images/         # Images
└── docs/               # Documentation
```

## Testing

Before submitting PR:

1. **Visual Testing**
   - Test all sections
   - Check mobile responsiveness
   - Verify animations work
   - Test in multiple browsers

2. **Functionality Testing**
   - Test all links
   - Verify form submission
   - Check navigation
   - Test social links

3. **Performance Testing**
   - Run Lighthouse audit
   - Check bundle size
   - Test loading speed
   - Verify no console errors

## Documentation

Update documentation when:
- Adding new features
- Changing configuration
- Modifying data structure
- Adding dependencies

Files to update:
- `README.md` - Main documentation
- `CUSTOMIZATION.md` - Customization guide
- `DEPLOYMENT.md` - Deployment instructions
- Code comments - Complex logic

## Commit Message Format

Use clear, descriptive commit messages:

```
feat: Add new testimonials section
fix: Resolve mobile nav toggle issue
docs: Update customization guide
style: Improve button hover effects
refactor: Simplify Skills component
perf: Optimize image loading
```

## Review Process

1. Automated checks must pass
2. Code review by maintainer
3. Testing on staging environment
4. Merge to main branch

## Getting Help

- 📖 Check [README.md](README.md)
- 🎨 Review [CUSTOMIZATION.md](CUSTOMIZATION.md)
- 🚀 Read [DEPLOYMENT.md](DEPLOYMENT.md)
- 💬 Ask questions in Issues
- 📧 Email: keny.martin@example.com

## Recognition

Contributors will be:
- Listed in README.md
- Credited in release notes
- Appreciated greatly! 🎉

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for making Gothic Portfolio better! 🖤

