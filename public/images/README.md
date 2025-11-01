# 📸 Images Directory

Place your portfolio images in this directory.

## Required Images

### Profile Photo
- **Filename**: `profile.jpg` or `profile.png`
- **Size**: 800x800px recommended
- **Format**: JPG or PNG
- **Usage**: About section

### Project Screenshots
- **Filenames**: `project1.jpg`, `project2.jpg`, etc.
- **Size**: 1200x800px recommended
- **Format**: JPG or PNG
- **Usage**: Projects section

### Open Graph Image (Social Media Preview)
- **Filename**: `og-image.jpg`
- **Size**: 1200x630px (required)
- **Format**: JPG
- **Usage**: Social media sharing preview

## Image Optimization Tips

1. **Compress Images**
   - Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
   - Target: < 200KB per image
   - Quality: 80-85% is usually perfect

2. **Proper Dimensions**
   - Profile: 800x800px (square)
   - Projects: 1200x800px (3:2 ratio)
   - OG Image: 1200x630px (exact)

3. **Format Choice**
   - JPG: For photos
   - PNG: For graphics with transparency
   - WebP: For best compression (modern browsers)

4. **Naming Convention**
   ```
   profile.jpg
   project1.jpg
   project2.jpg
   project3.jpg
   og-image.jpg
   ```

## Quick Start

If you don't have images ready, you can use placeholders:

1. **Free Stock Photos**
   - [Unsplash](https://unsplash.com/)
   - [Pexels](https://pexels.com/)
   - [Pixabay](https://pixabay.com/)

2. **Placeholder Services**
   - [Placeholder.com](https://placeholder.com/)
   - [Lorem Picsum](https://picsum.photos/)

3. **AI Generated**
   - [DALL-E](https://openai.com/dall-e-2)
   - [Midjourney](https://midjourney.com/)

## Update Image Paths

After adding images, update `data/cvData.json`:

```json
{
  "personalInfo": {
    "photo": "/images/profile.jpg"
  },
  "projects": [
    {
      "image": "/images/project1.jpg"
    }
  ]
}
```

## Example Structure

```
public/images/
├── profile.jpg          (Your photo)
├── project1.jpg         (Project screenshot)
├── project2.jpg         (Project screenshot)
├── project3.jpg         (Project screenshot)
├── project4.jpg         (Project screenshot)
└── og-image.jpg         (Social preview)
```

## Testing Images

After adding images:

1. Run development server: `npm run dev`
2. Check each section displays correctly
3. Verify images load on mobile
4. Test social media preview with [OpenGraph.xyz](https://www.opengraph.xyz/)

---

**Note**: This README.md file will not appear in production. It's just for documentation during development.

