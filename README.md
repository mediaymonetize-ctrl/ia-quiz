# AI Tool Finder Quiz 🤖

A mobile-first, multilingual Single Page Application (SPA) quiz to help users find the perfect AI tool for their needs.

## Features

✨ **Mobile-First Responsive Design** - Optimized for mobile, tablet, and desktop
🌍 **Multi-Language Support** - English, Portuguese, Spanish (auto-detection)
🎯 **Smart Recommendations** - Personalized AI tool suggestions
💰 **Monetization Ready** - Optimized for Google ADX integration
⚡ **Single Page Application** - Fast, smooth user experience
🎨 **Modern UI/UX** - Beautiful gradient design with smooth animations

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Backend**: PHP 8.2
- **Server**: Nginx
- **Deployment**: Railway (with Nixpacks)

## Project Structure

```
ia-quiz/
├── index.php              # Main PHP file (SPA entry point)
├── assets/
│   ├── css/
│   │   └── style.css      # Mobile-first responsive styles
│   ├── js/
│   │   ├── app.js         # Main application logic
│   │   ├── data.js        # AI tools database
│   │   └── i18n.js        # Internationalization system
│   └── images/            # Image assets
├── lang/
│   ├── en.json            # English translations
│   ├── pt.json            # Portuguese translations
│   └── es.json            # Spanish translations
├── nginx.conf             # Nginx configuration
├── nixpacks.toml          # Railway deployment config
└── README.md              # This file
```

## Local Development

### Prerequisites
- PHP 8.2 or higher
- Web server (Apache/Nginx) or PHP built-in server

### Running Locally

1. Clone the repository:
```bash
git clone https://github.com/mediaymonetize-ctrl/ia-quiz.git
cd ia-quiz
```

2. Start PHP built-in server:
```bash
php -S localhost:8000
```

3. Open browser and navigate to:
```
http://localhost:8000
```

## Deployment to Railway

### Automatic Deployment

1. **Connect GitHub Repository**
   - Go to [Railway.app](https://railway.app)
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose `mediaymonetize-ctrl/ia-quiz`

2. **Configure Environment**
   - Railway will automatically detect `nixpacks.toml`
   - No additional environment variables needed

3. **Deploy**
   - Railway will automatically build and deploy
   - Your app will be live at: `https://your-app.railway.app`

### Manual Deployment

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Initialize project
railway init

# Deploy
railway up
```

## Configuration

### Adding Google ADX Ads

Edit `index.php` and replace the ad placeholder comments with your Google ADX ad units:

```html
<!-- Google ADX Ad Unit -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXXXX"
     data-ad-slot="XXXXXXXXXX"
     data-ad-format="auto"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

### Adding More AI Tools

Edit `assets/js/data.js` and add new tools to the `aiToolsDatabase` array:

```javascript
{
    id: 'tool-id',
    name: 'Tool Name',
    category: 'assistant', // assistant, programming, writing, design, video, audio, productivity, translation, research
    pricing: 'freemium', // free, freemium, paid
    url: 'https://tool-url.com',
    description: {
        en: 'English description',
        pt: 'Descrição em português',
        es: 'Descripción en español'
    },
    free: true,
    paid: true,
    price: '$20/month',
    rank: 1,
    traffic: '100M'
}
```

### Adding More Languages

1. Create new translation file in `lang/` directory (e.g., `lang/fr.json`)
2. Add language detection in `assets/js/i18n.js`
3. Add language button in `index.php` footer

## Optimization Tips

### Performance
- Enable Gzip compression (already configured in nginx.conf)
- Optimize images before uploading
- Use lazy loading for ads
- Minify CSS/JS for production

### SEO
- Add meta descriptions for each language
- Implement structured data (JSON-LD)
- Create sitemap.xml
- Add robots.txt

### Monetization
- Place ads strategically (configured in layout)
- Use responsive ad units
- Implement ad refresh for long sessions
- Monitor viewability metrics

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Copyright © 2025 AI Tool Finder. All rights reserved.

## Support

For issues or questions, please open an issue on GitHub.

---

**Built with ❤️ for the AI community**
