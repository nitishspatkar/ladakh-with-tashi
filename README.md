# Ladakh with Tashi

A static website for Tashi, a local Ladakhi travel guide based in Leh.

## Local preview

```bash
cd ladakh-with-tashi
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080)

## Deploy

This is a plain static site — no build step required. Deploy the folder to any static host:

- **Netlify** — drag-and-drop the folder, or connect this git repo
- **Vercel** — import repo, set output directory to root
- **GitHub Pages** — enable Pages from the `main` branch

Update the canonical URL in `index.html` once you have a domain.

## Configuration

Edit `js/config.js`:

| Setting | Purpose |
|---------|---------|
| `whatsappNumber` | WhatsApp link (no `+` prefix) |
| `whatsappDisplay` | Phone number shown on the contact section |
| `plausibleDomain` | Set to your domain to enable [Plausible](https://plausible.io) analytics |

## Adding images

Place photos in the paths below. Missing images show a placeholder automatically.

### Already included
- `assets/images/hero/hero-1.jpg` … `hero-6.jpg`
- `assets/images/portrait/tashi-portrait.jpg`

### Routes (4 photos each)
```
assets/images/routes/khardung-la-1.jpg … -4.jpg
assets/images/routes/nubra-valley-1.jpg … -4.jpg
assets/images/routes/pangong-lake-1.jpg … -4.jpg
assets/images/routes/turtuk-1.jpg … -4.jpg
assets/images/routes/thiksey-monastery-1.jpg … -4.jpg
assets/images/routes/alchi-monastery-1.jpg … -4.jpg
assets/images/routes/wari-la-1.jpg … -4.jpg
```

### Seasons (1 photo each)
```
assets/images/seasons/spring.jpg
assets/images/seasons/summer.jpg
assets/images/seasons/autumn.jpg
assets/images/seasons/winter.jpg
```

### Gallery
```
assets/images/gallery/nubra-valley.jpg
assets/images/gallery/pangong-guests.jpg
assets/images/gallery/thiksey-morning.jpg
assets/images/gallery/wari-la-trail.jpg
assets/images/gallery/turtuk-orchards.jpg
assets/images/gallery/khardung-group.jpg
assets/images/gallery/alchi-flags.jpg
```

**Tip:** Compress images before uploading (aim for under 300 KB each). Tools like [Squoosh](https://squoosh.app) work well.

## Structure

```
index.html          Main page
css/styles.css      Styles
js/
  config.js         Site settings (WhatsApp, analytics)
  data.js           Routes, gallery, seasons content
  main.js           Interactivity (carousel, seasons, rendering)
assets/
  favicon.svg
  images/
    hero/           Hero slideshow
    portrait/       Tashi portrait
    routes/         Route thumbnails (upload here)
    seasons/        Season photos (upload here)
    gallery/        Gallery photos (upload here)
    placeholder.svg Fallback for missing images
```

## Future: multilingual

The site is English-only for now. To add German, French, or Spanish later, consider splitting content in `js/data.js` by locale or moving to a static site generator with i18n support.
