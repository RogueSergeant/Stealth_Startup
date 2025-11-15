# Converting Social Share Image to JPG

The social share image is currently in SVG format (`social-share.svg`), which works on most platforms. However, if you need a JPG version for maximum compatibility:

## Option 1: Using Chrome/Browser (Easiest)

1. Open `social-share-template.html` in Chrome
2. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows)
3. Type "screenshot" and select "Capture screenshot"
4. Save as `social-share.jpg` in the `images/` folder
5. Update `index.html` line 12 to use `.jpg` instead of `.svg`

## Option 2: Using Online Converter

1. Go to https://cloudconvert.com/svg-to-jpg
2. Upload `images/social-share.svg`
3. Set dimensions to 1200×630px
4. Download and save as `images/social-share.jpg`

## Option 3: Using ImageMagick (Command Line)

If you have ImageMagick installed:

```bash
convert -background white -resize 1200x630! images/social-share.svg images/social-share.jpg
```

## Option 4: Using macOS Preview

1. Open `images/social-share.svg` in Preview
2. File → Export
3. Format: JPEG
4. Save as `social-share.jpg`

---

**Note:** SVG works fine for Open Graph images on Twitter, Facebook, LinkedIn, and most platforms. Only convert to JPG if you notice compatibility issues.
