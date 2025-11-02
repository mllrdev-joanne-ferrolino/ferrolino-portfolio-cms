# OG Image Generation Guide

## Quick Start

Generate your OG image with one command:

```bash
pnpm og:generate
```

This creates `/public/og-image.png` (1200x630px) ready for social media sharing!

---

## What's Included

The generated OG image has:
- ✅ Dark gradient background with subtle grid pattern
- ✅ Your profile image (from `/public/avatars/profile-image-1.png`)
- ✅ Your name in large, bold text
- ✅ Your title "Full-Stack Developer"
- ✅ Tech stack tagline
- ✅ Website URL
- ✅ Green accent color matching your brand

---

## Customization Options

### Option 1: Edit the Script (Easy)

Open `scripts/generate-og-image.mjs` and change:

```javascript
// Change colors
background: '#0a0a0a',  // Dark background (try: '#1e293b', '#111827')
accent: '#10b981',      // Green accent (try: '#3b82f6', '#8b5cf6')

// Change text
'Full-Stack Software Engineer'  // Your title
'Vue.js · Nuxt · TypeScript · Modern Web'  // Tech stack
```

### Option 2: Use Different Profile Image

Point to a different image:

```javascript
profileImagePath: path.join(__dirname, '../public/avatars/profile-image-2.png')
```

### Option 3: Change Layout

Adjust positions in the SVG:
- `x="500"` - Horizontal position
- `y="280"` - Vertical position
- `font-size="64"` - Text size

---

## Alternative Methods

### Method 1: Use Canva (No Code)

1. Go to [Canva.com](https://www.canva.com/)
2. Search for "Open Graph" or create custom size: 1200x630px
3. Use template or design from scratch
4. Export as PNG
5. Save as `/public/og-image.png`

**Canva Templates:**
- Social Media > Facebook Post
- Then resize to 1200x630px

### Method 2: Use Figma (Design Tool)

1. Open [Figma](https://www.figma.com/)
2. Create new frame: 1200x630px
3. Design your OG image
4. Export as PNG
5. Save to `/public/og-image.png`

**Figma Community Templates:**
- Search "Open Graph template"
- Duplicate and customize

### Method 3: Use Online Generator

**OG Image Playground:**
- URL: https://og-playground.vercel.app/
- Generate with code
- Download result

**Bannerbear:**
- URL: https://www.bannerbear.com/tools/open-graph-image-generator/
- Simple form-based generator
- Free, no account needed

---

## Design Best Practices

### Text Readability
- Use high contrast (white text on dark bg or vice versa)
- Font size: 48-72px for title
- Font size: 24-36px for subtitle
- Safe area: Keep important content 100px from edges

### Image Guidelines
- Dimensions: 1200x630px (recommended)
- Minimum: 600x315px
- File size: Under 8MB
- Format: PNG or JPG
- Don't use text smaller than 24px

### Visual Hierarchy
1. Your face/logo (most prominent)
2. Your name (second most important)
3. Title/role
4. Website URL or tagline

### Colors
- Match your brand colors
- Use 2-3 colors maximum
- Ensure sufficient contrast
- Test in grayscale

---

## Testing Your OG Image

### Local Test
```bash
pnpm dev
# Visit: http://localhost:3000/og-image.png
```

### After Deploy
1. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Validator**: https://cards-dev.twitter.com/validator
3. **OG Preview**: https://www.opengraph.xyz/

---

## Regenerate After Changes

After editing the script:

```bash
pnpm og:generate
```

The script will overwrite `/public/og-image.png` with the new version.

---

## Advanced: Multiple OG Images

If you want different OG images per page:

1. Generate multiple images:
```bash
# Edit script to change output path
outputPath: path.join(__dirname, '../public/og-image-about.png')
```

2. Update page meta:
```javascript
// in about.vue
const ogImage = `${siteUrl}/og-image-about.png`
```

---

## Troubleshooting

### Issue: Image looks blurry
**Solution**: Ensure dimensions are exactly 1200x630px

### Issue: Text is cut off
**Solution**: Reduce font size or adjust x/y positions

### Issue: File size too large
**Solution**: 
- Optimize with: https://tinypng.com/
- Or compress in script:
```javascript
.png({ quality: 80 })
```

### Issue: Colors don't match brand
**Solution**: 
- Get your brand colors
- Update hex codes in script
- Check your `app.config.ts` for primary color

---

## Script Configuration Reference

```javascript
const config = {
  width: 1200,           // OG image width
  height: 630,           // OG image height
  background: '#0a0a0a', // Background color (hex)
  profileImagePath: '...', // Path to your photo
  outputPath: '...'      // Where to save
}
```

---

## Examples

### Dark Theme (Current)
```javascript
background: '#0a0a0a'
textColor: '#ffffff'
accentColor: '#10b981'
```

### Light Theme
```javascript
background: '#ffffff'
textColor: '#0a0a0a'
accentColor: '#10b981'
```

### Blue Accent
```javascript
background: '#0f172a'
textColor: '#ffffff'
accentColor: '#3b82f6'
```

### Purple Accent
```javascript
background: '#1e1b4b'
textColor: '#ffffff'
accentColor: '#8b5cf6'
```

---

## Resources

- [Open Graph Protocol](https://ogp.me/)
- [Sharp Documentation](https://sharp.pixelplumbing.com/)
- [Canva OG Templates](https://www.canva.com/templates/s/open-graph/)
- [OG Image Examples](https://www.opengraph.xyz/examples)

---

## Quick Tips

1. **Keep it simple** - Less is more for OG images
2. **Test on mobile** - Most shares happen on mobile
3. **Use your photo** - Personal brands need faces
4. **Brand consistency** - Match your website colors
5. **Update regularly** - Refresh for new projects/roles

---

## Need Help?

If you want to:
- Change the layout completely
- Add more elements (icons, badges)
- Create animated OG images
- Generate per-blog-post images

Just ask! The script can be extended for more complex designs.
